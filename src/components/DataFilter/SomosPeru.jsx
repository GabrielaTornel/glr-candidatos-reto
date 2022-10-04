import { dataCongressmen } from '../../data/data-congressmen';
import { filterByBancada } from '../../helpers/getCongress';
import { ItemsListCongress } from '../ItemsListCongress';

export const SomosPeru = () => {
  const filterBancada= filterByBancada(dataCongressmen, "Somos Perú")
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
