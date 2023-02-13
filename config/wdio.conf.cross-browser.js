const {config} = require("./wdio.conf");
const crossBrowserConfig = {
    ...config,
    services: ["chromedriver","selenium-standalone"],
    capabilities: [
        {
          maxInstances: 1,
          browserName: 'chrome',
          acceptInsecureCerts: true,
          'goog:chromeOptions': {
            args: ['--headless', '--no-sandbox']
          },
        },
        {
          maxInstances: 1,
          browserName: 'firefox',
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: ['--headless']
          },
        }
        ],

};
exports.config = crossBrowserConfig;