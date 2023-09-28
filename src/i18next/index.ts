import en from './en.json';
import ar from './ar.json';

export const translate = (key: string, language: string): string =>{
    let langData: { [key: string]: string } = {};

    if(language === 'EN'){
        langData = en;
    }else if(language === 'AR'){
        langData = ar;
    }

    return langData[key];
}