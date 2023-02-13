module.exports = class Page {
    
    open (path) {
        return browser.url(`/${path}`)
    }
    switchActiveWindow(title){
        return browser.switchWindow(title)
    }
    async expectToHaveTitle(url,title){
        setTimeout(async function () {
            await browser.toHaveUrlContaining(url)
        }, 10000);
        await expect(browser).toHaveTitle(title)
    }
    async expectToHaveUrl(url){
        setTimeout(async function () {
            await browser.toHaveUrlContaining(url)
        }, 10000);
        await expect(browser).toHaveUrlContaining(url)
    }
}

