import React from 'react';

let Button = {};

Button.Class = React.createClass({
  displayName: 'Button',
  propTypes: {
    children: React.PropTypes.node,
    className: React.PropTypes.string
  },
  getCssClasses() {
    let cssClasses = this.props.className || '';

    return 'btn ' + cssClasses;
  },
  render() {
    return (
      <button
          className = {this.getCssClasses()}
          {...this.props}
      >
        {this.props.children}
      </button>
    );
  }
});

export default Button;
