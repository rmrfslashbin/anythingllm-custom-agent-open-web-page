// File: run.js
const { runtime } = require('./handler');

async function testSkill() {
    const mockContext = {
        introspect: console.log,
        logger: console.error,
        config: {
            name: "Open Web Page Skill",
            version: "1.0.0"
        }
    };

    const testQueries = [
        {
            description: "Open AnythingLLM GitHub page",
            params: { url: "https://github.com/Mintplex-Labs/anything-llm" }
        },
        {
            description: "Open Apple's website",
            params: { url: "https://www.apple.com" }
        },
        {
            description: "Invalid URL test",
            params: { url: "not-a-valid-url" }
        }
    ];

    for (const test of testQueries) {
        console.log(`\nTesting: ${test.description}`);
        console.log(`Parameters: ${JSON.stringify(test.params)}`);
        try {
            const result = await runtime.handler.call(mockContext, test.params);
            console.log("Result:");
            console.log(result);
        } catch (error) {
            console.error(`Error testing query:`, error);
        }
        console.log('\n---\n');
    }
}

testSkill();