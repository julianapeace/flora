import { Evaluator, Memory, IAgentRuntime, generateObject, ModelClass } from "@elizaos/core";
import { emptyUserData, getCacheKey, UserData } from "./userDataProvider.ts";

// Add this interface to type the extraction result
interface ExtractedUserInfo {
    town?: string;
    country?: string;
}

const isUserDataComplete = (userData: UserData): boolean => {
    // Check if all values exist, are strings, and are not empty/null/undefined
    console.log('[EVALUATOR - IS_USER_DATA_COMPLETE] User data: ', Object.values(userData));
    let result = Object.values(userData).every(value => 
        value !== undefined
    );
    console.log('[EVALUATOR - IS_USER_DATA_COMPLETE] Result: ', result);
    return result;
};

export const userDataEvaluator: Evaluator = {
    name: "USER_DATA_EVALUATOR",
    description: "USER_DATA_EVALUATOR",
    similes: [],
    examples: [],
    validate: async (
        runtime: IAgentRuntime,
        message: Memory
    ): Promise<boolean> => {
        const cacheKey = getCacheKey(message);
        const userData = await runtime.cacheManager.get<UserData>(cacheKey) || emptyUserData;
        console.log(`[EVALUATOR - VALIDATE] User data: ${JSON.stringify(userData)}`);
        console.log(`[EVALUATOR - VALIDATE] Is user data incomplete? ${!isUserDataComplete(userData)}`);
        // Return true if user data is not complete
        return !isUserDataComplete(userData);
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory
    ): Promise<boolean> => {
        console.log("[EVALUATOR - HANDLER] Running userDataEvaluator");
        const cacheKey = getCacheKey(message)
        const userData = await runtime.cacheManager.get<UserData>(cacheKey) || emptyUserData;

        console.log(`[EVALUATOR - HANDLER] User data: ${JSON.stringify(userData)}`);
        console.log(`[EVALUATOR - HANDLER] Message: ${message.content.text}`);

        // Extract missing user data fields from conversation
        const extractionTemplate = `Analyze the conversation to extract the user information.
        Only extract the fields that are clearly stated by the user.

        Conversation:
        ${message.content.text}

        Return a JSON containing the fields that are clearly stated by the user.
        {
            "town": "extracted town if stated",
            "country": "extracted country if stated"
        }`;

        const extractedInfo = await generateObject(
            {
                runtime,
                context: extractionTemplate,
                modelClass: ModelClass.SMALL
            }
        ) as ExtractedUserInfo;

        console.log(`[EVALUATOR - HANDLER] Extracted info: ${JSON.stringify(extractedInfo)}`);

        // Update cache with any newly extracted fields that were previously undefined
        const updatedUserData = { ...userData };
        let hasUpdates = false;

        if (!userData.town && extractedInfo.town) {
            updatedUserData.town = extractedInfo.town;
            hasUpdates = true;
        }

        if (!userData.country && extractedInfo.country) {
            updatedUserData.country = extractedInfo.country;
            hasUpdates = true;
        }

        // Only update cache if we have new information
        if (hasUpdates) {
            await runtime.cacheManager.set(cacheKey, updatedUserData);
        }
        
        return true;
    }
}