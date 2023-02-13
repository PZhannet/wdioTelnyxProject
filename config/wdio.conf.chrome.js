const {config} = require("./wdio.conf");
const chromeHeadlessConfig = {
    ...config,
    services: ["chromedriver"],
    capabilities: [{
        maxInstances: 1,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless']
        },
    }],
    
};
exports.config = chromeHeadlessConfig;
