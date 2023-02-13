const telnyxHomePage = require('../pageobjects/telnyxHome.page');
const login = require('../pageobjects/login.page')
const myCartTelnyxCustomerPortalPage = require('../pageobjects/myCartTelnyxCustomerPortal.page')
const portalTelnyxPage = require('../pageobjects/telnyxCustomerPortal.page')
const data = require('../support/data')
describe('My Cart page', () => {
    let number=""
    before('should login with valid credentials', async () => {
        await telnyxHomePage.open();
        await telnyxHomePage.clickAcceptAndCloseBtn();
        await telnyxHomePage.clickLoginBtn(data.titleLoginPage);
        await login.login(data.validEmailForLogin,data.validPasswordForLogin)
        await portalTelnyxPage.clickTollFreeNumbersBtn() 
        await portalTelnyxPage.clickSearchNumbersBtn()
        number = await portalTelnyxPage.numberAddedToCart.getText()
        await portalTelnyxPage.clickAddToCartBtn()
        
    })
    it('ID 4 Verify the Total Credit Required on the My Cart page shows the right total amount', async() =>{
        await portalTelnyxPage.clickCartBtn(number)
        await myCartTelnyxCustomerPortalPage.verifyTotalCreditRequired()
    })
})