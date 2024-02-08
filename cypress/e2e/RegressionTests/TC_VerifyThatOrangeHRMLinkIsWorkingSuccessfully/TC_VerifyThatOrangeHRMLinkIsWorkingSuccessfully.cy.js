import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPageActions from "../../../pageObjects/loginPage/actions.cy";

const loginPageAction = new LoginPageActions();

Given("The user navigated to login page", () => {
  loginPageAction.openLoginPage();
});

When("click on orange HRM link", () => {
  loginPageAction.clickOnOrangeHRMURL();
});
