class OomaPage{
    get talkToAnExpertBtn(){return $('[href="https://telnyx.com/contact-us"]')}
    async clickTalkToAnExpertBtn(title){
        await this.talkToAnExpertBtn.click()
        await expect(browser).toHaveTitle(title)
    }
}
module.exports = new OomaPage()