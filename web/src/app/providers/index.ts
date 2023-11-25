import compose from "compose-function";
import {withRouter} from "./with-router";
import {withReduxStore} from "./with-redux-store";

export const withProviders = compose(withRouter, withReduxStore);