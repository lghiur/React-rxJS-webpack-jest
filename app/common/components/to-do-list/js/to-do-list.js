import React from 'react';
import Rx from 'rxjs';

import State from 'app/common/components/state/js/state';
import Connect from 'app/common/components/connect/js/connect';
import ToDoActions from './to-do-list.actions';

import Button from 'app/common/components/button/js/button';
import List from 'app/common/components/list/js/list';
import FormElements from 'app/common/components/form-elements/js/form-elements';

let ToDoList = {};

ToDoList.Class = React.createClass({
  displayName: 'ToDoList',
  propTypes: {
    addItem: React.PropTypes.func,
    init: React.PropTypes.func,
    onClick: React.PropTypes.func,
    requestTodos: React.PropTypes.func,
    todos: React.PropTypes.array
  },
  componentWillMount() {
    this.props.init();
    this.props.requestTodos();
  },
  componentDidMount() {
    var source = Rx.Observable.fromEvent(this.input, 'keyup');

    var keyup = source
      .map((e) => e.target.value)
      .filter((text) => text.length > 1)
      .delay(500)
      .distinctUntilChanged()
      .subscribe((e) => {
        console.log(e);
      });
  },
  renderAddButton() {
    return (
      <Button.Class
          type="button"
      >
        Add Item
      </Button.Class>
    );
  },
  getInputElement(input) {
    this.input = input;
  },
  render() {
    let button = this.renderAddButton();
    return (
      <div className="to-do-list">
        <List.Class>
          {
            this.props.todos && this.props.todos.length > 0
              ? this.props.todos.map((result) => {
                  return <List.Item.Class key={result.id}>{result.value}</List.Item.Class>;
                })
              : <List.Item.Class key={0}>At this moment there is no to do item</List.Item.Class>
          }
        </List.Class>
        <div className="add-listItem">
          <FormElements.Form.Class>
            <FormElements.Input.Class
                buttonAfter = {button}
                getInput={this.getInputElement}
                onButtonClick={this.props.addItem}
                placeholder="Add ToDO Item"
                type="text"
            />
          </FormElements.Form.Class>
        </div>
      </div>
    );
  }
});

export default Connect(State, state => ({
  todos: state.toDoList,
  init() {
    ToDoActions.init.next([]);
  },
  requestTodos() {
    ToDoActions.requestTodos.next();
  },
  addItem(value, input) {
    ToDoActions.addItem.next(value);
    input.value = "";
  }
}))(ToDoList.Class);
