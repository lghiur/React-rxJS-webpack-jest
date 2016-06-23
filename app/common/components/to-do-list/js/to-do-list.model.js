import Stampit from 'stampit';
import Rx from 'rxjs';

import ToDoActions from './to-do-list.actions';

let ToDoListModel;

ToDoListModel = Stampit
  .methods({
    _initState(initialState, state) {
      let newState = Object.assign({}, state);

      if(!newState.toDoList) {
        newState.toDoList = initialState;
      }

      return newState;
    },
    init(initialState) {
      return this._initState.bind(this, initialState);
    },
    _addItemToState(value, key, state) {
      let newState = Object.assign({}, state);

      newState.toDoList.push({
        id: newState.toDoList.length,
        value: value
      });

      return newState;
    },
    addItem(value, key) {
      return this._addItemToState.bind(this, value, key);
    },
    _addTodosToState(state) {
      let newState = Object.assign({}, state);

      Rx.Observable.ajax({ url: 'http://localhost:4444/todos', responseType: 'json'})
        .subscribe((data) => {
            let todos = data.response.todos;

            todos = todos.map((value, key) => {
              value.id = key;

              return value;
            });

            ToDoActions.receiveTodos.next(todos);
          },
          (err) => {
            console.log(err);
          }
        );

      return newState;
    },
    requestTodos() {
      return this._addTodosToState.bind(this);
    },
    _receiveTodosToState(data, state) {
      let newState = Object.assign({}, state);

      newState.toDoList = newState.toDoList.concat(data);

      return newState;
    },
    receiveTodos(data) {
      return this._receiveTodosToState.bind(this, data);
    }
  });

const toDoListModelInstance = ToDoListModel();

export default toDoListModelInstance;
