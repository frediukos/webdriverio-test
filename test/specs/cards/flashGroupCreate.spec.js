const { URL_LOGIN } = require('../register_data');

const { expect } = require('chai');



describe('FLASH GROUP CREATE', () => {
    before ('login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue("0122333@gmail.com");
        $('form input[name="password"]').setValue("0122333");
        $('form button[type="submit"]').click();
        browser.pause(1000);
    });

    after('AFTER', () => {
        browser.pause(3000)
    });

    it('should click top menu cards', () => {
        $('//div[@id="site-menu"]//a[@qa="cards-link"]').click();
    });

    it('should click button Create new FlashGroup', () => {
        $('//button[@qa="flash-create-new-group"]').click();
        browser.pause(400);
    });

    it('should check if modal form open', () => {
        const el = $('//div[contains(@class, "sidepanel")]');
        expect(el.isDisplayed()).true;
    });

    it('should check if modal form title is correct', () => {
        const el = browser.$('//div[contains(@class, "sidepanel")]//*[@class="modal-title"]');
        const actual = el.getText();
        const expected = 'Create Flash Group';
        expect(actual).eq(expected);
    });

    it('should fill out input group name', () => {
        const el = $('//div[contains(@class, "sidepanel")]//input[@name="name"]');
        el.setValue('My group name 123');
    });

    it('should fill out input group description', () => {
        const el = $('//div[contains(@class, "sidepanel")]//input[@name="description"]');
        el.setValue('My group description 123...');
    });

    it('should submit form', () => {
        const el = $('//div[contains(@class, "sidepanel")]//button[@type="submit"]');
        el.click();
        browser.pause(500);
    });

    it('should first title item in list be equal created title', () => {
        const actual = $('//div[@qa="flash-group-list "]//h4/a').getText();
        const expected = 'My group name 123';
        expect(actual).eq(expected);
    });

    it('should first item in list be equal created description', () => {
        const actual = $('//div[@qa="flash-group-list "]//div[@qa="description"]').getText();
        const expected = 'My group description 123...';
        expect(actual).eq(expected);
    });

    it('should verify created title group is clickable', () => {
        const el = $('//div[@qa="flash-group-list "]//h4/a');
        el.click();
        browser.pause(500);
    });

    it('should verify created group has correct title', () => {
        const actual = $('//h1').getText();
        const expected = 'My group name 123';
        expect(actual).eq(expected);
    });

});