# Open Web Page Custom Agent Skill for AnythingLLM

This custom agent skill allows users to open a specified webpage in the default browser on macOS.

## Features

- Opens a specified URL in the default browser on macOS
- Validates the provided URL before attempting to open it

## Prerequisites

- macOS operating system
- Node.js 18+
- Yarn package manager
- AnythingLLM running in a supported environment

## Installation

1. Create a new folder named `open-web-page` in your AnythingLLM storage directory under `plugins/agent-skills/`.

2. Copy the following files into this folder:
   - `plugin.json`
   - `handler.js`
   - `run.js` (for local testing)

3. Install required packages:
   ```
   yarn init -y
   ```

## Usage

You can use this skill by asking questions like:

- "Open the AnythingLLM GitHub page"
- "Can you open Apple's website for me?"

The skill will process these queries, extract the URL, and open it in the default browser on macOS.

## Local Testing

To test the skill locally:

1. Run the following command in the skill's directory:
   ```
   node run.js
   ```

This will run a series of test queries and display the results.

## Security Considerations

This skill executes commands on the host system. Ensure that proper input validation is in place and that the skill is used in a secure environment.

## Troubleshooting

- If the webpage doesn't open, ensure that you have a default browser set on your macOS system.
- Check that the provided URL is valid and includes the protocol (http:// or https://).

## License

This custom agent skill is released under the MIT License.