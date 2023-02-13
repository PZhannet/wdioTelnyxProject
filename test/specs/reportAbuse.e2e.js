const reportAbusePage = require('../pageobjects/reportAbuse.page')
const telnyxHomePage = require('../pageobjects/telnyxHome.page');
const data = require('../support/data')

describe('Testing the Report Abuse page', () => {
    before('Open Telnyx page and Accept cookies', async () => {
        await telnyxHomePage.open();
        await telnyxHomePage.clickAcceptAndCloseBtn();
    })
    it('ID 12 Check the ability to send a report with empty fields on Report Abuse page', async()=>{
        await telnyxHomePage.clickReportAbuseLink(data.titleReportAbusePage)
        await reportAbusePage.clickSubmitBtn()
    })
})