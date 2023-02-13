const {config} = require("./wdio.conf");
const crossBrowserConfig = {
    ...config,
    services: ["chromedriver","selenium-standalone"],
    capabilities: [
        {
          maxInstances: 1,
          browserName: 'chrome',
          acceptInsecureCerts: true,
        },
        {
          maxInstances: 1,
          browserName: 'firefox',
          acceptInsecureCerts: true,
        }
        ],

};
exports.config = crossBrowserConfig;