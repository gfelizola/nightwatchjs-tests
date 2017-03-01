module.exports = function (browser) {
    browser
        .windowHandles( result => {
            browser.switchWindow( result.value[0] );
        })
        .url( browser.launch_url )
        .waitForElementVisible('.title-bar', 20000)
        .assert.containsText('.title-bar h3', 'Painel resumo')
};