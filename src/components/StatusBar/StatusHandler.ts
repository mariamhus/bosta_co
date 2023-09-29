export const statusHandler = (status: string) => {
    switch (status) {
      case "TICKET_CREATED":
        return {
          progress:0,
          color:"red",
          activeStep:0,
        }
  
        case "PACKAGE_RECEIVED":
        return {
          progress:50,
          color:"yellow",
          activeStep:2,
        }

        case "CANCELLED":
        return {
          progress:100,
          color:"red",
          activeStep:4,
        }

      case "WAITING_FOR_CUSTOMER_ACTION":
        return {
          progress:75,
          color:"yellow",
          activeStep:3,
        } 
  
      case "DELIVERED":
        return {
          progress:100,
          color:"green",
          activeStep:4,
        } 
  
      default:
        return {
          progress:0,
          color:"grey",
          activeStep:0
        } 
    }
  };