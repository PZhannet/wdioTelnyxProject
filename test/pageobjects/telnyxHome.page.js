const Page = require('./page.js');

class TelnyxHomePage extends Page {
    get acceptAndCloseBtn(){ return $('.jdjrgE button')}
    get cookiesBox(){return $('[class="sc-df34c536-1 daZtYl"]')}
    get loginBtn(){ return $('a:nth-child(4)[href*="/portal.telnyx.com"]')}
    get signUpBtn(){return $('li:nth-child(2) a[href="/sign-up"]')}
    get resourcesMenuItem(){return $('//* [@tabindex="0"]/span[contains(text(),"Resources")]')}
    get blogInPopupMenu(){return $('//*[@class="sc-7b3980dc-1 dlshfZ"][contains(text(),"Blog")]')}
    get reportAbuseLink(){return $('[href="/report-abuse"] [class*="gvobTR"]')}
    get cookiePolicyLink(){return $('//span[contains (text(),"Cookie Policy")]')}
    get followOnTwiterLink(){return $('//span[contains(text(),"Follow on Twitter")]')}
    get readCustomerStoryLink(){return $('[href="/customer-stories/ooma"]')}
    get talkToAnExpertLink(){return $('[href="/contact-us"][class*="sc-f97529d6-0"]')}
    get exploreWirelessLink(){return $('[href*="iot-sim-card"] [class*="edVhEG"]')}
    open () {
        return super.open('');
    }
    async clickAcceptAndCloseBtn(){
        if(this.acceptAndCloseBtn.isExisting()){
            this.acceptAndCloseBtn.click();
        }
    }
    async clickLoginBtn(title){
        await this.loginBtn.waitForExist({ timeout: 10000 })
        await this.loginBtn.click();
        setTimeout(async function () {
            await browser.toHaveUrlContaining('/sign-in')
          }, 10000);
        await this.switchActiveWindow(title)
        await expect(browser).toHaveTitle(title)
    }
    async clickSignUpBtn(title){
        await this.signUpBtn.click();
        await expect(browser).toHaveTitle(title)
    }
    async hoverResourcesMenuItem(){
        await this.resourcesMenuItem.moveTo()
        await expect(this.blogInPopupMenu).toBeDisplayed()
    }
    async clickBlogInPopupMenu(title){
        await this.blogInPopupMenu.click()
        await expect(browser).toHaveTitle(title)
    }
    async clickReportAbuseLink(title){
        await this.reportAbuseLink.click()
        await expect(browser).toHaveTitle(title)
    }
    async clickCookiePolicyLink(title){
        await this.cookiePolicyLink.waitForExist({ timeout: 7000 })
        await this.cookiePolicyLink.scrollIntoView()
        await this.cookiePolicyLink.click()
        await expect(browser).toHaveTitle(title)
    }
    async clickFollowOnTwiterLink(title){
        await this.followOnTwiterLink.click()
        await browser.pause(20000)
        await this.switchActiveWindow(title)
        await expect(browser).toHaveTitle(title)
    }
    async clickReadCustomerStoryLink(title){
        await this.readCustomerStoryLink.click()
        await expect(browser).toHaveTitle(title)
    }
    async clickTalkToAnExpertLink(title){
        await this.talkToAnExpertLink.click()
        await expect(browser).toHaveTitle(title)
    }
    async clickExploreWirelessLink(title){
        await this.exploreWirelessLink.click()
        await expect(browser).toHaveTitle(title)
    }
    
}

module.exports = new TelnyxHomePage()