import StatusBar from "../components/StatusBar";
import { Shipment } from "../types/types";

function Shipping(props:{
  OrderData:Shipment;
}) {
  return (
    <div>
      <div className="outline p-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="font-thin text-gray-400">
              Tracking Number {props?.OrderData?.TrackingNumber}
            </div>
            <div className="font-bold text-red-600">
              {props?.OrderData?.CurrentStatus?.state}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-thin text-gray-400">
              Latest Update
            </p>
            <div className="font-bold">
              {new Date(props?.OrderData?.CurrentStatus?.timestamp).toLocaleString()}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-thin text-gray-400">Provider</p>
            <div className="font-bold">{props?.OrderData?.provider}</div>
          </div>
          <div className="flex flex-col">
            <p className="font-thin text-gray-400">Promised Date</p>
            <div className="font-bold">{new Date(props?.OrderData?.PromisedDate).toLocaleString()}</div>
          </div>
        </div>
        <div className=" w-full py-3 border-b-1 border-t border-slate-400 dark:border-darkmode-400"></div>
        <div className="m-8 py-3">
          <StatusBar status={props?.OrderData?.CurrentStatus?.state}/>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
