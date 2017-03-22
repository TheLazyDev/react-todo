var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');





// Load foundation

$(document).foundation();

// Load Custom Stylesheet

require('style!css!sass!applicationStyles');



ReactDOM.render(
          <p>BoilerplateTemplate</p>,
          document.getElementById('app')
);



