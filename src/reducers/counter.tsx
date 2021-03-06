import { EnthusiasmAction } from '../actions/enthusiasm';
import { EnthusiasmState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(state: EnthusiasmState, action: EnthusiasmAction): EnthusiasmState {
    if (state === undefined) {
        return {
            enthusiasmLevel: 1,
            languageName: 'TypeScript',
        };
    }

    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;

    }
}