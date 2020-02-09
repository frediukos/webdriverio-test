const HOST = 'https://stage.pasv.us';

const URL_LOGIN = `${HOST}/user/login`;
const { pageLoginSelectors } = require('../register_data');

function loginAsAdmin() {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue("0122333@gmail.com");
    $(pageLoginSelectors.passwordInput).setValue("0122333");
    $(pageLoginSelectors.submitButton).click();
    browser.pause(1000);
}

function logout() {
    browser.$('//a[@class="dropdown-toggle nav-link"]').click();
    browser.$('//button[contains(text(), "Logout")]').click();
}

module.exports = { loginAsAdmin, logout };