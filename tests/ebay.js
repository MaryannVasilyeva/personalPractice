module.exports = {
    beforeEach: browser => {
        browser.url('https://www.ebay.com')
    },
    after: browser => {
        browser.end()
    },
    'Test if site opens': browser => {
        browser.pause()
    }
}