import React from 'react';
import Router from './Router';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import rootReducer from './reducers';

import reduxThunk from 'redux-thunk';

const myRouterStore = createStore(rootReducer, applyMiddleware(reduxThunk));
    // Todas as áreas que são acessadas pelo Router terão acesso à esse Store.

const SeriesApp = (prop) => {

    // O "Router" vai tratar todos os redirecionamentos da aplicação.
    return (
        <Provider store={ myRouterStore }>
            <Router />
        </Provider>
        
    );

};

export default SeriesApp;