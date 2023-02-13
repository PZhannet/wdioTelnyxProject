const oomaPage = require('../pageobjects/ooma.page')
const telnyxHomePage = require('../pageobjects/telnyxHome.page');
const data = require('../support/data')

describe('Testing the blog page', () => {
    before('Open Telnyx page and Accept cookies', async () => {
        await telnyxHomePage.open();
        await telnyxHomePage.clickAcceptAndCloseBtn();
    })
    it('ID 15 Сheck the functionality of the "Talk to an expert" reference on the Ooma page', async()=>{
        await telnyxHomePage.clickReadCustomerStoryLink(data.titleOomaPage)
        await oomaPage.clickTalkToAnExpertBtn(data.titleTalkToAnExpertPage)
    })
})