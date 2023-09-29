import React from "react";
import { translate } from "../../i18next";
import { useAppSelector } from "../../stores/hooks";
// style={{direction:"rtl"}}
function Main() {
  const { language } = useAppSelector((state) => state.lang);

  return (
    <div className="flex flex-col gap-3 max-w-sm sm:max-h-min w-full lg:max-w-full lg:flex">
      <p className="ml-6 text-left" >Shipping address</p>
      <div className="border-r border-b border-l rounded-sm border-gray-300  lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="flex w-full border-r p-5 items-center border-b border-l  border-gray-300  lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r">
        <div className="w-1/2">
            <img className="w-full" src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div className="items-start rtl:items-end rounded-sm p-4 w-full flex flex-col justify-between">
          <p className="font-bold mx-2">{translate("havingAnIssue",language)}</p>
          <button className="bg-red-600 max-w-max py-2 px-4 rounded-xl text-white">
          {translate("report",language)}</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
