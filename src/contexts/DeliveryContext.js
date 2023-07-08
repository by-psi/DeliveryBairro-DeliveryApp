import { createContext, useState, useEffect } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Delivery } from "../models";

export const DeliveryContext = createContext({});

function DeliveryContextProvider({ children }) {
  const [user, setUser] = useState();
  const [delivery, setDelivery] = useState();
  
  const sub = user?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
  }, []);

  useEffect(() => {
    if (!sub) {
      return;
    }
    // fetch Delivery and filter by adminSub
    DataStore.query(Delivery, (d) => d.TokenADM.eq(sub)).then(
      (deliveries) => setDelivery(deliveries[0])
    );
  }, [sub]);

  console.log(delivery?.id);

  return (
    <DeliveryContext.Provider value={{ sub, delivery, setDelivery }}>
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryContextProvider;