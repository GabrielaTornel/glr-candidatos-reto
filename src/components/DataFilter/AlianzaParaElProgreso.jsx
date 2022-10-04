import { dataCongressmen } from '../../data/data-congressmen';
import { filterByBancada } from '../../helpers/getCongress';
import { ItemsListCongress } from '../ItemsListCongress';

export const AlianzaParaElProgreso = () => {
  const filterAlianzaPP= filterByBancada(dataCongressmen, "Alianza para el Progreso")
    return (
      <>
        <div className="container-card">
          <div className="card">
            {filterAlianzaPP.map(({ fullName, bancada, region }, id) => {
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
