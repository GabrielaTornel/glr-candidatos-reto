
import { dataCongressmen } from "../../data/data-congressmen";
import { ItemsListCongress } from "../ItemsListCongress";
export const ListTotal = () => {

  return (
    <>
      {/* {console.log(filterByRegion(infCongress, "Alianza para el Progreso"))} */}

      <div className="container-card">
        <div className="card">
          {dataCongressmen.map(({ fullName, bancada, region }, id) => {
            
            return (
              <ItemsListCongress
                key={id}
                name={fullName}
                bancada={bancada}
                region={region}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
