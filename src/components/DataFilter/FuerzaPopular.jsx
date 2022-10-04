import { dataCongressmen } from '../../data/data-congressmen';
import { filterByBancada } from '../../helpers/getCongress';
import { ItemsListCongress } from '../ItemsListCongress';

export const DataFuerzaPopular = () => {
  const filterFuerzaPopular= filterByBancada(dataCongressmen, "Fuerza Popular")
    return (
      <>
        <div className="container-card">
          <div className="card">
            {filterFuerzaPopular.map(({ fullName, bancada, region }, id) => {
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
