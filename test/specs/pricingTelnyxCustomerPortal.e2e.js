const telnyxHomePage = require('../pageobjects/telnyxHome.page');
const login = require('../pageobjects/login.page')
const telnyxCustomerPortalPage = require('../pageobjects/telnyxCustomerPortal.page')
const pricingTelnyxCustomerPortalPage = require('../pageobjects/pricingTelnyxCustomerPortal.page')
const data =require('../support/data')

describe('Testing the Pricing page in Telnyx Customer Portal', () => {
    before('should login with valid credentials', async () => {
        await telnyxHomePage.open();
        await telnyxHomePage.clickAcceptAndCloseBtn();
        await telnyxHomePage.clickLoginBtn(data.urlLoginPage,data.titleLoginPage);
        await login.login(data.validEmailForLogin,data.validPasswordForLogin)
    })
    it('ID 8 Сheck that the marks on a slider on Pricing Tier Control in the Outbound (Termination) Voice/Fax Usage section correspond right button  on the Pricing page', async ()=>{
        await telnyxCustomerPortalPage.clickPricingLink(data.urlPricingPage,data.titlePricingPage)
        await pricingTelnyxCustomerPortalPage.clickOnPointsSlider()
    })
})