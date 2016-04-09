# ui-bootstrap-fontawesome
An addon Angular module for users of Angular-UI Bootstrap that would like to use Font-Awesome icons instead of the Glyphicons provided by the standard Bootstrap distribution.

[![Build Status](https://secure.travis-ci.org/maxfierke/ui-bootstrap-fontawesome.svg)](http://travis-ci.org/maxfierke/ui-bootstrap-fontawesome)

## Installation

* Include one of the JavaScript source files under `dist/` in your project. If you're unsure, go for `ui-bootstrap-fontawesome-[version].min.js` since that'll be nice and minified for ya. It's also available on [bower](http://bower.io/search/?q=angular-ui-bootstrap-fontawesome) so you can `bower install angular-ui-bootstrap-fontawesome`, if that's how you roll.

* Add `ui.bootstrap.fontawesome` as a dependency of your Angular module:

	```javascript
	angular.module('amazingDemoApp', ['ui.bootstrap', 'ui.bootstrap.fontawesome']);
	```

### Version Guide

* 0.2.x - Supports Angular-UI 0.13.x and 0.14.x (tested with Angular 1.3.13)
* 0.3.x - Supports Angular-UI 1.2.x (tested with Angular.js 1.5.3)

## Development
### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install global dev dependencies: `npm install -g grunt-cli karma`
* Install local dev dependencies: `npm install` while current directory is the ui-bootstrap-fontawesome repo. This will also run `bower install`, so no need to do that seperately.

### Build
This project has shamelessly stolen the build machinery from Angular-UI Bootstrap, making it ridiculously easy to lint, test, and build the project by just running `grunt`. Seriously, it's awesome and *So Agile d00d*&trade;.

* Build the whole project: `grunt` - this will run `lint`, `test`, and `concat` targets.

## Credits
* Big ups to the Angular-UI team (especially Chris Chua &amp; Robin van Baalen who told me to make this). **However**, the Angular-UI team is not involved with this project, so don't complain to them about issues caused by this. Complain to me.
* My lazy self for not wanting to copy the same templates into every project that uses Font-Awesome with Angular-UI Bootstrap.

## TODO
* Demo page showing that it works
