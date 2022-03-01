import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listFiches } from "../../actions/fichesActions";
import "../styles/fiches.css";

function Fiches() {
  const dispatch = useDispatch();
  const fichesList = useSelector((state) => state.fichesList);
  const { error, loading, fiches } = fichesList;

  useEffect(() => {
    dispatch(listFiches());
  }, [dispatch]);

  return (
    <div id="fiches_wrapper">
      <div id="fiches_content">
        <div className="fiches_wrap_c">
          <div id="icon_bg">✎</div>
          <img id="thumb_bg" src="/static/images/doc-icon.png" />

          <a className="fiches_thumbnail" href="">
            <div className="fiches_customer_c">Ajout</div>
          </a>
        </div>

        {fiches.map((fiche) => (
          <div key={fiche.id} className="fiches_wrap">
            <Link className="fiches_crud" to="">
              <button className="fiche_delete">X</button>
            </Link>

            <img id="thumb_bg" src="/static/images/doc-icon.png" />
            <Link className="fiches_thumbnail" to={`/fiches/${fiche.id}`}>
              <div className="fiches_customer">{fiche.last_name}</div>
              <div className="fiches_created">{fiche.created.slice(0, 10)}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fiches;
