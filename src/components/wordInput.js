import React, { Component } from 'react';
import alphabet from '../helpers/alphabet';
import { connect } from 'react-redux';
import { handleUserCodeInput, submitUserCodeInput } from '../redux/actions';
import store from '../redux/store';

class WordInput extends Component {
    handleCodeSubmit = event => {
        event.stopPropagation();
        event.preventDefault();

        store.dispatch(submitUserCodeInput());
    }
    render(){
        return(
        <form onSubmit={e=>this.handleCodeSubmit(e)}>
            <input type="text" placeholder="Type Code Word" className="wordInput" maxLength={10}
            value={this.props.userCodeInput} onChange={e=>store.dispatch(handleUserCodeInput(e.target.value))}/>
            <button className="hidden" type="submit"/>
        </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        userCodeInput: state.userCodeInput,
    }
}

export default connect(mapStateToProps)(WordInput);