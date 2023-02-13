const Page = require('./page')

class SignUpPage extends Page{
    get workEmailInput(){return $('#email')}
    get fullNameInput(){return $('#full_name')}
    get passwordInput(){return $('#password')}
    get createAccountBtn(){return $('[type="submit"]')}
    get termsConditionsErrorMessage(){return $('.sc-570b157-1')}
    get privacyPolicyLink(){return $('[href="/privacy-policy"]')}
    get passwordMustCharMessage(){return $('//*[contains(text(),"Be at least 12 characters long")]')}
    async enterWorkEmailInput(email){
        await this.workEmailInput.setValue(email)
        await expect(this.workEmailInput).toHaveValue(email)
    }
    async enterFullNameInput(name){
        await this.fullNameInput.setValue(name)
        await expect(this.fullNameInput).toHaveValue(name)
    }
    async enterPasswordInput(password){
        await this.passwordInput.setValue(password)
        await expect(this.passwordInput).toHaveValue(password)
    }
    async enterLessCharactersPasswordInput(password){
        await this.passwordInput.setValue(password)
        await expect(this.passwordInput).toHaveValue(password)
        await expect(this.passwordMustCharMessage).toBeDisplayed()
        await expect(this.passwordMustCharMessage).toHaveAttribute('aria-hidden','false')
    }
    async fillAllInput(email,name,password){
        await this.enterWorkEmailInput(email)
        await this.enterFullNameInput(name)
        await this.enterPasswordInput(password)
    }
    async clickCreateAccountBtn(){
        await this.createAccountBtn.click()
    }
    async clickPrivacyPolicyLink(){
        await this.privacyPolicyLink.click()
    }
    async getPasswordValue(){
        return this.passwordInput.getValue()
    }
    async addCharactersPasswordInput(characters,password){
        await this.passwordInput.addValue(characters)
        await expect(this.passwordInput).toHaveValue(password)
        await expect(this.passwordMustCharMessage).toBeDisplayed()
        await expect(this.passwordMustCharMessage).toHaveAttribute('aria-hidden','true')
    }
}

module.exports = new SignUpPage()