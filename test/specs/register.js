//  https://stage.pasv.us/user/register

//const assert = require('assert');
const { expect } = require('chai');
const email = Math.random() + '0122333@gmail.com';
const password = '0122333';


describe('Register page', () => {

    before(() => {
        browser.url('https://stage.pasv.us/user/register')
    });



    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
        browser.pause(2000);
    });

    // it('should have the right title', () => {
    //     const actualTitle = browser.getTitle();
    //     const expectedTitle = 'Progress Monitor';
    //     assert.equal(actualTitle, expectedTitle);
    // });

    it('should have a correct title', () => {
        const actualH1Text = $('h1').getText();
        const expectedH1Text = 'User Register';
        expect(actualH1Text).equal(expectedH1Text);
        browser.pause(2000);
    });

    // it('should have a correct title', () => {
    //     const actualH1Text = $('h1').getText();
    //     const expectedH1Text = 'User Register';
    //     assert.equal(actualH1Text, expectedH1Text);
    // });

    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
        browser.pause(2000);
    });

    it('should have a correct submit button test', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
        browser.pause(2000);
    });

    it('should fill up First Name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue('Elena');
        browser.pause(2000);
    });

    it('should fill up Last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue('Frediuk');
        browser.pause(2000);
    });

    it('should fill up Cell phone number field', () => {
        const element = $('form input[name="phone"]');
        element.setValue('17775551122');
        browser.pause(2000);
    });

    it('should fill up Email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(2000);
    });

    it('should fill up Password', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
        browser.pause(2000);
    });

    it('should fill up About field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('fkdlfklmlk kdjlx lklkjiofd hcyup k.');
        browser.pause(2000);
    });

    it('should fill up My goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('fklfijn yre oiopmcp');
        browser.pause(2000);
    });

    // it('should fill up English level field', () => {
    //     const element = $('form select[name="englishLevel"]');
    //     element.selectByVisibleText('Intermediate');
    //     browser.pause(2000);
    // });

    it('should fill up English level field', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByAttribute('value', 'Intermediate');
        browser.pause(2000);
    });

    it('should click the button Submit', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

    //***********************************

    it('should have a correct title', () => {
        const actual = $('h1').getText();
        const expected = 'User Login';
        expect(actual).equal(expected);
        browser.pause(2000);
    });

    it('should fill up Email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(2000);
    });

    it('should fill up Password', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
        browser.pause(2000);
    });

    it('should click the button Login', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

    it('should have a correct part of link', () => {
        const link = $('*=Elena Frediuk');
        link.getText();
        browser.pause(2000);
    });

});

