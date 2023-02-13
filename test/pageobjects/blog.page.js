class BlogPage{
    
    get messagesBtn(){return $('//button[contains(text(),"Messaging")]')}
    get articleMessaging(){return $('//h2[contains(text(),"Messaging")]')}
    async clickMessagesBtn(){
        await this.messagesBtn.click()
        await expect(this.messagesBtn).toBeFocused()
        await expect(this.articleMessaging).toBeDisplayed()
    }
}
module.exports = new BlogPage()