import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import ipodsReducer from "./ipods-reducer";

const rootReducer  = combineReducers({
    ipods: ipodsReducer,
})


export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))