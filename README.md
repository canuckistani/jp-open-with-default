# Open with Default

A super simple module that opens files with the default system handler.

Example:

    const open = require('jp-open-with-default');
    const homeDir = require('sdk/system').pathFor('Home');
    open('/Users/jeff');