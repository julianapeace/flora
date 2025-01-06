// src/index.ts
import { PostgresDatabaseAdapter } from "@ai16z/adapter-postgres";
import { SqliteDatabaseAdapter } from "@ai16z/adapter-sqlite";
import { DirectClientInterface } from "@ai16z/client-direct";
import { DiscordClientInterface } from "@ai16z/client-discord";
import { AutoClientInterface } from "@ai16z/client-auto";
import { TelegramClientInterface } from "@ai16z/client-telegram";
import { TwitterClientInterface } from "@ai16z/client-twitter";
import {
  DbCacheAdapter,
  defaultCharacter as defaultCharacter2,
  FsCacheAdapter,
  stringToUuid,
  AgentRuntime,
  CacheManager,
  ModelProviderName as ModelProviderName2,
  elizaLogger,
  settings,
  validateCharacterConfig
} from "@ai16z/eliza";
import { bootstrapPlugin } from "@ai16z/plugin-bootstrap";
import { solanaPlugin } from "@ai16z/plugin-solana";
import { nodePlugin } from "@ai16z/plugin-node";
import Database from "better-sqlite3";
import fs from "fs";
import readline from "readline";
import yargs from "yargs";
import path from "path";
import { fileURLToPath } from "url";

// src/agentCharacter.ts
import { ModelProviderName, defaultCharacter, Clients } from "@ai16z/eliza";
var character = {
  ...defaultCharacter,
  clients: [Clients.TWITTER],
  modelProvider: ModelProviderName.ANTHROPIC,
  name: "justachillagent",
  system: `you are just a chill agent`
};

