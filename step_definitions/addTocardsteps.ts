// const { Given, When, Then, After } = require('cucumber');
// const { chromium } = require('playwright');
// const { expect } = require('chai');

// // const expect = chai.expect

// let browser;
// let page;



// Given('User navigates to the application',{ timeout: 60000 }, async () => {
//   // browser = await chromium.launch();
//   browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext();
//   page = await context.newPage();
//   await page.goto('https://bookcart.azurewebsites.net/');
// });


// Given('User click on the login link', async () => {
//  await page.locator("//span[text()='Login']").click();
 
// });



// Given('User enter the username as {string}', async function (username){
//  await page.locator("input[formcontrolname='username']").type(username);
// });
  
// Given('User enter the password as {string}', async (password) => {
  
//   await page.locator("input[formcontrolname='password']").type(password);
// }); 


// When('User click on the login button', async ()=> {
//   await page.locator("button[color='primary']") .click();
// });

// When('login success', async () => {
//   const text =  await page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]").textContent();
//  console.log("UserName is "+ text)
// });


// Then('Login failed', async () => {
  
//   const failmsg=  await page.locator("mat-error[role='alert']");
//   //  expect(await failmsg.isDisplayed()).to.be.true;
//   //  await expect(failmsg).toBeVisible();
//   console.log("Failed",failmsg)
//   //  expect(response.status()).toBe(200);
  
// });


// When('user Search for a Book is {string}', async (book) => {
//   // await page.locator("input[placeholder='Search books or authors']").type(book).click;
//   const locator = await page.frameLocator("input[placeholder='Search books or authors']").getByText(book);

// });

// // When('user add the book to the cart', async () => {
// //  await page.locator( "span.mat-button-wrapper").type(" Add to Cart").click()
// // });



// After(async () => {
//   // await browser.close(); 
// });




