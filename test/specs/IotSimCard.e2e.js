const iotSimCardPage = require('../pageobjects/IotSimCard.page')
const telnyxHomePage = require('../pageobjects/telnyxHome.page');
const data = require('../support/data');

describe('Testing the IoT-sim-card page', () => {
    before('Open Telnyx page and Accept cookies', async () => {
        await telnyxHomePage.open();
        await telnyxHomePage.clickAcceptAndCloseBtn();
    })
    it('ID 18 Check the Get a Sim Card button on the IoT-sim-card page opens the Sign-up page', async()=>{
        await telnyxHomePage.clickExploreWirelessLink(data.titleIotSimCardsPage)
        await iotSimCardPage.clickGetASimCardBtn(data.titleSignUpPage)
    })
})