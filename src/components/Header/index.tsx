import React, { useState } from "react";
import { Link } from "react-router-dom";
import { translate } from "../../i18next";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { setLanguage } from "../../slice/lang_slice";
import BostaLogoEnglish from "../BostaLogoEnglish";
import BostaLogoArabic from "../BostaLogoArabic";
function Main() {
  const { language } = useAppSelector((state) => state.lang);
  const dispatch = useAppDispatch();
  const [mobileMenu, setMobileMenu]=useState(false);
  const listHeader = ["home", "prices", "contact"];

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
            {language === "EN" ? (
              <BostaLogoEnglish/>
            ) : (
              <BostaLogoArabic />
            )}
        <div className="flex lg:flex-1">
          <a href="#" className="">
            <span className="sr-only w-5 h-5 text-red-600">Bosta</span>
          </a>
        <button
          className=""
          onClick={() => dispatch(setLanguage(language == "AR" ? "EN" : "AR"))}
        >
          {language}
        </button>
        <div className="lg:hidden">
        <button type="button" onClick={e=>setMobileMenu(!mobileMenu)} className="-m-2.5 rounded-md p-2.5 text-gray-700 m-4">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
        </svg>
        </button>
        </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="flex gap-4 relative">
            {listHeader.map((item, index: number) => {
              return (
                <Link to={`/${item}`} key={index}>
                  <div>
                    <p className="text-red-700 font-bold">
                      {translate(item, language)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hidden gap-2 lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/follow"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {translate("follow", language)}
            <span aria-hidden="true"></span>
          </a>
          <a
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {translate("login", language)}
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
              {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
           
  {mobileMenu&&<div className="lg:hidden" role="dialog" aria-modal="true">
    {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
    <div className="fixed inset-0 z-10"></div>
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
      {language === "EN" ? (
              <BostaLogoEnglish/>
            ) : (
              <BostaLogoArabic />
            )}
        <button type="button" onClick={e=>setMobileMenu(!mobileMenu)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {  mobileMenu && 
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
          {listHeader.map((item, index: number) => {
              return (
                <Link to={`/${item}`} key={index}>
                  <div>
                    <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {translate(item, language)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="py-6">
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
          </div>
        </div>
      </div>
       }
    </div>
  </div>}
    </header>
  );
}

export default Main;

// {listHeader.map((item, index: number) => {
//   return (
//     <Link to={`/${item}`} key={index}>
//       <div className="px-4">
//         {/* <p className="text-white capitalize">{translate(item.toString(),language)}</p> */}
//         <p className="text-red-700 font-bold">
//           {translate(item, language)}
//         </p>
//       </div>
//     </Link>
//   );
// })}
