# Ember app with a D3 chart off a country dataset with 4 data points per country

### D3 part
* For each country row, create dots displaying var1, var2, var3, var4 values from dataset already bound to the rows, and using xScale already created in app/components/chart/context-chart.js (see screenshot at _templates/basic.png)
* For each row, display line connecting the dots (see screenshot at _templates/basic.png)

### Ember part
* By clicking on of the legend items at the top, the chart rows get sorted by that variable (e.g. clicking ‘var4’ at the top rearranges rows so that row with the highest ‘var4’ value is at the top)

### Optional part to impress

* By hovering on of the legend item at the top, the corresponding dots get highlighted (see advanced.png screenshot)
* Draw lines that connects all dots of display value of the same variable across lines.

Styles at app/styles/app.css


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

