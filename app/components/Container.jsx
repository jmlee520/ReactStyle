var React = require('react');
var Message = require('Message');
var Form = require('Form');
//main component/outer component
var Container = React.createClass({
    //setting default value to prop
    getDefaultProps: function () {
        return {
            name: "simploper"
            , message: 'this is message'
        }
    },
    //setting initial value to state
    getInitialState: function () {

        return {
            nameFromState: this.props.name
        };

    },

    handleNewName: function(name){
        this.setState({
            nameFromState: name
        });
    },

    render: function () {
        var name = this.state.nameFromState;
        var message = this.props.message;

        return (
            <div>
                

                <Message name={name} message={message} />
                <Form onNewName={this.handleNewName}/> 

            </div>
        );
    }
});

module.exports = Container;