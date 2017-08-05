import { combineReducers } from 'redux';
import { enthusiasm } from './counter';
import { language } from './language';
import { MainState } from '../types/index';

export default combineReducers<MainState>({
    enthusiasm,
    language,
});