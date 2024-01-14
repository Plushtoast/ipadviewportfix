# Summary

This (quick & dirty) bugfix module is intended to provide basic compatibility for iPads to Foundry 11.

Currently the iPad shows two major issues:

* A big black overlay is hiding the entire canvas, making the usage of foundry impossible
* In Safari the viewport is calculated differently, resulting in missing parts of e.g. the macro bar at the bottom of the screen.

To fix theses issues these measures have been taken:

* It adds a button "iOS Fix" to the settings directory. Clicking it sets the performance mode of foundry to low, which allows to render the canvas without the black overlay. You only have to click this button once on iPads. (the Button is visible even if the black overlay hides everything).
* It adds a css viewport fix to render the entire canvas

This module has been tested on an iPad Air with M1 CPU. (no clue about iPhones or anything else :) 


# Hints

* You can start Foundry in Full screen if you add it to the home screen by clicking on the share button in the browser.
* Sometimes the viewport is bugged nevertheless you can fix this by tapping in and out of the app