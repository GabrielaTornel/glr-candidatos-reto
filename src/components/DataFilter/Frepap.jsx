import { dataCongressmen } from '../../data/data-congressmen';
import { filterByBancada } from '../../helpers/getCongress';
import { ItemsListCongress } from '../ItemsListCongress';

export const DataFrepap = () => {
  const filterFrepap = filterByBancada(dataCongressmen, "Frepap")
  console.log(filterFrepap);
    return (
      <>
        <div className="container-card">
          <div className="card">
            {filterFrepap.map(({ fullName, bancada, region }, id) => {
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
