class PricingTelnyxCustomerPortalPage{
    get secondPointOnSlider(){return $('[class*="tx-Z2sv59c"][style*=" 0px;"] [class="ant-slider-dot"][style*="20%;"]')}
    get thirdPointOnSlider(){return $('[class*="tx-Z2sv59c"][style*=" 0px;"] [class="ant-slider-dot"][style*="40%;"]')}  
    get fourthPointOnSlider(){return $('[class*="tx-Z2sv59c"][style*=" 0px;"] [class="ant-slider-dot"][style*="60%;"]')}
    get fifthPointOnSlider(){return $('[class*="tx-Z2sv59c"][style*=" 0px;"] [class="ant-slider-dot"][style*="80%;"]')}
    get sixthPointOnSlider(){return $('[class*="tx-Z2sv59c"][style*=" 0px;"] [class="ant-slider-dot"][style*="100%;"]')}
    get secondRate(){return $('[class*="tx-Z2sv59c"][style*=" 0px;"] [class*="button-tx-22oxFy"][id="100000"]')}
    get thirdRate(){return $('[class*="tx-Z2sv59c"][style*=" 0px;"] [class*="button-tx-22oxFy"][id="1000000"]')}
    get fourthRate(){return $('[class*="tx-Z2sv59c"][style*=" 0px;"] [class*="button-tx-22oxFy"][id="10000000"]')}
    get fifthRate(){return $('[class*="tx-Z2sv59c"][style*=" 0px;"] [class*="button-tx-22oxFy"][id="50000000"]')}
    get sixthRate(){return $('[class*="tx-Z2sv59c"][style*=" 0px;"] [class*="button-tx-22oxFy"][id="100000000"]')}
    async clickSecondPointOnSlider(){
        await this.secondPointOnSlider.click()
        await expect(this.secondRate).toHaveAttribute('aria-checked', 'true')
    }
    async clickThirdPointOnSlider(){
        await this.thirdPointOnSlider.click()
        await expect(this.thirdRate).toHaveAttribute('aria-checked', 'true')
    }
    async clickFourthPointOnSlider(){
        await this.fourthPointOnSlider.click()
        await expect(this.fourthRate).toHaveAttribute('aria-checked', 'true')
    }
    async clickFifthPointOnSlider(){
        await this.fifthPointOnSlider.click()
        await expect(this.fifthRate).toHaveAttribute('aria-checked', 'true')
    }
    async clickSixthPointOnSlider(){
        await this.sixthPointOnSlider.click()
        await expect(this.sixthRate).toHaveAttribute('aria-checked', 'true')
    }
    async clickOnPointsSlider(){
        await this.clickSecondPointOnSlider()
        await this.clickThirdPointOnSlider()
        await this.clickFourthPointOnSlider()
        await this.clickFifthPointOnSlider()
        await this.clickSixthPointOnSlider() 
    }
}
    
module.exports = new PricingTelnyxCustomerPortalPage()