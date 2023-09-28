import React from 'react'
import { Link } from 'react-router-dom';
// import { useAppSelector } from '../../stores/hooks';
// import { RootState } from '../../stores/store';
// import { translate } from "../../i18next";
// import LanguageSwicher from "../LanguageSwicher"
function Main() {
  // const { language } = useAppSelector((state: RootState) => state.lang);

  // console.log({language})
    const listHeader = ["home","prices","contact","follow","login"];

    return (
    <div className="bg-white py-4">
      {/* <LanguageSwicher/> */}

            <div className="container mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 fill-red-700' />
            <div className="flex flex-row">
              {listHeader.map((item,index:number) => {
                return (
                  <Link to={`/${item}`} key={index}>
                    <div className="px-4">
                      {/* <p className="text-white capitalize">{translate(item.toString(),language)}</p> */}
                      <p className="text-red-700 font-bold">{item}</p>

                    </div>
                  </Link>
                );
              })}
            </div>
        </div>
    </div>
  );
};

export default Main
