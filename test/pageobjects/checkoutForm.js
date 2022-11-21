

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Checkout extends Page {
    /**
     * define selectors using getter methods
     */
    get firstName () {
        return $('#first-name');
    }

    get lastName () {
        return $('#lastName');
    }

    get postalCode () {
        return $('#postal-code');
    }

    get btnCancel () {
        return $('#cancel');
    }

    get btnContinue () {
        return $('#continue');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkout-step-one');
    }
}

export default new Checkout();