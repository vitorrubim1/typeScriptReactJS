// Actions Types
export enum RepositoriesTypes { //enum = CONST
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
    LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}
/*
    'LOAD_REQUEST': Será a função/action que o componente irá disparar pra nesse caso 
        carregar os repositórios da API, e isso será ouvido pelo REDUX SAGA que fará a
        chamada na API e depois vai disparar o 'LOAD_SUCCCES': para êxito ou 
        'LOAD_FAILURE': para error da API.   
*/


// Data Types
export interface Repository {
    id: number
    name: string
}
/*
    Que é o formato da informação que vai estar dentro do REDUCER
*/


// State Type
export interface RepositoriesState {
    readonly data: Repository[] // 'readonly' porque o estado é imutavel e não pode ser alterado 
    readonly loading: boolean
    readonly error: boolean
}
/*
    Formato do estado que irei armazenar por esse REDUCER
*/
