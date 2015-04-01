# ui-bootstrap-fontawesome
An addon Angular module for users of Angular-UI Bootstrap that would like to use Font-Awesome icons instead of the Glyphicons provided by the standard Bootstrap distribution.

[![Build Status](https://secure.travis-ci.org/maxfierke/ui-bootstrap-fontawesome.svg)](http://travis-ci.org/maxfierke/ui-bootstrap-fontawesome)

## Installation

* Include one of the JavaScript source files under `dist/` in your project. If you're unsure, go for `ui-bootstrap-fontawesome-[version].min.js` since that'll be nice and minified for ya. Project files **will be** available shortly on **Bower** so you'll be able to `bower install ui-bootstrap-fontawesome`

* Add `ui.bootstrap.fontawesome` as a dependency of your Angular module:

	```javascript
	angular.module('amazingDemoApp', ['ui.bootstrap', 'ui.bootstrap.fontawesome']);
	```

## Development
### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install global dev dependencies: `npm install -g grunt-cli karma`
* Install local dev dependencies: `npm install` while current directory is the ui-bootstrap-fontawesome repo. This will also run `bower install`, so no need to do that seperately.

### Build
This project has shamelessly stolen the build machinery from Angular-UI Bootstrap, making it ridiculously easy to build lint, test, and build the project by just running `grunt`. Seriously, it's awesome and *So Agile d00d&#0153;*.

* Build the whole project: `grunt` - this will run `lint`, `test`, and `concat` targets.

## Credits
* Big ups to the Angular-UI team (especially Chris Chua &amp; Robin van Baalen who told me to make this).
* My lazy self for not wanting to copy the same templates into every project that uses Font-Awesome with Angular-UI Bootstrap.

## TODO
* Demo page showing that it works
