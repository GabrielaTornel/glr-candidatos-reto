import React from "react";
import { Link } from "react-router-dom";
import "./noPages.css"
export const NoPage = () => {
  return (
    <>
      <h1>404 Error Page #2</h1>
      
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
      <Link to="/">Volver al inicio</Link>
      </div>
    </>
  );
};
