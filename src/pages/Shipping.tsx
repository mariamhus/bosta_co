import StatusBar from "../components/StatusBar";
import { Shipment } from "../types/types";

function Shipping(props:{
  OrderData:Shipment;
}) {
  return (
      <div className="outline outline-gray-100 rounded-md w-full p-5   ">
        <div className="flex flex-row justify-between  flex-wrap sm:p-0 ">
          <div className="flex flex-col">
            <div className="font-thin text-gray-400 whitespace-wrap">
              Tracking Number {props?.OrderData?.TrackingNumber}
            </div>
            <div className="font-bold text-red-600 whitespace-wrap break-words">
              {props?.OrderData?.CurrentStatus?.state}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-thin text-gray-400">
              Latest Update
            </p>
            <div className="font-bold whitespace-wrap">
              {new Date(props?.OrderData?.CurrentStatus?.timestamp).toLocaleString()}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-thin text-gray-400">Provider</p>
            <div className="font-bold whitespace-wrap">{props?.OrderData?.provider}</div>
          </div>
          <div className="flex flex-col whitespace-wrap">
            <p className="font-thin text-gray-400">Promised Date</p>
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
