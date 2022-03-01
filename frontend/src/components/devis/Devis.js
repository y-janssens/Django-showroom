import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listDevis } from "../../actions/devisActions";
import "../styles/devis.css"

function Devis() {
  const dispatch = useDispatch();
  const devisList = useSelector((state) => state.devisList);
  const { error, loading, devis } = devisList;

  useEffect(() => {
    dispatch(listDevis());
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

        {devis.map((deviagal) => (
          <div key={deviagal.id} className="fiches_wrap">
            <Link className="fiches_crud" to="">
              <button className="fiche_delete">X</button>
            </Link>

            <img id="thumb_bg" src="/static/images/doc-icon.png" />
            <Link className="fiches_thumbnail" to={`/devis/${deviagal.id}`}>
              <div className="fiches_customer">{deviagal.estimate_number}</div>
              <div className="fiches_created">{deviagal.date.slice(0,10)}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Devis