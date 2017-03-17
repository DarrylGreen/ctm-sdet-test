'use strict';

module.exports = function() {
  this.World = require('../support/world.js').World;

  this.Given(/^I am a customer with a postcode (.*)$/, function (postcode) {
    this.driver.get('https://energy.comparethemarket.com/energy/v2/?AFFCLIE=TSTT');
    this.driver.findElement({ id: 'your-postcode' }).sendKeys(postcode);
    this.driver.findElement({ id: 'find-postcode' }).click();
    this.waitForElementWithXPath('//*[@id="change-postcode"]', 10000);
  });

  this.Given(/^I do not have a bill$/, function () {
    this.driver.findElement({ id: 'no-bill-label' }).click();
    
  });

  this.Given(/^I have a bill$/, function () {
    this.driver.findElement({ id: 'have-bill-label' }).click();
  });

  this.Given(/^I am a (.*) customer$/, function (supplier) {
    this.driver.findElement({ id: 'compare-both-label' }).click();
    this.waitForElementWithTag('for', 'electricity-top-six-' + supplier, 10000);
    this.clickOnElementWithTag('for', 'electricity-top-six-' + supplier);
    this.clickOnElementWithTag('for', 'gas-top-six-' + supplier);
    this.driver.findElement({ id: 'goto-your-supplier-details' }).click();
  });

  this.Given(/^I am a (.*) customer for both gas and electricity$/, function (supplier) {                                 
    this.waitForElementWithTag('for', 'dual-top-six-' + supplier, 10000);
    this.clickOnElementWithTag('for', 'same-supplier-yes');
    this.clickOnElementWithTag('for', 'dual-top-six-' + supplier);
    this.driver.findElement({ id: 'goto-your-supplier-details' }).click();
  });

};