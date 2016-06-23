import React from 'react';
import ToDoList from 'app/common/components/to-do-list/js/to-do-list';
let AppContainer = {};

AppContainer.Class = React.createClass({
  displayName: 'AppContainer',
  render() {
    return (
      <div className="app-container">
        <ToDoList />
      </div>
    );
  }
});

export default AppContainer;
