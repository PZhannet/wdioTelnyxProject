const signUpPage = require('../pageobjects/signUp.page')
const telnyxHomePage = require('../pageobjects/telnyxHome.page')
const data =require('../support/data')

describe('Testing the Sign Up page', () => {
    beforeEach('Open Telnyx page', async () => {
        await telnyxHomePage.open()
        await telnyxHomePage.clickAcceptAndCloseBtn()  
    })
    it('ID 9 Check ability to sign up without agree terms of conditions and privacy policy on the Signup page', async()=>{
        await telnyxHomePage.clickSignUpBtn(data.titleSignUpPage)
        await signUpPage.fillAllInput(data.email,data.fullName,data.password)
        await signUpPage.clickCreateAccountBtn()
        await expect(signUpPage.termsConditionsErrorMessage).toBeDisplayed()
    })
    it('ID 17 Сheck the possibility to add the necessary characters to become password valid, after an unsuccessful attempt to register on Sign up page', async()=>{
        await telnyxHomePage.clickSignUpBtn(data.titleSignUpPage)
        await signUpPage.enterLessCharactersPasswordInput(data.lessCharacterPassword)
        const passwordValue = await signUpPage.getPasswordValue()
        await signUpPage.clickCreateAccountBtn()
        await signUpPage.addCharactersPasswordInput(data.addCharactersInPassword, passwordValue+data.addCharactersInPassword)
    })
    it('ID 10 Check ability to read Privacy Policy information on the Signup page', async()=>{
        await telnyxHomePage.clickSignUpBtn(data.titleSignUpPage)
        await signUpPage.clickPrivacyPolicyLink(data.titlePrivacyPolicyPage)
    })
})