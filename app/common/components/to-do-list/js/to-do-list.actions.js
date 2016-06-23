import Rx from "rxjs/Rx";

const ToDoListActions = {
  addItem: new Rx.Subject,
  init: new Rx.Subject,
  requestTodos: new Rx.Subject,
  receiveTodos: new Rx.Subject
};

export default ToDoListActions;
