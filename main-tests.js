module.exports = {
    'Create app account from testuser' : function (browser) {

        // make login at testuser.ml.com
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
            .assert.title('Test User');

        // console.log('\Login realizado\n');

        //create a testuser
        browser
            .waitForElementVisible('select#site_id', 5000)
            .setValue('select#site_id', 'MLB')
            .pause(1000)
            .click('h4.ch-expandable-trigger')
            .waitForElementVisible('#ch-expandable-5', 3000)
            .click('input#associateEmail')
            .pause(2000)
            .click('input[type=submit]')
            .waitForElementVisible('#congratsTitle', 20000);

        //login at ML with testuser
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

        // cria conta no ambiente
        browser
            .windowHandles( result => {
                browser.switchWindow( result.value[0] );
            })
            .url( browser.launch_url )
            .waitForElementVisible('.title-bar', 20000)
            .assert.containsText('.title-bar h3', 'Painel resumo')

        //finaliza os testes
        // se manter a linha abaixo comentada, a sessão do navegador será mantida
        browser.end();


    }
};