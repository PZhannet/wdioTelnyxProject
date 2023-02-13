const loginPage = require('../pageobjects/login.page');
const telnyxHomePage = require('../pageobjects/telnyxHome.page');
const data = require('../support/data')

describe('Testing the Login page', () => {
    before('Open Telnyx page and Accept cookies', async () => {
        await telnyxHomePage.open();
        await telnyxHomePage.clickAcceptAndCloseBtn();
    })
    it('ID 19 Check the Sign-up link on the Login page opens the Sign-up page', async()=>{
        await telnyxHomePage.clickLoginBtn(data.titleLoginPage)
        await loginPage.clickSignUpLink(data.titleSignUpPage)
    })
    it('ID 20 Check the Log in with Microsoft button on the Login page opens the Microsoft Sign in page', async()=>{
        await telnyxHomePage.clickLoginBtn(data.titleLoginPage)
        await loginPage.clickLoginWithMicrosoftBtn(data.titleLoginWithMicrosof)
    })
})