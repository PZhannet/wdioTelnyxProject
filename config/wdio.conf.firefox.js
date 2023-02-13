const {config} = require("./wdio.conf");
const firefoxHeadlessConfig = {
    ...config,
    services: ["selenium-standalone"],
    capabilities: [{
        maxInstances: 1,
        browserName: "firefox",
        'moz:firefoxOptions': {
            args: ['--headless']
        },
    }],

};
exports.config = firefoxHeadlessConfig;