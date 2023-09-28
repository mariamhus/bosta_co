import { LangAction, SET_LANGUAGE} from '../types/types';

//  set Language
export const setLanguage = (lang:string): LangAction => {
    console.log("lang ",lang)
    localStorage.setItem('language', lang);
    return {
        type: SET_LANGUAGE,
        payload: lang
    }
}