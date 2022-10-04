import React from "react";
import {
  AlianzaParaElProgreso,
  FrenteAmplio,
  DataFrepap,
  DataFuerzaPopular,
  PartidoMorad,
  PodemosPeru,
  SomosPeru,
  UnionPorElPeru,
  ListTotal,
} from "./DataFilter";
import "./items.css";
export const ToogleTabs = () => {
  const [changeState, setTChangeState] = React.useState(0);
  const toggleTab = (element) => {
    setTChangeState(element);
  };
  return (
    <>
      <section className="menu-items">
        <div className="container-tabs">
          <div className="bloc-tabs">
            <button
              className={changeState === 0 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(0)}
            >
              <img className="img-logo"  src="../../public/partidos.png" alt="item" width={60} />
              Todos los Partidos
            </button>
            <button
              className={changeState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              <img src="../../public/Lima.png" alt="item" width={60} />
              Alianza para el Progreso
            </button>
            <button
              className={changeState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              <img
                src={"../../public/fuerzapopular-partidos-congreso-.webp"}
                alt="item"
                width={60}
              />
              Fuerza Popular
            </button>

            <button
              className={changeState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              <img src={"../../public/union_peru.png"} alt="item" width={60} />
              Unión por el Perú{" "}
            </button>
            <button
              className={changeState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              <img src={"../../public/somos_peru.png"} alt="item" width={70} />
              Somos Perú{" "}
            </button>
            <button
              className={changeState === 5 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(5)}
            >
              <img
                src={"../../public/Podemos_Peru.png"}
                alt="item"
                width={60}
              />
              Podemos Perú
            </button>
            <button
              className={changeState === 6 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(6)}
            >
              <img
                src={"../../public/frente_amplio.png"}
                alt="item"
                width={60}
              />
              Frente Amplio
            </button>
            <button
              className={changeState === 7 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(7)}
            >
              <img src={"../../public/frepap.png"} alt="item" width={100} />
              Frepap
            </button>
            <button
              className={changeState === 8 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(8)}
            >
              <img
                src={"../../public/partidomorado.png"}
                alt="item"
                width={50}
              />
              Partido morado
            </button>
          </div>
          <div className="containerItems">
            <div className="content-tabs">
              <div
                className={
                  changeState === 0 ? "content  active-content" : "content"
                }
              >
                <ListTotal />
              </div>
              <div
                className={
                  changeState === 1 ? "content  active-content" : "content"
                }
              >
                <AlianzaParaElProgreso />
              </div>
              <div
                className={
                  changeState === 2 ? "content  active-content" : "content"
                }
              >
                <DataFuerzaPopular />
              </div>
              <div
                className={
                  changeState === 3 ? "content  active-content" : "content"
                }
              >
                <UnionPorElPeru />
              </div>
              <div
                className={
                  changeState === 4 ? "content  active-content" : "content"
                }
              >
                <SomosPeru />
              </div>
              <div
                className={
                  changeState === 5 ? "content  active-content" : "content"
                }
              >
                <PodemosPeru />
              </div>
              <div
                className={
                  changeState === 6 ? "content  active-content" : "content"
                }
              >
                <FrenteAmplio />
              </div>
              <div
                className={
                  changeState === 7 ? "content  active-content" : "content"
                }
              >
                <DataFrepap />
              </div>
              <div
                className={
                  changeState === 8 ? "content  active-content" : "content"
                }
              >
                <PartidoMorad />
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
    </>
  );
};
