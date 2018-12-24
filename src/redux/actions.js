import { 
    RESET_COUNTER,
    HANDLE_USER_CODE_INPUT,
    SUBMIT_USER_CODE_INPUT,
    CHANGE_LETTER_PROGRESSION_MODE
} from './constants';

export const resetCounter = () => ({ type: RESET_COUNTER });
export const handleUserCodeInput = text => ({ type: HANDLE_USER_CODE_INPUT, payload: text });
export const submitUserCodeInput = () => ({ type: SUBMIT_USER_CODE_INPUT });
export const changeLetterProgressionMode = number => ({ type: CHANGE_LETTER_PROGRESSION_MODE, payload: number });