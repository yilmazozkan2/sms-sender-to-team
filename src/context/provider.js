import React from "react";
import { Provider } from "react-redux";
import {createStore} from 'redux';
import reducers from './reducers.js';
import initialState from './store.js';


export default function MyProvider({children}) {
    const store = createStore(reducers, initialState )
    return <Provider store={store}>{children}</Provider> 
}