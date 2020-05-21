import React, { Component } from 'react';
import { connect } from 'react-redux'; //conexao com redux
import { bindActionCreators, Dispatch } from 'redux';

import { Repository, RepositoriesTypes } from '../../store/ducks/repositories/types';
import { AplicationState } from '../../store/'
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

interface StateProps {
    //Mapear o tipo das informações que vem mapStateToProps 
    repositories: Repository[]
}

interface DispatchProps {
    //Mapear as funções que vem do mapsDispatchToProps do redux
    loadRequest(): void;
}


//unindo tudo em um unico type
type Props = StateProps & DispatchProps 

class RepositoryList extends Component<Props> { //Propriedades para que o código daq de dentro tenha acesso as interfaces
    componentDidMount() {
        const { loadRequest } = this.props;
        loadRequest();
    }

    render() {
        
        const { repositories } = this.props;

        return (
            <ul>
                {repositories.map(repository => <li>{repository.name}</li> )}
            </ul>
        );
    }
} 

const mapStateToProps = (state: AplicationState) => ({
    repositories: state.repositories.data
});

const mapsDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators( RepositoriesActions , dispatch)

export default connect(mapStateToProps, mapsDispatchToProps)(RepositoryList);