import { Router, useRouterHistory } from 'react-router';
import { createHistory } from "history";
import constants from 'app/common/components/constants/js/constants';

const browserHistory = useRouterHistory(createHistory)({
  basename: constants.homeUrl
});

export default browserHistory;
