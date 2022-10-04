import { dataCongressmen } from '../../data/data-congressmen';
import { filterByBancada } from '../../helpers/getCongress';
import { ItemsListCongress } from '../ItemsListCongress';

export const PodemosPeru = () => {

  const filterBancada= filterByBancada(dataCongressmen, "Podemos Perú")
    return (
      <>
        <div className="container-card">
          <div className="card">
            {filterBancada.map(({ fullName, bancada, region }, id) => {
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
}
