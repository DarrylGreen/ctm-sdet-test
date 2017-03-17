'use strict';

module.exports = function() {
  this.World = require('../support/world.js').World;

  this.Then(/^I should be able to enter my preference for (.*) tariffs and (.*) payments$/, function (tariff, payment) {   
    this.waitForElementWithTag('for', 'pre-select-' + tariff, 5000);
    this.clickOnElementWithTag('for', 'pre-select-' + tariff);
    this.clickOnElementWithTag('for', 'pre-select-payment-' + payment);                                
  });

  this.Then(/^I should be able to enter my contact details$/, function () {
    this.driver.findElement({ id: 'Email' }).sendKeys('testemail@test.com');
    this.driver.findElement({ id: 'terms-label' }).click();
    this.driver.findElement({ id: 'email-submit' }).click();
  });

};