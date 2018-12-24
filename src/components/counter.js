import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';
import { resetCounter } from '../redux/actions';
import posed, { PoseGroup } from 'react-pose';

const H1 = posed.h1({
    enter: {
        y: 0,
        opacity: 1,
        transition: {duration: 100, delay: 50}
    },
    exit: {
        y: 10,
        opacity: 0,
        transition: {duration: 100}
    }
})

class Counter extends Component {
    state = {
        isHovered: false
    }

    handleUserHover = value => {
        this.setState({isHovered: value});
    }
    render(){
    return(
        <div className="counter_wrapper" onClick={()=>store.dispatch(resetCounter())} 
            onMouseEnter={()=>this.handleUserHover(true)} onMouseLeave={()=>this.handleUserHover(false)}>
        <PoseGroup>
            {this.state.isHovered
            ? <H1 className="counter" key="reset">Reset Counter</H1>
            : <H1 className="counter" key="count">{this.props.correct} / {this.props.total}</H1>
            }
            
            
        </PoseGroup>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        correct: state.correct,
        total: state.total
    }
}

export default connect(mapStateToProps)(Counter);