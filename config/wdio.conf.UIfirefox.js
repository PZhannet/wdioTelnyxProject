const {config} = require("./wdio.conf");
const firefoxConfig = {
    ...config,
    services: ["selenium-standalone"],
    capabilities: [{
        maxInstances: 1,
        browserName: "firefox",
    }],

};
exports.config = firefoxConfig;