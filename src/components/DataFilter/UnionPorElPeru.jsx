import React from 'react'
import { dataCongressmen } from '../../data/data-congressmen';
import { filterByBancada } from '../../helpers/getCongress';
import { ItemsListCongress } from '../ItemsListCongress';

export const UnionPorElPeru = () => {
  const filterUnionPorElPeru= filterByBancada(dataCongressmen, "Unión por el Perú")
    return (
      <>
        <div className="container-card">
          <div className="card">
            {filterUnionPorElPeru.map(({ fullName, bancada, region }, id) => {
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
