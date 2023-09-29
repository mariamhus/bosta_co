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
  
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get(
  //       "https://tracking.bosta.co/shipments/track/2259635"
  //     );
  //     setShippingOrder(result?.data);
  //     setPackageDetails(result?.data?.TransitEvents);
  //     // console.log({ result });
  //   })();
  // }, []);
  // // console.log(shippingOrder);
const {id} =useParams<{ id: string }>()

  useEffect(() => {
    (async () => {
      if(!id){
        const result = await store.dispatch(getTrackingOrders(7234258))
        console.log("inside 2nd use ", result.payload);
        setShippingOrder(result.payload);
        setPackageDetails(result.payload?.TransitEvents);
      }else{
        const result = await store.dispatch(getTrackingOrders(+id))
        console.log("inside get id ", result.payload);
        setShippingOrder(result.payload);
        setPackageDetails(result.payload?.TransitEvents)
      }
    })();
  }, []);

  console.log(PackageDetails)

  return (
    <div className="flex flex-col pt-12 space-y-5">
      <Shipping OrderData={shippingOrder} />
      <div className="flex lg:flex-row gap-2 lg:items-baseline md:flex-col md:items-center sm:flex-col sm:items-center">
        <OrderDetails packageDetails={PackageDetails} />
        <Address />
      </div>
    </div>
  );
}

export default HomePage;
