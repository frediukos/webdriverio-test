const { loginAsAdmin, logout } = require('../user/actions');
const { pageFlashGroupCreate } = require('../register_data');

const { expect } = require('chai');


describe('FLASH GROUP CREATE', () => {
    before('login as admin', () => {

        loginAsAdmin();
    });

    it('should click top menu cards', () => {
        $(pageFlashGroupCreate.clickTopMenuCards).click();
    });

    it('should click button create new FlashGroup', () => {
        $(pageFlashGroupCreate.createNewFlashGroup).click();
        browser.pause(400);
    });

    it('should check if modal form open', () => {
        const el = $(pageFlashGroupCreate.modalFormOpen);
        expect(el.isDisplayed()).true;
    });

    it('should check if modal form title is correct', () => {
        const actual = $(pageFlashGroupCreate.modalFormTitleIsCorrect).getText();
        const expected = 'Create Flash Group';
        expect(actual).eq(expected);
    });

    it('should fill out input group name', () => {
        const el = $(pageFlashGroupCreate.inputGroupName);
        el.setValue('My group name 123');
    });

    it('should fill out input group description', () => {
        const el = $(pageFlashGroupCreate.inputGroupDescription);
        el.setValue('My group description 123...');
    });

    it('should submit form', () => {
        $(pageFlashGroupCreate.submitFormButton).click();
        browser.pause(500);
    });

    it('should first title item in list be equal created title', () => {
        const actual = $(pageFlashGroupCreate.firstItemTitle).getText();
        const expected = 'My group name 123';
        expect(actual).eq(expected);
    });

    it('should first item in list be equal created description', () => {
        const actual = $(pageFlashGroupCreate.firstItemDescription).getText();
        const expected = 'My group description 123...';
        expect(actual).eq(expected);
    });

    it('should verify created title group is clickable', () => {
        $(pageFlashGroupCreate.titleGroupIsClickable).click();
        browser.pause(500);
    });

    it('should verify created group has correct title', () => {
        const actual = $(pageFlashGroupCreate.h1).getText();
        const expected = 'My group name 123';
        expect(actual).eq(expected);
    });

    after('Logout', () => {
        logout();
        browser.pause(3000);
    });
});