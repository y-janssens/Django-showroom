import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Bounce from "react-reveal/Bounce";
import './styles/index.css'

function Home() {
  return (
    <div id="showcase">

    <div id="content">

        <div className="wrap" id="th_2">
            <span className="wrap_title" id="wrap_title_2">Fiches de chantier</span>
            <div className="fiche_icon_bg" id="fiche_icon_bg_2">✎</div> 
            <Link className="thumbnail" to="/fiches"><img className="showroom_thumb" src="/static/images/doc-icon.png" alt="" /></Link>
        </div>

        <div className="wrap" id="th_1">
            <span className="wrap_title" id="wrap_title_1">Devis</span>
            <div className="fiche_icon_bg" id="fiche_icon_bg_1">✎</div> 
            <Link className="thumbnail" to="/devis"><img className="showroom_thumb" src="/static/images/doc-icon.png" alt="" /></Link>
        </div>  

        <div className="wrap" id="th_3">
            <span className="wrap_title" id="wrap_title_3">Factures</span>
            <div className="fiche_icon_bg" id="fiche_icon_bg_3">✎</div> 
            <Link className="thumbnail" to="/factures"><img className="showroom_thumb" src="/static/images/doc-icon.png" alt="" /></Link>
        </div>

        <div className="wrap" id="th_4">
            <span className="wrap_title" id="wrap_title_4">Clients</span>
            <div className="fiche_icon_bg" id="fiche_icon_bg_4">✎</div> 
            <Link className="thumbnail" to="/clients"><img className="showroom_thumb" src="/static/images/doc-icon.png" alt="" /></Link>
        </div>
    </div>

</div>
  );
}

export default Home;
