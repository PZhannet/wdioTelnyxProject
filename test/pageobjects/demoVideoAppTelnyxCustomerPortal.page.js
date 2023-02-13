class DemoVideoAppTelnyxCustomerPortalPage{
    get roomNameInput(){return $('[placeholder="Room Name"]')}
    get webhookURLInput(){return $('[placeholder="https://example.com"]')} 
    get errorUrlMessage(){return $("//*[contains(text(), 'Please enter a valid URL')]")}
    get createVideoRoomBtn(){return $('[class="Button__StyledDefaultButton-bvSDhd cOyEKr"]')}
    async enterRoomNameInput(name){
        await this.roomNameInput.setValue(name)
        await expect(this.roomNameInput).toHaveValue(name)
    }
    async enterWebhookURLInput(url){
        await this.webhookURLInput.setValue(url)
        await expect(this.webhookURLInput).toHaveValue(url)
    }
    async checkErrorUrlMessage(){
        await expect(this.errorUrlMessage).toBeDisplayed()
    }
    async verifyCreateVideoRoomBtnClickable(){
        await expect(this.createVideoRoomBtn).not.toBeClickable()
    }
}
module.exports = new DemoVideoAppTelnyxCustomerPortalPage()