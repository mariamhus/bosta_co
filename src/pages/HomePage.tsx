import { useEffect, useState } from "react";
import Shipping from './Shipping';
import OrderDetails from "../components/OrderDetails"
import Address from "../components/Address";
import axios from "axios";
import { Shipment, PackageState  } from "../types/types";

function HomePage() {
  const [shippingOrder, setShippingOrder] = useState<Shipment>( {} as Shipment);
  const [PackageDetails, setPackageDetails] = useState<PackageState[]>([])
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "https://tracking.bosta.co/shipments/track/7234258"
      );
      setShippingOrder(result?.data);
      setPackageDetails(result?.data?.TransitEvents)
      console.log({ result });
    })();
  }, []);
  console.log(shippingOrder);

  return (
    <div className="flex flex-col space-y-5">
      <Shipping OrderData={shippingOrder}/>
      <div className="flex space-x-3 ">
      <Address/>
      <div className="mr-5">
        <OrderDetails packageDetails={PackageDetails}/>
      </div>
      </div>
    </div>
  )
}

export default HomePage
