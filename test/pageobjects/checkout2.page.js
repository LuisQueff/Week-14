

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Checkout2Page extends Page {
    /**
     * define selectors using getter methods
     */
    get btnFinish () {
        return $('#finish');
    }

    get btnCancel () {
        return $('#cancel');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkout-step-two');
    }
}

export default new Checkout2Page();