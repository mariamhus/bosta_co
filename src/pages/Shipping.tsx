import StatusBar from "../components/StatusBar";
import { translate } from "../i18next";
import { useAppSelector } from "../stores/hooks";
import { Shipment } from "../types/types";

function Shipping(props:{
  OrderData:Shipment;
}) {
  const { language } = useAppSelector((state) => state.lang);

  return (
      <div className="outline outline-gray-100 rounded-md w-full p-5">
        <div className="md:flex md:flex-row md:justify-between md:text-start flex-wrap sm:p-0 sm:block sm:text-center ">
          <div className="flex flex-col">
            <div className="font-thin text-gray-400 whitespace-wrap">
              {translate("Tracking Number",language)} {props?.OrderData?.TrackingNumber}
            </div>
            <div className="font-bold text-red-600 whitespace-wrap break-words">
              {props?.OrderData?.CurrentStatus?.state}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-thin text-gray-400">
            {translate("Latest Update",language)}
            </p>
            <div className="font-bold whitespace-wrap">
              {new Date(props?.OrderData?.CurrentStatus?.timestamp).toLocaleString()}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-thin text-gray-400">{translate("Provider",language)}</p>
            <div className="font-bold whitespace-wrap">{props?.OrderData?.provider}</div>
          </div>
          <div className="flex flex-col whitespace-wrap">
            <p className="font-thin text-gray-400">{translate("Promised Date",language)}</p>
            <div className="font-bold whitespace-wrap">{new Date(props?.OrderData?.PromisedDate).toLocaleString()}</div>
          </div>
        </div>
        <div className="md:m-8 py-3 my-8">
          <StatusBar status={props?.OrderData?.CurrentStatus?.state}/>
        </div>
      </div>
  );
}

export default Shipping;
