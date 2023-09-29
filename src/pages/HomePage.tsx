import { useEffect, useState } from "react";
import Shipping from "./Shipping";
import OrderDetails from "../components/OrderDetails";
import Address from "../components/Address";
import { Shipment, PackageState } from "../types/types";
import { store } from "../stores/store";
import { getTrackingOrders } from "../slice/bosta_slice";
import { useParams } from "react-router-dom";

function HomePage() {
  const [shippingOrder, setShippingOrder] = useState<Shipment>({} as Shipment);
  const [PackageDetails, setPackageDetails] = useState<PackageState[]>([]);
  const {id} =useParams<{ id: string }>()

  useEffect(() => {
    (async () => {
      if(!id){
        const result = await store.dispatch(getTrackingOrders(7234258))
        setShippingOrder(result.payload);
        setPackageDetails(result.payload?.TransitEvents);
      }else{
        const result = await store.dispatch(getTrackingOrders(+id))
        setShippingOrder(result.payload);
        setPackageDetails(result.payload?.TransitEvents)
      }
    })();
  }, [id]);

  return (
    <div className="flex flex-col pt-12 space-y-5">
      <Shipping OrderData={shippingOrder} />
      <div className="flex flex-wrap lg:flex-row gap-2 lg:items-baseline md:flex-col md:items-center  sm:flex-col sm:items-center">
        <OrderDetails packageDetails={PackageDetails} />
        <Address />
      </div>
    </div>
  );
}

export default HomePage;
