import Page from './page';

class CompletePage extends Page {

    get header () {
        return $("#header_container > div.header_secondary_container > span")
    }

    get successText1 () {
        return $("#checkout_complete_container > h2")
    }

    get successText2 () {
        return $("#checkout_complete_container > div")
    }

    get backBtn () {
        return $("#back-to-products")
    }

    get imgPony () {
        return $("#checkout_complete_container > img")
    }

    open () {
        return super.open('checkout-complete');
    }
}

export default new CompletePage();