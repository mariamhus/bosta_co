export const statusHandler = (status: string) => {
    switch (status) {
      case "TICKET_CREATED":
        return {
          progress:0,
          color:"red",
        }
  
        case "PACKAGE_RECEIVED":
        return {
          progress:44,
          color:"yellow",
        }

        case "CANCELLED":
        return {
          progress:100,
          color:"red",
        }

      case "WAITING_FOR_CUSTOMER_ACTION":
        return {
          progress:70,
          color:"yellow",
        } 
  
      case "DELIVERED":
        return {
          progress:100,
          color:"green",
        } 
  
      default:
        return {
          progress:0,
          color:"grey",
        } 
    }
  };