const talkToAnExpertPage = require('../pageobjects/talkToAnExpert.page')
const telnyxHomePage = require('../pageobjects/telnyxHome.page');
const data = require('../support/data')

describe('Testing the blog page', () => {
    before('Open Telnyx page and Accept cookies', async () => {
        await browser.setWindowSize(1920,1080)
        await telnyxHomePage.open();
        await telnyxHomePage.clickAcceptAndCloseBtn();
    })
    it('ID 16 Сheck the phone number in the “Talk to our product experts” section on Talk to an expert page', async()=>{
        await telnyxHomePage.clickTalkToAnExpertLink(data.titleTalkToAnExpertPage)
        await talkToAnExpertPage.verifyTalkToOurProductExpertsPhoneNumber(data.number)
    })
})