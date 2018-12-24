import React from 'react';
import alphabet from '../helpers/alphabet';
import { connect } from 'react-redux';
import store from '../redux/store';

const LetterReference = (props) => {
    console.log(alphabet[props.currentLetter]);
    return(
        <h1 className="letterReference">{alphabet[props.currentLetter].letter}</h1>
    )
}

const mapStateToProps = state => {
    return {
        currentLetter: state.currentLetter
    }
}

export default connect(mapStateToProps)(LetterReference);