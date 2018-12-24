import React from 'react';
import { connect } from 'react-redux';
import { changeLetterProgressionMode } from '../redux/actions';
import store from '../redux/store';


const Header = props => (
    <header className="header">
        <h1>NATO/IRSA<br/><small>alphabet trainer</small></h1>
        <div className="header--navigation">
            <button onClick={()=>store.dispatch(changeLetterProgressionMode(0))} className={props.trainerMode === 0 ? "active" : ""}>Linear</button>
            <button onClick={()=>store.dispatch(changeLetterProgressionMode(1))}className={props.trainerMode === 1 ? "active" : ""}>Random</button>
        </div>
    </header>
)

const mapStateToProps = state => {
    return {
        trainerMode: state.trainerMode
    }
}

export default connect(mapStateToProps)(Header);