//AQ VAI O REDUCER
import { Reducer } from 'redux'; //VARIAVEL DE TYPAGEM
import { RepositoriesState, RepositoriesTypes } from './types'; //IMPORTANDO O ESTADO DOS REPOS


const INITIAL_STATE: RepositoriesState = {
    data: [],
    error: false,
    loading: false,
}

//Inicializando o REDUCER
const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RepositoriesTypes.LOAD_REQUEST:
            return { ...state, loading: true }; //SE FOR REQ, VOU COPIAR TODO O ESTADO E DAR LOADING TRUE
        case RepositoriesTypes.LOAD_SUCCES:
            return { ...state, loading: false, error: false, data: action.payload.data } //action.payload.data BUSCANDO O CONTEUDO E ARMAZENANDO EM DATA
        case RepositoriesTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        default:
            return state;
    }
}
/*
    'Reducer' recebe um parametro, para saber o formato que vai manipular os dados
*/

export default reducer;
