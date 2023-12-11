import {createStore, applyMiddleware,compose} from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

const composerEnhacer= window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore (
    rootReducer,
    composerEnhacer(applyMiddleware(thunkMiddleware))
);

export default store;