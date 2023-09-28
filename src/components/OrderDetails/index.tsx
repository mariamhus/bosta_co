import React from 'react'
import { PackageState  } from "../../types/types";
import { translate } from "../../i18next";
import { useAppSelector } from '../../stores/hooks';

function Main(props:{
    packageDetails:PackageState[] ;
}) {
    const { language } = useAppSelector((state) => state.lang);
  return (
    <>
    <div className="flex flex-col">
    <h3 className="ml-6 text-left">Order Details</h3>
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    {translate("hub",language)}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                    {translate("date",language)}
                    
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                    {translate("time",language)}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    {translate("details",language)}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {props?.packageDetails?.map((packageDetail,index)=>(
                <tr key={index}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {packageDetail?.hub? packageDetail?.hub : "_"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {new Date(packageDetail?.timestamp).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  {new Date(packageDetail?.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {packageDetail?.state}
                    {packageDetail?.reason? <p className='text-sm text-red-600'>{packageDetail?.reason}</p> : null}
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Main
