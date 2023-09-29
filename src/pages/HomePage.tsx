import { useEffect, useState } from "react";
import Shipping from "./Shipping";
import OrderDetails from "../components/OrderDetails";
import Address from "../components/Address";
import axios from "axios";
import { Shipment, PackageState } from "../types/types";

function HomePage() {
  const [shippingOrder, setShippingOrder] = useState<Shipment>({} as Shipment);
  const [PackageDetails, setPackageDetails] = useState<PackageState[]>([]);
  useEffect(() => {
    (async () => {
      const result = await axios.get(
        "https://tracking.bosta.co/shipments/track/2259635"
      );
      setShippingOrder(result?.data);
      setPackageDetails(result?.data?.TransitEvents);
      console.log({ result });
    })();
  }, []);
  console.log(shippingOrder);

  return (
    <div className="flex flex-col space-y-5">
      <Shipping OrderData={shippingOrder} />
      <div className="flex lg:flex-row gap-2 lg:items-baseline md:flex-col md:items-center sm:flex-col sm:items-center">
        <OrderDetails packageDetails={PackageDetails} />
        <Address />
      </div>
    </div>
  );
}

export default HomePage;
