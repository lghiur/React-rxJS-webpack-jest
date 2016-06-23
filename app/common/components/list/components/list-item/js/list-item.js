import React from 'react';

let ListItem = {};

ListItem.Class = React.createClass({
  displayName: 'ListItem',
  propTypes: {
    children: React.PropTypes.node
  },
  render() {
    return (
      <li className="list-item">
        {this.props.children}
      </li>
    );
  }
});

export default ListItem;
