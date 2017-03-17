# ctm-sdet-test

## Installing and running the tests

This framework has been testing in Debian and the install instructions assume a Debian machine with nodejs and git installed.

Firstly, you will need chrome and firefox installed, along with their corresponding webdrivers. You can get Chromedriver from [here](http://chromedriver.storage.googleapis.com/index.html) and Geckodriver from [here](http://github.com/mozilla/geckodriver/releases). Add them to your path like this:

	export PATH=$PATH:~/path/to/directory/containing/driver

This can be verified by opening a terminal and typing chromedriver or geckodriver. You should see, respectively:

	Starting ChromeDriver 2.28 on port 9515
	Only local connections are allowed.

	1489771356630   geckodriver     INFO    Listening on 127.0.0.1:4444

Assuming that is all okay, do the following:

	git clone git://github.com/DarrylGreen/ctm-sdet-test.git
    cd ctm-sdet-test
    npm install
    node_modules/grunt-cli/bin/grunt

This will install and run the tests. By default, the tests will run in Chrome, to run the tests in Firefox simply append firefox to the last command.