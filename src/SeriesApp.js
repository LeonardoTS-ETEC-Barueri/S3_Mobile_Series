import React from 'react';
import Router from './Router';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import rootReducer from './reducers/';

const myRouterStore = createStore(rootReducer);
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