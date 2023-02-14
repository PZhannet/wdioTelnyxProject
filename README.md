# :four_leaf_clover: **WebdriverIo + Docker + Allure Report** :four_leaf_clover:
## Project description
- Created 20 tests in WebdriverIO for testing the Telnyx website: https://telnyx.com/

## Technologies
- Node.js: 18.12.1
- Java 8 or above
- Docker desktop app
- JDK 17

## Project set up
1. Clone the project `git clone https://github.com/PZhannet/wdioTelnyxProject`
2. Move to the 5.1WebdriverIoTelnyx folder `cd -5.1WebdriverIoTelnyx`
3. Run `npm i` (install node.js dependencies)

## Usage
- To run tests in headless mode in Chrome and Firefox browsers:  
```sh
ENV=prod|dev npm run wdio  
```
- To run tests in headless mode in Chrome browser:  
```sh
ENV=prod|dev npm run wdio:chrome  
```
- To run tests in headless mode in Firefox browser:  
```sh
ENV=prod|dev npm run wdio:firefox  
```
- To run single test in headless mode in Chrome browser:  
```sh
ENV=prod|dev  npx wdio run ./config/wdio.conf.chrome.js --spec ./test/specs/{name}.e2e.js  
```
- To run single test in headless mode in Firefox browser:  
```sh
ENV=prod|dev npx wdio run ./config/wdio.conf.firefox.js --spec ./test/specs/{name}.e2e.js  
```
- To run single test in Chrome browser:  
```sh
ENV=prod|dev  npx wdio run ./config/wdio.conf.UIchrome.js --spec ./test/specs/{name}.e2e.js  
```
- To run single test in Firefox browser:  
```sh
ENV=prod|dev npx wdio run ./config/wdio.conf.UIfirefox.js --spec ./test/specs/{name}.e2e.js  
```
- Generate and open allure report:  
```sh
npm run allure:generate  
```

## Run tests in Docker
- Build image:  
```sh
npm run docker:build  
```
- Run container:  
```sh
ENV=prod|dev npm run wdio:docker  
```
-To stop docker after test running:
```sh
ctrl+C 
```
-To remove docker after test running:
```sh
docker-compose -f ./docker/docker-compose.yml down
```
## GitHub Pages:

To see the automatically generated HTML report with test execution:
- <a href="https://pzhannet.github.io/wdioTelnyxProject/"> Report </a>


