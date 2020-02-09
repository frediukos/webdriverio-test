const { URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin, pageConfirmation } = require('./register_data');

const { expect } = require('chai');

describe('Register page', () => {
    it('should have the right title', () => {
        browser.url(URL_REGISTER);
        const actualTitle = browser.getTitle();
        const expectedTitle = pageRegister.title;
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title', () => {
        const actualH1Text = $(pageRegisterSelectors.h1).getText();
        const expectedH1Text = pageRegister.h1;
        expect(actualH1Text).equal(expectedH1Text);
        browser.pause(1000);
    });

    it('should have a correct description', () => {
        const actual = $(pageRegisterSelectors.description).getText();
        const expected = pageRegister.description;
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should have a correct submit button test', () => {
        const actual = $(pageRegisterSelectors.submitButton).getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should fill up First Name field', () => {
        const element = $(pageRegisterSelectors.firstNameInput);
        element.setValue(user.firstName);
        browser.pause(1000);
    });

    it('should fill up Last Name field', () => {
        const element = $(pageRegisterSelectors.lastNameInput);
        element.setValue(user.lastName);
        browser.pause(1000);
    });

    it('should fill up Cell phone number field', () => {
        const element = $(pageRegisterSelectors.phoneInput);
        element.setValue(user.phone);
        browser.pause(1000);
    });

    it('should fill up Email field', () => {
        const element = $(pageRegisterSelectors.emailInput);
        element.setValue(user.email);
        browser.pause(1000);
    });

    it('should fill up Password', () => {
        const element = $(pageRegisterSelectors.passwordInput);
        element.setValue(user.password);
        browser.pause(1000);
    });

    it('should fill up About field', () => {
        const element = $(pageRegisterSelectors.aboutInput);
        element.setValue(user.about);
        browser.pause(1000);
    });

    it('should fill up My goals field', () => {
        const element = $(pageRegisterSelectors.goalsInput);
        element.setValue(user.goals);
        browser.pause(1000);
    });

    it('should fill up English level field', () => {
        const element = $(pageRegisterSelectors.englishLevelInput);
        element.selectByAttribute('value', user.englishLevel);
        browser.pause(1000);
    });

    it('should click Submit button', () => {
        const element = $(pageRegisterSelectors.submitButton);
        element.click();
        browser.pause(1000);
    });
});
    //***********************************

describe('Login page', () => {
    it('should have the right title', () => {
        browser.url(URL_LOGIN);
        const actualTitle = browser.getTitle();
        const expectedTitle = pageLogin.title;
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = pageLogin.h1;
        expect(actual).equal(expected);
        browser.pause(1000);
    });

    it('should fill up Email field', () => {
        const element = $(pageRegisterSelectors.emailInput);
        element.setValue(user.email);
        browser.pause(1000);
    });

    it('should fill up Password', () => {
        const element = $(pageRegisterSelectors.passwordInput);
        element.setValue(user.password);
        browser.pause(2000);
    });

    it('should click Login button', () => {
        const element = $(pageRegisterSelectors.submitButton);
        element.click();
        browser.pause(2000);
    });

    it('should have a correct part of link', () => { //Confirmation register page
        const link = $(pageConfirmation.partOfLink);
        link.getText();
    });
});

