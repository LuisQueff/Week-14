

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Cart extends Page {
    /**
     * define selectors using getter methods
     */
    get btnCheckout () {
        return $('#checkout');
    }

    get btnContinue () {
        return $('#continue-shopping');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get errorMsg () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('cart');
    }
}

export default new Cart();