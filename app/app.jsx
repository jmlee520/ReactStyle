var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('Container');


//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(

    <Container  name = "asdf" message = "asdfasdfsadf"/>,
    document.getElementById('app')

);

