//CONFIGURAÇÃO DO ESTADO DA APLICAÇÃO DE UMA FORMA GLOBAL

import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface AplicationState {
    repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<AplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
