const blogPage = require('../pageobjects/blog.page')
const portalTelnyxPage = require('../pageobjects/telnyxHome.page');
const data = require('../support/data')

describe('Testing the blog page', () => {
    before('Open Telnyx page and Accept cookies', async () => {
        await portalTelnyxPage.open();
        await portalTelnyxPage.clickAcceptAndCloseBtn();
    })
    it('ID 11 Check ability to filter news by product on the "Blog" page', async()=>{
        await browser.setWindowSize(1920,1080)
        await portalTelnyxPage.hoverResourcesMenuItem()
        await portalTelnyxPage.clickBlogInPopupMenu(data.titleBlogPage)
        await blogPage.clickMessagesBtn()
    })
})