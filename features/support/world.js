'use strict';

var fs = require('fs');
var webdriver = require('selenium-webdriver');
var platform = process.env.PLATFORM || "CHROME";

var buildChromeDriver = function() {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
};

var buildFirefoxDriver = function() {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).
    build();
};

switch(platform) {
  case 'FIREFOX':
    var driver = buildFirefoxDriver();
    break;
  default:
    var driver = buildChromeDriver();
}

var getDriver = function() {
  return driver;
};

var World = function World() {

  var defaultTimeout = 20000;
  var screenshotPath = "screenshots";

  this.webdriver = webdriver;
  this.driver = driver;

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

  this.elementByXPath = function(xPath) {
    return driver.findElement(webdriver.By.xpath(xPath));
  };

  this.waitForElementWithXPath = function(xPath, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    driver.wait(function() {
      return driver.isElementPresent(webdriver.By.xpath(xPath));
    }, waitTimeout);
    driver.findElement(webdriver.By.xpath(xPath)).then(function(element) {
      driver.wait(function() {
        return element.isDisplayed().then(function(displayed) {
          if (!displayed) {
            return false;
          }
          return element.isEnabled();
        });
      }, waitTimeout);
    });
  };

  this.waitForElementWithTag = function(tag, identifier, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    var xPath = "//*[@" + tag + "='" + identifier + "']";
    driver.wait(function() {
      return driver.isElementPresent(webdriver.By.xpath(xPath));
    }, waitTimeout);
  };

  this.clickOnElementWithTag = function(tag, identifier) {
    var xPath = "//*[@" + tag + "='" + identifier + "']";
    return driver.findElement(webdriver.By.xpath(xPath)).click();
  };
};

module.exports.World = World;
module.exports.getDriver = getDriver;
