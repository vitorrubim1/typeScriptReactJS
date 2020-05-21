import { action } from 'typesafe-actions'; //PARA SER MAIS LEGIVEL E MENOS VERBOSO
import { RepositoriesTypes, Repository } from './types';

/*
    Actions do REDUX em si, e as actions são funções que disparam os Types
*/


//Exportando as Actions Creators

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSucces = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCES, {data});  
/*
    Recebe os dados da API, Quando o saga fizer a chamada na API e tiver sucesso na req
    trazendo os dados no corpo da req, ele vai enviar os dados pro LOAD_SUCCES, que o
    REDUCER vai ouvir e atualizar as informações no estado do './types'.
*/


export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);  
