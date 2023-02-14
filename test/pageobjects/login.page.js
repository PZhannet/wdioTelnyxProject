const Page = require('./page')
class LoginPage extends Page{
    get bussenessEmailInput(){return $('.eSxLXo input')}
    get passwordInput(){return $('.flxMbT input');}
    get submitBtn(){return $('.LoginForm__LoginButton-fhXOmx');}
    get signUpLink(){return $('[href*="sign-up"]')}
    get loginWithMicrosoftBtn(){return $('//*[@class="LoginOAuth__OAuthButtonLabel-chtDdO iRdMaw"][contains(text(),"Microsoft")]')}
    async login (email, password) {
        await this.bussenessEmailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitBtn.waitForClickable({ timeout: 7000 });
        await this.submitBtn.click();
        setTimeout(async function () {
            await browser.toHaveUrlContaining('portal.telnyx.com')
        }, 10000);
        await expect(browser).toHaveUrlContaining('portal.telnyx.com')
    }
    async clickSignUpLink(title){
        await this.signUpLink.click()
        await browser.pause(5000)
        await this.switchActiveWindow(title)
        await expect(browser).toHaveTitle(title)
    }
    async clickLoginWithMicrosoftBtn(title){
        await this.loginWithMicrosoftBtn.waitForExist({ timeout: 20000 })
        await this.loginWithMicrosoftBtn.click()
        await this.switchActiveWindow(title)
        await expect(browser).toHaveTitle(title)
    }
}

module.exports = new LoginPage()