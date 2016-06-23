import Rx from "rxjs/Rx";

import ToDoListActions from "./to-do-list.actions";
import ToDoListInstance from "./to-do-list.model";

let toDoList = [];

const ToDoReducer = Rx.Observable.merge(
  ToDoListActions.init.map(ToDoListInstance.init.bind(ToDoListInstance)),
  ToDoListActions.addItem.map(ToDoListInstance.addItem.bind(ToDoListInstance)),
  ToDoListActions.requestTodos.map(ToDoListInstance.requestTodos.bind(ToDoListInstance)),
  ToDoListActions.receiveTodos.map(ToDoListInstance.receiveTodos.bind(ToDoListInstance))
);

export default ToDoReducer;
