import {
    RESET_COUNTER,
    HANDLE_USER_CODE_INPUT,
    SUBMIT_USER_CODE_INPUT,
    CHANGE_LETTER_PROGRESSION_MODE
} from '../constants';

import alphabet from '../../helpers/alphabet';

let initialState = {
   trainerMode: 1, // Chooses linear progression (0) or random progression (1)
   correct: 0,
   total: 0,
   showWord: false,
   inputWasCorrect: false,
   currentLetter: 0,
   userCodeInput: ''
}

let alphabetLoopHandler = s => {
    if(s.trainerMode === 0){
        if(s.currentLetter === 25){
            return 0;
        } else {
            return s.currentLetter + 1;
        }
    } else if (s.trainerMode === 1){
        return Math.floor(Math.random() * (26 - 0));
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_LETTER_PROGRESSION_MODE:
            console.log("changing prog mode");
            return {...state, trainerMode: action.payload}
        // Resets the counter that shows correct answers out of total.
        case RESET_COUNTER:
            console.log("Counters reset.");
            return {...state, correct: 0, total: 0};
        // Handles the user's controlled input.
        case HANDLE_USER_CODE_INPUT:
            return {...state, userCodeInput: action.payload};
        // Submits input and checks if user input matches the proper code.
        case SUBMIT_USER_CODE_INPUT:
            console.log("submitted")
            if(state.userCodeInput.toLowerCase() === alphabet[state.currentLetter].code){
                console.log("matches, " + state.userCodeInput.toLowerCase() + ' ' + alphabet[state.currentLetter].code);
                return {
                    ...state, 
                    correct: state.correct + 1, 
                    total: state.total + 1, 
                    currentLetter: alphabetLoopHandler(state), 
                    userCodeInput: '' 
                }
            } else {
                console.log("doesn't match");
                return {
                    ...state, 
                    total: state.total + 1, 
                    currentLetter: alphabetLoopHandler(state), 
                    userCodeInput: '' }
            }
        
        // Returns the state as-is.
        default:
            return state;
   }
}

export default rootReducer;