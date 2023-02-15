const Page = require('./page')

class TelnyxCustomerPortalPage extends Page {
    get tollFreeNumbersBtn (){return $('[class*=" kKRPik"]')}
    get searchNumbersBtn(){return $('[class*="QRlWQ"]')}
    get labelsCountryCodeAndAreaCodeAndPhoneNumber(){return $('.Label-eJsipv')}
    get identityLink(){return $("//*[@aria-label='Main menu'] /descendant:: button [contains(text(),'Identity')]")}
    get verifyLink(){return $('//*[@aria-label="Main menu"] /descendant::button[contains(text(),"Verify")]')}
    get numberLookupLink(){return $("//*[@aria-label='Main menu'] /descendant::button[contains(text(),'Number Lookup')]")}
    get tableOfNumbers(){return $('[class="tx-Z2wPgxt"]>table')}
    get numberAddedToCart(){return $('//tr[1]/td[2]')}
    get addToCartBtn(){return $('//tr[1]/td/button[contains(text(),"Add to Cart")]')}
    get successMessage(){return $('[class*="MessageContent-sc-1lbs5ge-1"]')}
    get cartBtn(){return $('[class*="Button_normal-tx-2qNoRn"]')}
    get cartTitle(){return $('[class="tx-Z12BLcq"]')}
    get numberInTheCart(){return $('[class*="tx-2jo5gH tx-AYjdp"]')}
    get homeLink(){return $ ('[id="main_content"] [href="/#/app/home"]')}
    get homeTitle(){return $('[class="tx-Z12BLcq"]')}
    get welcomeToYourMissionControlPortalSection(){return $('[class="Text-essoOC gkUcHY"]')}
    get apiKeysSection(){return $('[class*="eMmGzh"]')}
    get getStartedWithMessagingSection(){return $('[class*="telnyx-icon-messaging"]')}
    get getStartedWithVerifySection(){return $('[class*="telnyx-icon-verify"]')}
    get shortcutsSection(){return $('[class*="sMDaA"]')}
    get startMessagingLink(){return $('[href*="v2/messaging"]')}
    get developersPageIcon(){return $('.geiTfT .sc-4cec3818-3>span')}
    get videoLink(){return $('[id="main_content"] [href*="video/video-rooms"]')}
    get tryTheDemoAppBtn(){return $('[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]')}
    get pricingLink(){return $('[id="main_content"] [href="/#/app/pricing"]')}

    async clickTollFreeNumbersBtn (){
        await this.tollFreeNumbersBtn.waitForExist({ timeout: 100000 })
        await this.tollFreeNumbersBtn.click()
        await expect(this.searchNumbersBtn).toBeClickable()
        await expect(this.labelsCountryCodeAndAreaCodeAndPhoneNumber).toBeDisplayed()
    }
    async clickIdentityLink(){
        await this.identityLink.waitForExist({ timeout: 100000 })
        await this.identityLink.click()
        await expect(this.verifyLink).toBeDisplayed()
        await expect(this.numberLookupLink).toBeDisplayed()
    }
    async clickSearchNumbersBtn(){
        await this.searchNumbersBtn.waitForExist({ timeout: 100000 })
        await this.searchNumbersBtn.click()
        await expect(this.tableOfNumbers).toBeDisplayed()
    }
    async clickAddToCartBtn(){
        await this.addToCartBtn.waitForExist({ timeout: 100000 })
        await this.addToCartBtn.click();
        await expect(this.successMessage).toBeDisplayed();
    }
    async clickCartBtn(number){
        await this.cartBtn.waitForExist({ timeout: 100000 })
        await this.cartBtn.click();
        await expect(this.cartTitle).toHaveText('My Cart');
        await expect(this.numberInTheCart).toHaveText(number);
    }
    async clickHomeLink(url){
        await this.homeLink.waitForExist({ timeout: 10000 })
        await this.homeLink.click()
        await this.homeTitle.waitForDisplayed({ timeout: 3000 });
        await expect(this.homeTitle).toBeDisplayed()
        await expect(this.welcomeToYourMissionControlPortalSection).toBeDisplayed()
        await expect(this.apiKeysSection).toBeDisplayed()
        await expect(this.getStartedWithMessagingSection).toBeDisplayed()
        await expect(this.getStartedWithVerifySection).toBeDisplayed()
        await expect(this.shortcutsSection).toBeDisplayed()
    }
    async clickStartMessagingLink(title){
        await this.startMessagingLink.waitForExist({ timeout: 100000 })
        await this.startMessagingLink.click()
        await browser.pause(10000)
        await this.switchActiveWindow(title)
        await expect(this.developersPageIcon).toBeDisplayed()
    }
    async clickVideoLink(url,title){
        await browser.waitUntil(async () => {
            return (await this.videoLink).isExisting();
          }, { timeout: 20000 })
        await this.videoLink.click();
        await this.expectToHaveTitle(url,title)
    }
    async clickTryTheDemoAppBtn(title){
        await this.tryTheDemoAppBtn.waitForExist({ timeout: 100000 })
        await this.tryTheDemoAppBtn.click()
        await expect(browser).toHaveTitle(title)
    }
    async clickPricingLink(url,title){
        await this.pricingLink.waitForExist({ timeout: 30000 })
        await this.pricingLink.click()
        setTimeout(async function () {
            await browser.toHaveUrlContaining(url)
        }, 10000);
        await expect(browser).toHaveTitle(title)
    }
}

module.exports = new TelnyxCustomerPortalPage();
