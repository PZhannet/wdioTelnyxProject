const telnyxHomePage = require('../pageobjects/telnyxHome.page');
const login = require('../pageobjects/login.page')
const telnyxCustomerPortalPage = require('../pageobjects/telnyxCustomerPortal.page')
const demoVideoAppPageTelnyxCustomerPortalPage = require('../pageobjects/demoVideoAppTelnyxCustomerPortal.page')
const data = require('../support/data')

describe('Testing the Demo Video App page', () => {
    before('should login with valid credentials', async () => {
        await telnyxHomePage.open();
        await telnyxHomePage.clickAcceptAndCloseBtn();
        await telnyxHomePage.clickLoginBtn(data.urlLoginPage,data.titleLoginPage);
        await login.login(data.validEmailForLogin,data.validPasswordForLogin)
    })
    it('ID 7 Check the ability to create Video Room with an invalid URL on the Demo Video App page', async ()=>{
        await telnyxCustomerPortalPage.clickVideoLink(data.urlVideoRoomPage,data.titleVideoRoomsPage)
        await telnyxCustomerPortalPage.clickTryTheDemoAppBtn(data.titleDemoAppPage)
        await demoVideoAppPageTelnyxCustomerPortalPage.enterWebhookURLInput(data.invalidWebhookURL)
        await demoVideoAppPageTelnyxCustomerPortalPage.enterRoomNameInput(data.videoRoomName)
        await demoVideoAppPageTelnyxCustomerPortalPage.checkErrorUrlMessage()
        await demoVideoAppPageTelnyxCustomerPortalPage.verifyCreateVideoRoomBtnClickable()
    })
})