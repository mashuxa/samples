import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from "redux";

import * as serviceWorker from './serviceWorker';
import {Calendar, reducers} from 'react-calendar';

const store = createStore(combineReducers({...reducers}));

ReactDOM.render(
    <Provider store={store}>
        <Calendar
            date={''}
            onChangeDay={''}
            onChangeMonth={''}
            onChangeYear={''}
            onChange={''}
        />
    </Provider>,
    document.getElementById('react-calendar'));

serviceWorker.unregister();
