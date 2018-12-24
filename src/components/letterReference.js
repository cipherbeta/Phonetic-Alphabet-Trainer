import React, { Component } from 'react';
import alphabet from '../helpers/alphabet';
import { connect } from 'react-redux';
import posed, { PoseGroup } from 'react-pose';

const H1 = posed.h1({
    enter: {
        opacity: 1,
        y: 0,
        transition: { duration: 150, delay: 50 }
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: { duration: 150 }
    }
})

class LetterReference extends Component {
    state = {
        showingWord: false,
        oldWord: '',
        currentLetter: null,
        wasCorrect: false
    }

    componentDidMount() {
        if(!this.state.currentLetter){
            this.setState({currentLetter: alphabet[this.props.currentLetter].letter});
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState({showingWord: true, oldWord: alphabet[prevProps.currentLetter].code})
            setTimeout(() => {
                this.setState({showingWord: false, currentLetter: alphabet[this.props.currentLetter].letter})
            }, 1000)
        }
        
    }

    render(){
        return(
            <PoseGroup>
                {
                    this.state.showingWord
                    ?<H1 className="wordReference" key="word" style={{color: (this.props.inputWasCorrect ? 'rgb(73, 250, 38)' : 'rgb(250, 38, 38)')}}>{this.state.oldWord}</H1>
                    :<H1 className="letterReference" key="letter">{this.state.currentLetter}</H1>
                }
                
            </PoseGroup>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        currentLetter: state.currentLetter,
        inputWasCorrect: state.inputWasCorrect
    }
}

export default connect(mapStateToProps)(LetterReference);