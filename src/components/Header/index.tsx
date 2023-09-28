import React from "react";
import { Link } from "react-router-dom";
import { translate } from "../../i18next";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { setLanguage } from "../../slice/lang_slice";
import BostaLogoEnglish from "../BostaLogoEnglish";
import BostaLogoArabic from "../BostaLogoArabic";
function Main() {
  const { language } = useAppSelector((state) => state.lang);
  const dispatch = useAppDispatch();
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
        </div>
       
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
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

      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Bosta</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <a
                  href="/follow"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {translate("follow", language)}
                </a>
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {translate("login", language)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
