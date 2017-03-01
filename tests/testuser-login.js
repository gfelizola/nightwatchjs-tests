module.exports = {
    'Login to testuser.ml.com' : function (browser) {
        browser
            .url('http://testuser.ml.com')
            .waitForElementVisible('body', 5000)
            .assert.title('Login')
            .assert.visible('input#session_username')
            .setValue('input#session_username', process.env.MELI_USER)
            .setValue('input#session_password', process.env.MELI_PASS)
            .waitForElementVisible('input[type=submit]', 1000)
            .click('input[type=submit]')
            .pause(2000)
            .assert.title('Test User')
            .end();
    }
};