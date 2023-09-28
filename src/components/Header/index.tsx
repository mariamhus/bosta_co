import React from 'react'
import { Link } from 'react-router-dom';
// import { useAppSelector } from '../../stores/hooks';
// import { RootState } from '../../stores/store';
import { translate } from "../../i18next";
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { setLanguage } from '../../slice/lang_slice';
import englishLogo from "../../assets/bostaLogo.webp"
// import LanguageSwicher from "../LanguageSwicher"
function Main() {
  const { language } = useAppSelector((state) => state.lang);
  const dispatch = useAppDispatch()
  // console.log({language})
    const listHeader = ["home","prices","contact","follow","login"];

    return (
    <div className="bg-white py-4">
      {/* <LanguageSwicher/> */}
            <div className="container mx-auto">
            <div className="flex justify-center text-center">
              <div className='w-14'>

      <img src={englishLogo} alt='Bosta' />
              </div>
      <button className='' onClick={()=>dispatch(setLanguage(language=='AR'?'EN':'AR'))}>{language=='AR'?'EN':language}</button>
              {listHeader.map((item,index:number) => {
                return (
                  <Link to={`/${item}`} key={index}>
                    <div className="px-4">
                      {/* <p className="text-white capitalize">{translate(item.toString(),language)}</p> */}
                      <p className="text-red-700 font-bold">{translate(item,language)}</p>

                    </div>
                  </Link>
                );
              })}
            </div>
        </div>
    </div>
  );
}

export default Main
