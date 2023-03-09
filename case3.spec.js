import {test, expect} from '@playwright/test'

test('case3 password reset', async({page}) => {
    await page.goto('https://secure.eplanservices401k.com/PROD/login_ui/#/login')
    await page.getByText('Having trouble signing in?').click()
    await page.getByText('Reset my password').click()
    await page.locator('//input[@id="username"]').fill('jpodgurski')
    await page.getByText('Continue').click()
    await page.locator('//input[@id="secQuestion"]').fill('ePlan')
    await page.getByText('Finish').click()
      
}) 