import { PackageState  } from "../../types/types";
import { translate } from "../../i18next";
import { useAppSelector } from '../../stores/hooks';

function Main(props:{
    packageDetails:PackageState[] ;
}) {
    const { language } = useAppSelector((state) => state.lang);
  return (
    <>
    <div className="flex flex-col mr-5 overflow-x-scroll ">
    <h3 className="ml-6 text-left font-bold text-base">{translate("OrderDetails",language)}</h3>
      <div className="">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="border rounded-lg">
            <table className="table-auto min-w-full divide-y divide-gray-200">
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
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-wrap">
                    {packageDetail?.hub? packageDetail?.hub : "_"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                    {new Date(packageDetail?.timestamp).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-wrap">
                  {new Date(packageDetail?.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-wrap">
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
