import {test, expect} from '@playwright/test'

test('case1 login', async({page}) => {
    
    await page.goto('https://secure.eplanservices401k.com/PROD/login_ui/#/login')
    await page.locator('[placeholder="Username"]').fill('jpodgurski')
    await page.locator('[placeholder="Password"]').fill('Abc12345678!')
    await page.locator('button:text("Sign In")').click()
     
}) 