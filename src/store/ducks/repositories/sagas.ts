import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { loadSucces, loadFailure } from './actions'

export function* load(){
    try{
        const response = yield call(api.get, 'users/vitorrubim1/repos');

        //se tudo deu certo realizo o put
        yield put(loadSucces(response.data));
    }catch (err){
        yield put(loadFailure());
    }
}