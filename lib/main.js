var sdk_self = require('sdk/self');
var data_url = sdk_self.data.url;
var buttons = require('sdk/ui/button/action');
var hiddenframes = require('sdk/frame/hidden-frame');
var symbiont = require('sdk/content/content');

// prepare background page
var opt = {};
var hf = hiddenframes.HiddenFrame({
    onUnload: function(){ hiddenframes.remove(hf); },
});
hiddenframes.add(hf);
opt.contentURL = data_url('be_bg.html');
opt.frame = hf.element;
symbiont.Symbiont(opt);

//testcase
function makeTest() {
    var win = opt.frame.contentWindow;
    win = win.wrappedJSObject;
    var args = [1111, 2222];
    console.log('arguments', args);
    //this work fine
    console.log('sending arguments via "call"');
    win.apply_test.call(null, args[0], args[1]);

    // this doesn't work for FF 35 and newer
    console.log('sending arguments via "apply"');
    var result = win.apply_test.apply(null, args);
    if (result)
    {
        button.state('window', {
            icon: iconSuccess
        });
    } else {
        button.state('window', {
            icon: iconFail
        });
    }
}

var iconDefault = data_url('i64.png');
var iconFail = data_url('x64.png');
var iconSuccess = data_url('v64.png');

// create button to run testcase
var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "Test",
    icon: iconDefault,
    onClick: makeTest
});