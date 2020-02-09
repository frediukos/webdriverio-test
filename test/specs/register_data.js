const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const email = Math.random().toFixed(5) + '0122333@gmail.com';

const user = {
    firstName: 'Elena',
    lastName: 'Frediuk',
    phone: '17775551122',
    email: email,
    password: '0122333',
    about: 'fkdlfklmlk kdjlx lklkjiofd hcyup k.',
    goals: 'fklfijn yre oiopmcp',
    englishLevel: 'Intermediate'
};

const pageRegister = {
    title: 'Progress Monitor',
    h1: 'User Register',
    description: 'Profiles with fictitious or dummy data will be deleted.',
    buttonText: 'Submit'
};

const pageRegisterSelectors = {
    h1: 'h1',
    description: 'p',
    submitButton: 'form button[type="submit"]',
    firstNameInput: 'form input[name="firstName"]',
    lastNameInput: 'form input[name="lastName"]',
    phoneInput: 'form input[name="phone"]',
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    aboutInput: 'form textarea[name="about"]',
    goalsInput: 'form textarea[name="goals"]',
    englishLevelInput: 'form select[name="englishLevel"]'
};

const pageLoginSelectors = {
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    submitButton: 'form button[type="submit"]'
};

const pageFlashGroupCreate = {
    clickTopMenuCards: '//div[@id="site-menu"]//a[@qa="cards-link"]',
    createNewFlashGroup: '//button[@qa="flash-create-new-group"]',
    modalFormOpen: '//div[contains(@class, "sidepanel")]',
    modalFormTitleIsCorrect: '//div[contains(@class, "sidepanel")]//*[@class="modal-title"]',
    inputGroupName: '//div[contains(@class, "sidepanel")]//input[@name="name"]',
    inputGroupDescription: '//div[contains(@class, "sidepanel")]//input[@name="description"]',
    submitFormButton: '//div[contains(@class, "sidepanel")]//button[@type="submit"]',
    firstItemTitle: '//div[@qa="flash-group-list "]//h4/a',
    firstItemDescription: '//div[@qa="flash-group-list "]//div[@qa="description"]',
    titleGroupIsClickable: '//div[@qa="flash-group-list "]//h4/a',
    h1: '//h1'
};

const pageLogin = {
    title: 'Progress Monitor',
    h1: 'User Login'
};

const pageConfirmation = {
  partOfLink: '*=Elena Frediuk'
};

module.exports = { URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageConfirmation,
    pageLogin, pageLoginSelectors, pageFlashGroupCreate };
