
import { LanguageState } from '../types/index';
import { LanguageAction } from '../actions/language';
import { NEXT_LANGUAGE } from '../constants/index';

export function language(state: LanguageState, action: LanguageAction ): LanguageState {
    if (state === undefined) {
        return { language: 'x' };
    }

    switch (action.type) {
        case NEXT_LANGUAGE:
            return { language : 'xxxx' };
        default:
            return state;
    }
}