var testuserLogin = require('./tests/testuser-login');
var testuserCreate = require('./tests/testuser-create');
var meliLogin = require('./tests/meli-login');
var mbeOpen = require('./tests/mbe-open');

module.exports = {
    'Create app account from testuser' : function (browser) {

        // 1) criar usuário de teste sem anúncios
        testuserLogin(browser);
        testuserCreate(browser);

        // 2) aba anônima
        // 3) login meli
        meliLogin(browser);

        // 4) criar um anúncio que preste, nada de xxxxx, yyy, com imagem que faça sentido
        // TODO

        // 5) anúncio criado, entrar no App
        mbeOpen(browser);

        // Steps 6 - 22
        // TODO


        //finaliza os testes
        // se manter a linha abaixo comentada, a sessão do navegador será mantida
        browser.end();


    }
};