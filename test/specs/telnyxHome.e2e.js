const telnyxHomePage = require('../pageobjects/telnyxHome.page');
const data = require('../support/data')

describe('Testing the main page', () => {
    before('Open Telnyx page and Accept cookies', async () => {
        await telnyxHomePage.open();
        await telnyxHomePage.clickAcceptAndCloseBtn();
    })
    it('ID 13 Check redirection to Cookie Policy information from footer on Telnyx page', async() =>{
        await telnyxHomePage.clickCookiePolicyLink(data.titleCookiePolicyPage)
    })
    it('ID 14 Сheck the functionality of the "Twitter" reference on the Telnyx page', async()=>{
        await telnyxHomePage.clickFollowOnTwiterLink(data.titleTwitterPage)
    })
});