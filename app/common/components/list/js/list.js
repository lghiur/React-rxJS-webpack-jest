import React from 'react';
import ListItem from '../components/list-item/js/list-item';

let List = {};

List.Class = React.createClass({
  displayName: 'List',
  propTypes: {
    children: React.PropTypes.node
  },
  render() {
    return (
      <ul className="list">
        {this.props.children}
      </ul>
    );
  }
});
List.Item = ListItem;

export default List;
