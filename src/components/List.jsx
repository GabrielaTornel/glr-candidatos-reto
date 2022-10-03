import React, { useState } from "react";
import { dataCongressmen } from "../data/data-congressmen";
import { ItemsListCongress } from "./ItemsListCongress";

export const List = () => {
  const [infCongress, setInfCongress] = useState(dataCongressmen);
  
  return (
    <>
      {
        infCongress.map(({fullName, bancada,region}, id) => {
          return (
            
            <ItemsListCongress
              key={id} 
              name={fullName}
              bancada={bancada}
              region={region}

              />
            
        )
        })
      }
    </>
  )
};
