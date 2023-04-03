const {test, expect}=require('@playwright/test');



// test('for testing the rahul ',async ({page})=>
// {

//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     await page.locator('input#username').type("rahulshetty");
//     const username = page.locator('input#username');
//     await page.locator('#password').type("learning");
//     await page.locator('#signInBtn').click();
//     console.log(await page.locator("[style*='block']").textContent());
//     await expect(page.locator("[style*='block']")).toContainText('Incorrect');
//     await username.fill("");
//     await username.fill("rahulshettyacademy");
//     const signin =page.locator('#signInBtn');
//     await signin.click();


    


// });

test.only('focus this test', async ({ browser }) =>
{
    const context= await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentlink= page.locator("[href*='documents-request']");

    const [newPage]= await Promise.all([
        context.waitForEvent('page'),
        documentlink.click(),
    ])

     const text = await newPage.locator(".red").textContent();
    console.log(text);
    const arrayText=text.split("@")
    console.log(arrayText);
    console.log("done");


});
