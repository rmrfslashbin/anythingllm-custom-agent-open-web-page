const { exec } = require('child_process');

module.exports.runtime = {
    handler: async function ({ url }) {
        const callerId = `${this.config.name}-v${this.config.version}`;

        try {
            this.introspect(`Processing request to open URL: ${url}`);

            if (!url) {
                return "Error: No URL provided.";
            }

            // Validate URL
            try {
                new URL(url);
            } catch (error) {
                return `Error: Invalid URL format. Please provide a valid URL including the protocol (e.g., https://www.example.com).`;
            }

            // Command to open URL in default browser on macOS
            const command = `open "${url}"`;

            exec(command, (error, stdout, stderr) => {
                if (error) {
                    this.logger(`Error executing command: ${error.message}`);
                    return `Error opening webpage: ${error.message}`;
                }
                if (stderr) {
                    this.logger(`Command stderr: ${stderr}`);
                }
            });

            return `Successfully opened ${url} in your default browser.`;

        } catch (error) {
            this.logger(`Error in open-web-page: ${error.message}`);
            return `I encountered an error while trying to open the webpage: ${error.message}. Please try again.`;
        }
    }
};