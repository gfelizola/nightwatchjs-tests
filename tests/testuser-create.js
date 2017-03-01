module.exports = {
    'Create testuser': function (browser) {
        browser
            .url('http://testuser.ml.com')
            .waitForElementVisible('select#site_id', 5000)
            .setValue('select#site_id', 'MLB')
            .pause(5000)
            .end()
    }
};