
import "./items.css"
export const ItemsListCongress = (props) => {
  return (
    <>
      <div className="card border-danger mb-3">
        <div className="card text-white bg-secondary mb-3" >
          <h3 className="card-header"> {props.name}</h3>
          <div className="card-body">
            <h5 className="card-title"> {props.bancada}</h5>
            <p className="card-text"> <strong className="strong-class">Región:</strong> {props.region}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
