

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Inventory extends Page {
    /**
     * define selectors using getter methods
     */
    get hamburguer () {
        return $('#react-burger-menu-btn');
    }

    get logoutSidebar () {
        return $('#logout_sidebar_link');
    }

    get btnProduct1 () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get btnProduct2 () {
        return $('#id="add-to-cart-sauce-labs-bike-light"');
    }

    get btnProduct3 () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get btnProduct4 () {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }

    get btnProduct5 () {
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get btnProduct6 () {
        return $('#add-to-cart-test.allthethings()-t-shirt-(red)');
    }

    get btnCart () {
        return $('#shopping_cart_container > a');
    }



    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('inventory');
    }
}

export default new Inventory();