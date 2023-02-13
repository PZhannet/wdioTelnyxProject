class ReportAbusePage{
    get submitBtn(){return $('[type="submit"]')}
    get redLableSubject(){return $('//*[@class="sc-323a5919-0 itMDFj"][contains(text(),"Subject")]')}
    get redLabelPhoneNumberAbuse(){return $('//*[@class="sc-323a5919-0 itMDFj"][contains(text(),"Phone Number (Abusive)")]')}
    get redLabelPhoneNumberReceivedAbuse(){return $('//*[@class="sc-323a5919-0 itMDFj"][contains(text(),"Phone Number (Received Abuse)")]')}
    get errorMessage(){return $('.sc-25ef9dc0-1')}
    async clickSubmitBtn(){
        await this.submitBtn.click()
        await expect(this.redLableSubject).toBeDisplayed()
        await expect(this.redLabelPhoneNumberAbuse).toBeDisplayed()
        await expect(this.redLabelPhoneNumberReceivedAbuse).toBeDisplayed()
        await expect(this.errorMessage).toBeDisplayed()
    }
}
module.exports = new ReportAbusePage()