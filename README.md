Prompts used
Prompt 1-Playwright Project setup
create a playwright typescript test project using "npm init playwright@latest" command in the current folder
Can you please make sure the tests are running successfully

Prompt 2: End-to-end test creation 
You are a Playwright TypeScript test generator using Playwright MCP.

Your task is to generate a Playwright test file named:
addtocart.spec.ts

IMPORTANT  RULES:
1. Do NOT generate test code based solely on the scenario description.
2. Use Playwright MCP to open a real browser and interact with the site.
3. Discover selectors, page structure, and flows through live exploration.
4. Generate the test only after verifying selectors and flows via MCP.
5. Execute the generated test and iterate until it passes successfully.

TARGET APPLICATION:
https://automationteststore.com/

TEST SCENARIO:
1. Navigate to the site.
2. Click on "Login or register".
3. Verify that the text "Account Login" is displayed.
4. Enter credentials:
   - Login name: (give the login name)
   - Password: (give Password)
5. Log in to the application.
6. After login, verify:
   - URL contains "account"
   - Text "Welcome back" is visible.
7. Search for an item.
8. Add the item to the cart.
9. Verify that the shopping cart displays the added item.

ASSERTIONS & VALIDATIONS:
- Assert visibility of "Account Login" on the login page.
- Assert successful login by checking:
  - URL contains "account"
  - "Welcome back" text is visible.
- Assert item is successfully added to the cart.
- Assert cart reflects the added item.

TECHNICAL REQUIREMENTS:
- Use Playwright Test with TypeScript.
- Use role-based selectors wherever possible (getByRole).
- Use appropriate waiting strategies:
  - Wait for navigation after login.
  - Use toHaveURL, toBeVisible where appropriate.
- Add explicit timeouts for critical assertions.
- Structure tests using:
  - test.describe
  - descriptive test titles
  - clear inline comments explaining each step

OUTPUT REQUIREMENTS:
- Generate a clean, maintainable Playwright test file.
- Ensure the test passes successfully after execution.

  Prompt 3 Page Object Model refactor
  Let's convert test into page object model design pattern
- Create a pages folder under root directory & add pages under this folder only
- Create 4 pages - LoginPage, HomePage, AddItemPage & CartPage then add abstractions methods in the respective pages
- Create one BasePage which contains common actions for all the pages
- Finally update the test with respect page object methods

  Prompt 4 Configuration management
- Create a config.json file under root directory
- Add URL, username, password & app name key-value pairs in the config.json file
- Finally access all the property values in the test wherever it is requiredonfiguration management

Prompt 5 : Test data management
Create a test-data folder under root directory
- Create a item_TestData.json file under test-data folder
- Keep all the item details in the item_TestData.json in the key-values pairs
- Finally access item_TestData.json test data in test file


Prompt6 - Advanced test generation using Playwright MCP Server without using application url, username/password etc.
Write a Playwright typescript test using playwright mcp.
1. You are a playwright test generator.
2. DO NOT generate test code based on the scenario alone.
3. Use Playwright MCP to open the browser and interact with the site
4. Discover selectors and flows by live exploration, not by static code generation
5. Add a new test for account as accounts.test.spec.ts file
6. Instantiate the LoginPage and HomePage page objects.
7. Navigate to the login page using the URL from the config.
8. Log in using credentials from the config.
9. Verify that the home page loads successfully.
10. Check that the account is visible
Click on the account


