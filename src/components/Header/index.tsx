import { useState } from "react";
import { Link } from "react-router-dom";
import { translate } from "../../i18next";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { setLanguage } from "../../slice/lang_slice";
import BostaLogoEnglish from "../BostaLogoEnglish";
import BostaLogoArabic from "../BostaLogoArabic";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

function Main() {
  const { language } = useAppSelector((state) => state.lang);
  const dispatch = useAppDispatch();
  const [mobileMenu, setMobileMenu] = useState(false);
  const listHeader = ["home", "prices", "contact"];

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        {language === "EN" ? <BostaLogoEnglish /> : <BostaLogoArabic />}
        <div className="flex lg:flex-1">
          <a href="#" className="">
            <span className="sr-only w-5 h-5 text-red-600">Bosta</span>
          </a>
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-md p-2.5 text-gray-700 m-4"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                ></path>
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
                    <p className="text-black font-bold">
                      {translate(item, language)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900">
                {translate("follow", language)}
              </Popover.Button>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 min-w-max max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <form>
                        <span>{translate("follow", language)}</span>
                        <div className="relative w-full">
                          <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder={translate("trackingnumber",language)}
                            required
                          />
                          <button
                            type="submit"
                            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-red-600 rounded-r-lg border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none dark:bg-red-500 dark:hover:bg-red-600"
                          >
                            <svg
                              className="w-4 h-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
          <a
            href="/login"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            {translate("login", language)}
          </a>
        </div>
        <div className="m-2">
          <button
            className="text-red-600 text-base font-extrabold"
            onClick={() =>
              dispatch(setLanguage(language == "AR" ? "EN" : "AR"))
            }
          >
            {language}
          </button>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}

      {mobileMenu && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {language === "EN" ? <BostaLogoEnglish /> : <BostaLogoArabic />}
              <button
                type="button"
                onClick={() => setMobileMenu(!mobileMenu)}
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
            {mobileMenu && (
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
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
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
