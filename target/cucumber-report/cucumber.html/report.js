$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As a use I want to go on computer page",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3947659600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should navigate to computer page successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Verify Computer text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 94030000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 864402399,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyComputerText()"
});
formatter.result({
  "duration": 32358000,
  "status": "passed"
});
formatter.after({
  "duration": 612438500,
  "status": "passed"
});
formatter.before({
  "duration": 1868159600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify user should navigate to Desktops page successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify Desktops text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24801,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 494032500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 407144400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyDesktopsText()"
});
formatter.result({
  "duration": 36932099,
  "status": "passed"
});
formatter.after({
  "duration": 625534200,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user I would like to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2234361800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successFully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 781620500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 38276700,
  "status": "passed"
});
formatter.after({
  "duration": 613880701,
  "status": "passed"
});
formatter.before({
  "duration": 2230280999,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"prime123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Password \"prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I am unable to login with invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36201,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 784579101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 67518201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 56090400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 257968800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iAmUnableToLoginWithInvalidCredentials()"
});
formatter.result({
  "duration": 15500,
  "status": "passed"
});
formatter.after({
  "duration": 609368400,
  "status": "passed"
});
formatter.before({
  "duration": 1795840700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that user should login successfully with valid credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"devani123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Password \"devani123\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should login successfully with valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 838508100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "devani123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 80011300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "devani123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 82886200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 699953900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfullyWithValidCredentials()"
});
formatter.result({
  "duration": 20042834899,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ddfb35bbc189b50266b7a4d30c9af11a, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\palak\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50074}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50074/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ddfb35bbc189b50266b7a4d30c9af11a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.isLogOutLinkDisplay(HomePage.java:77)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.iShouldLoginSuccessfullyWithValidCredentials(LoginSteps.java:53)\r\n\tat ✽.Then I should login successfully with valid credentials(login.feature:26)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 798722500,
  "status": "passed"
});
formatter.before({
  "duration": 2278598499,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify that user should logOut successFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter email \"devani123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Password \"devani123\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should logOut successFully and i should see login link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20899,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 762820201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "devani123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 64452899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "devani123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 57147799,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 741619101,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLogOutSuccessFullyAndIShouldSeeLoginLink()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.after({
  "duration": 600280800,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register page",
  "description": "As a user i want to register with nopcommerce website",
  "id": "register-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2303852700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "register-page;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28799,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1059061200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 32052300,
  "status": "passed"
});
formatter.after({
  "duration": 607646000,
  "status": "passed"
});
formatter.before({
  "duration": 1843314400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify that firstName,lastName,email,password and confirmPassword fields are mandatory",
  "description": "",
  "id": "register-page;verify-that-firstname,lastname,email,password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the firstName error message",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Verify the lastName error message",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the email error message",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the password error message",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify the confirmPassword error message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24899,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 874633600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 65771600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheFirstNameErrorMessage()"
});
formatter.result({
  "duration": 61475100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheLastNameErrorMessage()"
});
formatter.result({
  "duration": 53087101,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheEmailErrorMessage()"
});
formatter.result({
  "duration": 57322899,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyThePasswordErrorMessage()"
});
formatter.result({
  "duration": 76745100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheConfirmPasswordErrorMessage()"
});
formatter.result({
  "duration": 79438100,
  "error_message": "org.junit.ComparisonFailure: Password is required. expected:\u003c[Confirm]Password is required...\u003e but was:\u003c[]Password is required...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegisterSteps.verifyTheConfirmPasswordErrorMessage(RegisterSteps.java:54)\r\n\tat ✽.And Verify the confirmPassword error message(register.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 793988399,
  "status": "passed"
});
formatter.before({
  "duration": 1876927500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that user should create account successfully",
  "description": "",
  "id": "register-page;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on female radio button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter firstname \"Daya\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter lastname \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select date of birth \"20\",\"Mar\",\"1985\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email \"daya1985@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"daya123\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password \"daya123\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see message Your registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31799,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 438355199,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnFemaleRadioButton()"
});
formatter.result({
  "duration": 84905800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Daya",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 69254200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 77177200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 24
    },
    {
      "val": "Mar",
      "offset": 29
    },
    {
      "val": "1985",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 20144475900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with text: Mar\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:153)\r\n\tat com.nopcommerce.demo.utility.Utility.selectByVisibleTextFromDropDown(Utility.java:146)\r\n\tat com.nopcommerce.demo.pages.RegisterPage.selectDateOfBirth(RegisterPage.java:108)\r\n\tat com.nopcommerce.demo.cucumber.steps.RegisterSteps.iSelectDateOfBirth(RegisterSteps.java:76)\r\n\tat ✽.And I select date of birth \"20\",\"Mar\",\"1985\"(register.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "daya1985@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "daya123",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "daya123",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeMessageYourRegistrationCompleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 819672000,
  "status": "passed"
});
});