import {test, expect} from '@playwright/test'

test('case2 lock account', async({page}) => {
    await page.goto('https://secure.eplanservices401k.com/PROD/login_ui/#/login')
    for(let i =0; i < 2; i++){    
    await page.locator('[placeholder="Username"]').fill('jpodgurski')
    await page.locator('[placeholder="Password"]').fill('Abc123456789!')
    await page.locator('button:text("Sign In")').click()
    }  
}) 