// src/index.ts
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var wait = (minTime = 1e3, maxTime = 3e3) => {
  const waitTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  return new Promise((resolve) => setTimeout(resolve, waitTime));
};
function parseArguments() {
  try {
    return yargs(process.argv.slice(2)).option("character", {
      type: "string",
      description: "Path to the character JSON file"
    }).option("characters", {
      type: "string",
      description: "Comma separated list of paths to character JSON files"
    }).parseSync();
  } catch (error) {
    console.error("Error parsing arguments:", error);
    return {};
  }
}
async function loadCharacters(charactersArg) {
  let characterPaths = charactersArg?.split(",").map((filePath) => {
    if (path.basename(filePath) === filePath) {
      filePath = "../characters/" + filePath;
    }
    return path.resolve(process.cwd(), filePath.trim());
  });
  const loadedCharacters = [];
  if (characterPaths?.length > 0) {
    for (const path2 of characterPaths) {
      try {
        const character2 = JSON.parse(fs.readFileSync(path2, "utf8"));
        validateCharacterConfig(character2);
        loadedCharacters.push(character2);
      } catch (e) {
        console.error(`Error loading character from ${path2}: ${e}`);
        process.exit(1);
      }
    }
  }
  if (loadedCharacters.length === 0) {
    console.log("No characters found, using default character");
    loadedCharacters.push(defaultCharacter2);
  }
  return loadedCharacters;
}
function getTokenForProvider(provider, character2) {
  switch (provider) {
    case ModelProviderName2.OPENAI:
      return character2.settings?.secrets?.OPENAI_API_KEY || settings.OPENAI_API_KEY;
    case ModelProviderName2.LLAMACLOUD:
      return character2.settings?.secrets?.LLAMACLOUD_API_KEY || settings.LLAMACLOUD_API_KEY || character2.settings?.secrets?.TOGETHER_API_KEY || settings.TOGETHER_API_KEY || character2.settings?.secrets?.XAI_API_KEY || settings.XAI_API_KEY || character2.settings?.secrets?.OPENAI_API_KEY || settings.OPENAI_API_KEY;
    case ModelProviderName2.ANTHROPIC:
      return character2.settings?.secrets?.ANTHROPIC_API_KEY || character2.settings?.secrets?.CLAUDE_API_KEY || settings.ANTHROPIC_API_KEY || settings.CLAUDE_API_KEY;
    case ModelProviderName2.REDPILL:
      return character2.settings?.secrets?.REDPILL_API_KEY || settings.REDPILL_API_KEY;
    case ModelProviderName2.OPENROUTER:
      return character2.settings?.secrets?.OPENROUTER || settings.OPENROUTER_API_KEY;
    case ModelProviderName2.GROK:
      return character2.settings?.secrets?.GROK_API_KEY || settings.GROK_API_KEY;
    case ModelProviderName2.HEURIST:
      return character2.settings?.secrets?.HEURIST_API_KEY || settings.HEURIST_API_KEY;
    case ModelProviderName2.GROQ:
      return character2.settings?.secrets?.GROQ_API_KEY || settings.GROQ_API_KEY;
  }
}
function initializeDatabase(dataDir) {
  if (process.env.POSTGRES_URL) {
    const db = new PostgresDatabaseAdapter({
      connectionString: process.env.POSTGRES_URL
    });
    return db;
  } else {
    const filePath = process.env.SQLITE_FILE ?? path.resolve(dataDir, "db.sqlite");
    const db = new SqliteDatabaseAdapter(new Database(filePath));
    return db;
  }
}
async function initializeClients(character2, runtime) {
  const clients = [];
  const clientTypes = character2.clients?.map((str) => str.toLowerCase()) || [];
  if (clientTypes.includes("auto")) {
    const autoClient = await AutoClientInterface.start(runtime);
    if (autoClient) clients.push(autoClient);
  }
  if (clientTypes.includes("discord")) {
    clients.push(await DiscordClientInterface.start(runtime));
  }
  if (clientTypes.includes("telegram")) {
    const telegramClient = await TelegramClientInterface.start(runtime);
    if (telegramClient) clients.push(telegramClient);
  }
  if (clientTypes.includes("twitter")) {
    const twitterClients = await TwitterClientInterface.start(runtime);
    clients.push(twitterClients);
  }
  if (character2.plugins?.length > 0) {
    for (const plugin of character2.plugins) {
      if (plugin.clients) {
        for (const client of plugin.clients) {
          clients.push(await client.start(runtime));
        }
      }
    }
  }
  return clients;
}
function createAgent(character2, db, cache, token) {
  elizaLogger.success(
    elizaLogger.successesTitle,
    "Creating runtime for character",
    character2.name
  );
  return new AgentRuntime({
    databaseAdapter: db,
    token,
    modelProvider: character2.modelProvider,
    evaluators: [],
    character: character2,
    plugins: [
      bootstrapPlugin,
      nodePlugin,
      character2.settings.secrets?.WALLET_PUBLIC_KEY ? solanaPlugin : null
    ].filter(Boolean),
    providers: [],
    actions: [],
    services: [],
    managers: [],
    cacheManager: cache
  });
}
function intializeDbCache(character2, db) {
  const cache = new CacheManager(new DbCacheAdapter(db, character2.id));
  return cache;
}
async function startAgent(character2, directClient) {
  try {
    character2.id ??= stringToUuid(character2.name);
    character2.username ??= character2.name;
    const token = getTokenForProvider(character2.modelProvider, character2);
    const dataDir = path.join(__dirname, "../data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const db = initializeDatabase(dataDir);
    await db.init();
    const cache = intializeDbCache(character2, db);
    const runtime = createAgent(character2, db, cache, token);
    await runtime.initialize();
    const clients = await initializeClients(character2, runtime);
    directClient.registerAgent(runtime);
    return clients;
  } catch (error) {
    elizaLogger.error(
      `Error starting agent for character ${character2.name}:`,
      error
    );
    console.error(error);
    throw error;
  }
}
var startAgents = async () => {
  const directClient = await DirectClientInterface.start();
  const args = parseArguments();
  let charactersArg = args.characters || args.character;
  let characters = [character];
  console.log("charactersArg", charactersArg);
  if (charactersArg) {
    characters = await loadCharacters(charactersArg);
  }
  console.log("characters", characters);
  try {
    for (const character2 of characters) {
      await startAgent(character2, directClient);
    }
  } catch (error) {
    elizaLogger.error("Error starting agents:", error);
  }
  function chat() {
    const agentId = characters[0].name ?? "Agent";
    rl.question("You: ", async (input) => {
      await handleUserInput(input, agentId);
      if (input.toLowerCase() !== "exit") {
        chat();
      }
    });
  }
  elizaLogger.log("Chat started. Type 'exit' to quit.");
  chat();
};
startAgents().catch((error) => {
  elizaLogger.error("Unhandled error in startAgents:", error);
  process.exit(1);
});
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on("SIGINT", () => {
  rl.close();
  process.exit(0);
});
async function handleUserInput(input, agentId) {
  if (input.toLowerCase() === "exit") {
    rl.close();
    process.exit(0);
    return;
  }
  try {
    const serverPort = parseInt(settings.SERVER_PORT || "3000");
    const response = await fetch(
      `http://localhost:${serverPort}/${agentId}/message`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: input,
          userId: "user",
          userName: "User"
        })
      }
    );
    const data = await response.json();
    data.forEach((message) => console.log(`${"Agent"}: ${message.text}`));
  } catch (error) {
    console.error("Error fetching response:", error);
  }
}
export {
  createAgent,
  getTokenForProvider,
  initializeClients,
  loadCharacters,
  parseArguments,
  wait
};
