'use strict';

module.exports = function() {
  this.World = require('../support/world.js').World;

  this.When(/^I enter that I dont know my energy usage$/, function () {
    this.waitForElementWithTag('for', 'prepayment-no', 10000);
    this.clickOnElementWithTag('for', 'prepayment-no');
    this.clickOnElementWithTag('for', 'economy-7-no');
    this.clickOnElementWithTag('for', 'electricity-dont-know');
    this.clickOnElementWithTag('for', 'gas-dont-know');
    this.driver.findElement({ id: 'goto-your-energy' }).click();
  });

  this.Then(/^I should be able to give details to estimate my usage$/, function () {
    this.waitForElementWithTag('for', 'three-four-bedroom', 10000);
    this.clickOnElementWithTag('for', 'three-four-bedroom');
    this.clickOnElementWithTag('for', 'three-four-occupants');
    this.clickOnElementWithTag('for', 'electricity-heat');
    this.clickOnElementWithTag('for', 'temperate');
    this.clickOnElementWithTag('for', 'well-wrapped');
    this.clickOnElementWithTag('for', 'electricity-cooking');
    this.clickOnElementWithTag('for', 'evenings-weekends');
    this.driver.findElement({ id: 'goto-person-details-button' }).click();
  });

  this.When(/^I enter that I pay (.*) (.*) for electricity$/, function (elecCost, elecPeriod) {
    this.waitForElementWithTag('for', 'prepayment-no', 10000);
    this.driver.findElement({ id: 'electricity-current-spend' }).sendKeys(elecCost);
    this.driver.findElement(this.webdriver.By.xpath('//*[@id="electricity-current-spend-period"]/option[@label="' + elecPeriod + '"]')).click();
  });

  this.When(/^I enter that I pay (.*) (.*) for gas$/, function (gasCost, gasPeriod) {
    this.driver.findElement({ id: 'gas-current-spend' }).sendKeys(gasCost);
    this.driver.findElement(this.webdriver.By.xpath('//*[@id="gas-current-spend-period"]/option[@label="' + gasPeriod + '"]')).click();
    this.clickOnElementWithTag('for', 'gas-spend-period');
    this.driver.findElement({ id: 'goto-your-energy' }).click();
  });

  this.When(/^I enter that my (.*) tariff is (.*)$/, function (energyType, energyTariff) {                                       
    this.waitForElementWithTag('for', energyType + '-tariff-additional-info', 10000);
    this.driver.findElement(this.webdriver.By.id(energyType + "-tariff-additional-info")).click();
    this.driver.findElement(this.webdriver.By.xpath('//*[@id="' + energyType + '-tariff-additional-info"]/option[@label="' + energyTariff + '"]')).click();
  });

  this.When(/^I enter that my method of payment for (.*) is (.*)$/, function (energyType, paymentMethod) {
    this.waitForElementWithTag('for', energyType + '-payment-method-dropdown-link', 10000);
    this.driver.findElement(this.webdriver.By.id(energyType + '-payment-method-dropdown-link')).click();
    this.driver.findElement(this.webdriver.By.xpath('//*[@id="' + energyType + '-payment-method-dropdown-link"]/option[@label="' + paymentMethod + '"]')).click();
  });

  this.When(/^I enter that my electricity usage is (.*) kWh$/, function (elecUsage) {
    this.driver.findElement({ id: 'electricity-usage' }).sendKeys(elecUsage);
    this.driver.findElement({ id: 'goto-your-energy' }).click();
  });

  this.When(/^I enter that my gas usage is (.*) kWh$/, function (gasUsage) {
    this.driver.findElement({ id: 'gas-usage' }).sendKeys(gasUsage);
    this.driver.findElement({ id: 'goto-your-energy' }).click();
  });

};