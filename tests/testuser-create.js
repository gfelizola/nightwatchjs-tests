module.exports = function (browser) {
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
};