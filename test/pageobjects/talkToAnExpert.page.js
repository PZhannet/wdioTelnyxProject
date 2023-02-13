class TalkToAnExpertPage{
    get talkToOurProductExpertsPhoneNumber(){return $('[href*="mailto:sales"]~a')}
    async verifyTalkToOurProductExpertsPhoneNumber(number){
        await expect(this.talkToOurProductExpertsPhoneNumber).toBeDisplayed()
        await expect(this.talkToOurProductExpertsPhoneNumber).toHaveText(number)
        await expect(this.talkToOurProductExpertsPhoneNumber).toBeClickable()
    }
}
module.exports = new TalkToAnExpertPage()