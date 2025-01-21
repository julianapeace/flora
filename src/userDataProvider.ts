import type { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";

export interface UserData {
    country: string | undefined;
    town: string | undefined;
}

export const getCacheKey = (message: Memory) => {
    return `${message.agentId}-${message.userId}`;
};

export const emptyUserData: UserData = {
    country: undefined,
    town: undefined
};

export const userDataProvider: Provider = {
    get: async (runtime: IAgentRuntime, message: Memory, state?: State) => {
        console.log("[PROVIDER] Running userDataProvider");

        console.log("[PROVIDER] Message: ", message);

        const cacheKey = getCacheKey(message);
        const userData = await runtime.cacheManager.get<UserData>(cacheKey) || emptyUserData;
        
        const missingFields: string[] = [];
        
        if (!userData || !userData.country) {
            missingFields.push("country");
        }
        
        if (!userData || !userData.town) {
            missingFields.push("town");
        }

        console.log(`[PROVIDER] We have ${missingFields.length} missing fields: ${missingFields.join(", ")}`);
        if (missingFields.length > 0) {
            return `Collect the following information from the user: ${missingFields.join(", ")}. Be polite and insist on getting the information.`;
        }

        return `Completed - we have all the data we need - user is from ${userData.town}, ${userData.country}`;
    }
};