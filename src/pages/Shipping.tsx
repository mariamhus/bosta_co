import React, {useEffect,useState} from 'react'
import StatusBar from "../components/StatusBar";
import { store } from '../stores/store';
import { getTrackingOrders } from '../slice/bosta_slice';
import {Shipment} from "../types/types"
import axios from 'axios'

function Shipping() {
  const [trackingNumber, setTrackingNumber] = useState(7234258)

  const [shippingOrder,setShippingOrder ] = useState<Shipment>()
//   useEffect(()=>{
// (async()=>{
//   const result = await store.dispatch(getTrackingOrders());
//   console.log({result})
//   // if(result.meta.requestStatus==="fulfilled"){
//   // }
// })
//   },[])

  useEffect(()=>{
    (async ()=>{
      const result = await axios.get('https://tracking.bosta.co/shipments/track/7234258');
      // setRes(result)
      setShippingOrder(result?.data)
      console.log({result})

    })();
  },[])
  console.log(shippingOrder)

  return (
    <div>

      Tracking Orders & Shipping
      {/* <StatusBar/> */}
    </div>
  )
}

export default Shipping;
