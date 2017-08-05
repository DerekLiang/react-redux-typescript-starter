import * as constants from '../constants';

export interface NextLanguage {
    type: constants.NEXT_LANGUAGE;
}

export type LanguageAction = NextLanguage;

export function nextLanguage(): NextLanguage {
    return {
        type: constants.NEXT_LANGUAGE
    };
}