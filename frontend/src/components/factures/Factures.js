import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listFactures } from "../../actions/facturesActions";
import "../styles/devis.css"

function Factures() {
    const dispatch = useDispatch();
    const facturessList = useSelector((state) => state.facturesList);
    const { error, loading, factures } = facturessList;
  
    useEffect(() => {
      dispatch(listFactures());
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
  
          {factures.map((facture) => (
            <div key={facture.id} className="fiches_wrap">
              <Link className="fiches_crud" to="">
                <button className="fiche_delete">X</button>
              </Link>
  
              <img id="thumb_bg" src="/static/images/doc-icon.png" />
              <Link className="fiches_thumbnail" to={`/factures/${facture.id}`}>
                <div className="fiches_customer">{facture.invoice_number}</div>
                <div className="fiches_created">{facture.date.slice(0,10)}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Factures