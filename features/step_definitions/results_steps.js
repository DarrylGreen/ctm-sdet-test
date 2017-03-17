'use strict';

var expect = require('chai').expect;
var priceRegex = /£\d+/;

module.exports = function() {
  this.World = require('../support/world.js').World;

  this.Then(/^I should see a progress bar and rewards while page loads$/, function () {
    this.waitForElementWithXPath('//*[@id="interstitial-wrapper"]/div[2]/div[1]', 2000);
    this.waitForElementWithXPath('//*[@id="interstitial-wrapper"]/div[2]/div[2]', 2000);
    this.waitForElementWithXPath('//*[@id="interstitial-wrapper"]/div[2]/div[3]', 2000);
  });

  this.Then(/^I should see my current tariff and usage$/, function () {
    this.waitForElementWithXPath('/html/body/div/div/main/section[3]/table', 20000);
    this.driver.findElement(this.webdriver.By.xpath('/html/body/div/div/main/section[1]/div/h2'))
               .getText()
               .then(function(text) {
                expect(text).to.equal('Current tariff and usage');
               });
  });

  this.Then(/^I should see a cheapest price comparison option$/, function () {
    this.driver.findElement(this.webdriver.By.xpath('//*[@id="relevancy-panel"]/div[1]/div[2]/div[2]/strong'))
               .getText()
               .then(function(price) {
                expect(priceRegex.test(price)).to.equal(true);
               });
  });

  this.Then(/^I should see a table with price comparison results$/, function () {
    this.driver.findElements(this.webdriver.By.xpath('//*[@result-row="price"]/td[2]/div[2]/strong'))
               .then(function(tableELements) {
                tableELements.forEach(function(tableElement) {
                  tableElement.getText().then(function(price) {
                    expect(priceRegex.test(price)).to.equal(true);
                  });
                });
               });
  });

};