module.exports = function (browser) {
    browser
        .assert.visible('input.ch-btn')
        .click('input.ch-btn')
        .waitForElementVisible('#ch-modal-5', 5000)
        .assert.visible('a.ch-btn[type=button]')
        .click('a.ch-btn[type=button]')
        .windowHandles( result => {
            if ( Array.isArray( result.value ) ) {
                if ( result.value.length > 1 ) {
                    browser.switchWindow( result.value[1] );
                }
            }
        })
        .waitForElementVisible('a.nav-logo', 30000)
        .closeWindow();
};