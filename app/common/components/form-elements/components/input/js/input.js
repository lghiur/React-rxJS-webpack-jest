import React from 'react';

let Input = {};

Input.Class = React.createClass({
  displayName: 'Input',
  propTypes: {
    buttonAfter: React.PropTypes.node,
    buttonBefore: React.PropTypes.node,
    className: React.PropTypes.string,
    getInput: React.PropTypes.func,
    onButtonClick: React.PropTypes.func
  },
  componentDidMount() {
    if(this.props.getInput && typeof this.props.getInput === 'function') {
      this.props.getInput(this.input);
    }
  },
  getCssClasses() {
    let cssClasses = this.props.className || '';

    return 'form-input ' + cssClasses;
  },
  renderElement() {
    return (
      <input
          className={this.getCssClasses()}
          ref={(input) => this.input = input}
          {...this.props}
      />
    );
  },
  renderInputGroup(inputElement) {
    return (
      <div className="input-button-group">
        {this.renderButton(this.props.buttonBefore)}
        {inputElement}
        {this.renderButton(this.props.buttonAfter)}
      </div>
    );
  },
  renderButton(button) {
    if(!button) {
      return null;
    }

    let newButton = React.cloneElement(button, {
      onClick: this.onButtonClick
    });

    return newButton;
  },
  onButtonClick() {
    this.props.onButtonClick(this.input.value, this.input);
  },
  render() {
    let inputElement = this.renderElement();

    if (this.props.buttonAfter || this.props.buttonBefore) {
      return this.renderInputGroup(inputElement);
    }

    return inputElement;
  }
});

export default Input;
