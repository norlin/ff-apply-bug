ff-apply-bug
============

Testcase for bug with Function.apply in Firefox 35

###Install Addon SDK
[Addon SDK Installation](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation)

###Download this testcase
    git clone https://github.com/norlin/ff-apply-bug.git

###Run it in Firefox 35 (or newer, including Dev Edition or Nightly build)
    cd ./ff-apply-bug
    cfx run -b <path to FF 35 binary>
When Firefox will start, press Addon button on toolbar (it's without icon, just a blank space)

Look into terminal output – there is few console.log messages, or use [Firefox Developer Tools](https://developer.mozilla.org/en-US/Add-ons/Add-on_Debugger)
