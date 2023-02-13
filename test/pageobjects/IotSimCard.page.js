const Page = require('./page')
class IotSimCardPage extends Page{
    get getASimCardBtn(){return $('[class*="jnwLUb"] [href="/sign-up"]')}
    async clickGetASimCardBtn(title){
        await this.getASimCardBtn.click()
        await expect(browser).toHaveTitle(title)
    }
}
module.exports = new IotSimCardPage()