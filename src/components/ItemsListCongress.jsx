import React from "react";

export const ItemsListCongress = (props) => {
  return (
    <>
      <div className="card text-white bg-primary mb-3">
        <div className="card text-white bg-dark mb-3" >
          <div className="card-header">{props.name}</div>
          <div className="card-body">
            <h5 className="card-title">{props.bancada}</h5>
            <p className="card-text">{props.region}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
