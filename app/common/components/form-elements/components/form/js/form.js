import React from 'react';

let Form = {};

Form.Class = React.createClass({
  displayName: 'Form',
  propTypes: {
    children: React.PropTypes.node
  },
  render() {
    return (
      <form className="form">
        {this.props.children}
      </form>
    );
  }
});

export default Form;
