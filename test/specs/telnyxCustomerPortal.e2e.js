const telnyxHomePage = require('../pageobjects/telnyxHome.page');
const login = require('../pageobjects/login.page')
const portalTelnyxPage = require('../pageobjects/telnyxCustomerPortal.page') 
const data = require('../support/data')

describe('Testing Telnyx Customer Portal page', () => {
    before('should login with valid credentials', async () => {
        await telnyxHomePage.open();
        await telnyxHomePage.clickAcceptAndCloseBtn();
        await telnyxHomePage.clickLoginBtn(data.urlLoginPage,data.titleLoginPage);
        await login.login(data.validEmailForLogin,data.validPasswordForLogin)
    })
    it('ID 1 Verify the Toll-Free Numbers Button on the Numbers / Search & Buy Numbers page opens the Search Numbers section by Country Code', async() =>{
        await portalTelnyxPage.clickTollFreeNumbersBtn();
    })
    it('ID 2 Verify the Identity Sidenav bar on the Numbers / Search & Buy Numbers page contains Verify and Number Lookup links', async ()=>{
        await portalTelnyxPage.clickIdentityLink()
    })
    it('ID 3 Verify the Add to card Button on the Numbers / Search & Buy Numbers page adds chosen number to the Cart', async () =>{
        await portalTelnyxPage.clickTollFreeNumbersBtn() 
        await portalTelnyxPage.clickSearchNumbersBtn()
        let number = await portalTelnyxPage.numberAddedToCart.getText()
        await portalTelnyxPage.clickAddToCartBtn()
        await portalTelnyxPage.clickCartBtn(number)
    })
    it('ID 5 Check the  Welcome to your Mission Control Portal, API Keys, Get started with Messaging, Get started with Verify, and Shortcuts sections are visible on the Home page', async() =>{
        await portalTelnyxPage.clickHomeLink()
    })
    it('ID 6 Check the Start messaging link on the Home page opens Telnyx Developers Page', async () =>{
        await portalTelnyxPage.clickHomeLink()
        await portalTelnyxPage.clickStartMessagingLink(data.titleDevelopersPage)
    } )
})