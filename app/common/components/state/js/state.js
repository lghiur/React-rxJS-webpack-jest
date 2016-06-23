import Rx from "rxjs/Rx";

import createState from "./create-state";
import ToDoReducer from "app/common/components/to-do-list/js/to-do-list.reducer";

const reducer$ = Rx.Observable.merge(
  ToDoReducer
);

export default createState(reducer$);
