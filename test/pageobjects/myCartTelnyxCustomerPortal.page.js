class MyCartTelnyxCustomerPortalPage {
    get upfrontCost(){
        return $('(//*[@class="tx-2jo5gH tx-FwKkh"])[6]')
    }
    get recurringCost(){
        return $('(//*[@class="tx-2jo5gH tx-FwKkh"])[8]')
    }
    get shipping(){
        return $('(//*[@class="tx-2jo5gH tx-FwKkh"])[10]')
    }
    get totalCreditRequired(){
        return $('(//*[@class="tx-2jo5gH tx-FwKkh"])[12]')
    }
    async getUpfrontCostValue(){
        const upfrontCostValue = await this.upfrontCost.getText()
        return upfrontCostValue
    }
    async getRecurringCostValue(){
        const recurringCostValue = await this.recurringCost.getText()
        return recurringCostValue
    }
    async getShippingValue(){
        const shippingtValue = await this.shipping.getText()
        return shippingtValue
    }
    async getTotalCreditRequiredValue(){
        const totalCreditRequiredValue = await this.totalCreditRequired.getText()
        return totalCreditRequiredValue
    }
    async verifyTotalCreditRequired(){
        let priceArray = []
        let priceArray1 = []
        let sum = 0.00
        priceArray.push(await this.getUpfrontCostValue())
        priceArray.push(await this.getRecurringCostValue())
        priceArray.push(await this.getShippingValue())
        console.log('array is', priceArray)
        for (let i = 0; i < priceArray.length; i++) {
            priceArray1.push(parseFloat( await priceArray[i].slice(1))) 
            sum +=priceArray1[i]
        }
        await expect(this.totalCreditRequired).toHaveText('$'+sum.toFixed(2))
    }
   
}

module.exports = new MyCartTelnyxCustomerPortalPage()