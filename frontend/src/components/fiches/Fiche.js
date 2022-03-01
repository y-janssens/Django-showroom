import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { listFiche } from "../../actions/fichesActions";
import "../styles/fiche_display.css";

function Fiche(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ficheList = useSelector((state) => state.ficheList);
  const { error, loading, fiche } = ficheList;

  useEffect(() => {
    dispatch(listFiche(id));
  }, [dispatch, id]);
  
  return (
    
    

    <div id="fiche_content">
        <div id="fiche_header">
        <div id="fiche_title">Fiche de chantier {fiche.last_name}</div>
        </div>

        <div id="row1">
            <div id="fiche_logo"></div>

            <div id="sub_row1_1">
                <div className="infos">Nom du client: <div className="infos_content">{fiche.first_name} {fiche.last_name}</div></div>
                <div className="infos">Adresse: <div className="infos_content"><a href={`https://www.google.fr/maps/place/${fiche.adress}+${fiche.post_code}+${fiche.city}`} target="_blank">{fiche.adress}</a></div></div>
                <div className="infos">Localité: <div className="infos_content">{fiche.city}</div></div>
                <div className="infos">Code postal: <div className="infos_content">{fiche.post_code}</div> Téléphone: <div className="infos_content"><a href={`tel:${fiche.phone}`}>{fiche.phone}</a></div></div>
                <div className="infos">Commercial: <div className="infos_content"><a href="tel:"></a></div></div>
                <div className="infos">Source: <div className="infos_content">{fiche.source}</div></div>
            </div>

            <div id="sub_row1_2">
                <div className="infos">N° devis: <div className="infos_content">{fiche.invoice_number}</div></div>            
                <div className="infos">Surface toiture: <div className="infos_content">{fiche.area}m²</div></div>
                <div className="infos">Nombre de pans: <div className="infos_content">{fiche.roof}</div></div>
                <div className="infos">Hauteur à la gouttière: <div className="infos_content">{fiche.height}m</div></div>
                <div className="infos">Degré de pente: <div className="infos_content">{fiche.slant}</div></div>
            </div>
        </div>

        <div id="row2">

            <div id="sub_row2_1">
                <div className="sub_title">Traitement de charpente</div>

                <div className="infos">Accès: <div className="infos_content">{fiche.charpente_access}</div></div>
                <div className="infos">Surface: <div className="infos_content">{fiche.charpente_area}</div></div>
                <div className="infos">Hauteur de flèche: <div className="infos_content">{fiche.charpente_height}</div></div>
                <div className="infos">Traitement: <div className="infos_content">{fiche.charpente_job}</div></div>                
                <div className="infos">Encombrement: <div className="infos_content">{fiche.charpente_mess}</div></div>
                <div className="infos">Plancher: <div className="infos_content">{fiche.charpente_floor}</div></div>
            </div>

            <div id="sub_row2_2">
                <div className="sub_title">Soufflage laine de roche</div>

                <div className="infos">Accès: <div className="infos_content">{fiche.soufflage_access}</div></div>
                <div className="infos">Surface: <div className="infos_content">{fiche.soufflage_area}</div></div>
                <div className="infos">Hauteur de flèche: <div className="infos_content">{fiche.soufflage_height}</div></div>
                <div className="infos">Débarras: <div className="infos_content">{fiche.soufflage_trash}</div></div>
                <div className="infos">Encombrement: <div className="infos_content">{fiche.soufflage_mess}</div></div>
                <div className="infos">Plancher: <div className="infos_content">{fiche.soufflage_floor}</div></div>

            </div>

            <div id="sub_row2_3">
                <div className="sub_title">Thermoréflexion</div>

                <div className="infos">Accès: <div className="infos_content">{fiche.thermo_access}</div></div>
                <div className="infos">Surface: <div className="infos_content">{fiche.thermo_area}</div></div>
                <div className="infos">Hauteur de flèche: <div className="infos_content">{fiche.thermo_height}</div></div>
                <div className="infos">Débarras: <div className="infos_content">{fiche.thermo_trash}</div></div>
                <div className="infos">Encombrement: <div className="infos_content">{fiche.thermo_mess}</div></div>
                <div className="infos">Plancher: <div className="infos_content">{fiche.thermo_floor}</div></div>

            </div>

            <div id="sub_row2_4">
                <div className="sub_title">Isolation rampants</div>

                <div className="infos">Accès: <div className="infos_content">{fiche.isol_access}</div></div>
                <div className="infos">Surface: <div className="infos_content">{fiche.isol_area}</div></div>
                <div className="infos">Hauteur de flèche: <div className="infos_content">{fiche.isol_height}</div></div>
                <div className="infos">Épaisseur: <div className="infos_content">{fiche.isol_trash}</div></div>
                <div className="infos">Encombrement: <div className="infos_content">{fiche.isol_mess}</div></div>
                <div className="infos">Plancher: <div className="infos_content">{fiche.isol_floor}</div></div>

            </div>

        </div>

        <div id="row3">

            <div id="sub_row3_1">
                <div className="sub_title">Hydrofuge</div>

                <div className="infos">Type: <div className="infos_content">{fiche.hydro_type}</div></div>
                <div className="infos">Surface: <div className="infos_content">{fiche.hydro_area}</div></div>
                <div className="infos">Toiture: <div className="infos_content">{fiche.hydro_roof}</div></div>
                <div className="infos">Couleur de la tuile: <div className="infos_content">{fiche.hydro_color}</div></div>
                <div className="infos">Modèle de la tuile: <div className="infos_content">{fiche.hydro_model}</div></div>

            </div>

            <div id="sub_row3_2">
                <div className="sub_title">Faîtage / Arrêtiers</div>

                <div className="infos">Toiture: <div className="infos_content">{fiche.fait_roof}</div></div>
                <div className="infos">Longueur: <div className="infos_content">{fiche.fait_length}</div></div>
                <div className="infos">Nombre de longueurs: <div className="infos_content">{fiche.fait_length_num}</div></div>
                <div className="infos">Couleur de la tuile: <div className="infos_content">{fiche.fait_color}</div></div>
                <div className="infos">Maçonnerie: <div className="infos_content">{fiche.fait_masonry}</div></div>              

            </div>

            <div id="sub_row3_3">
                <div className="sub_title">Remontées capillaires</div>

                <div className="infos">Accès: <div className="infos_content">{fiche.cap_access}</div></div>
                <div className="infos">Longueur: <div className="infos_content">{fiche.cap_length}</div></div>
                <div className="infos">Type de mur: <div className="infos_content">{fiche.cap_type}</div></div>
                <div className="infos">Couleur du mur: <div className="infos_content">{fiche.cap_color}</div></div>
                <div className="infos">Encombrement: <div className="infos_content">{fiche.cap_mess}</div></div>

            </div>

            <div id="sub_row3_4">
                <div className="sub_title">Étanchéité</div>

                <div className="infos">Type: <div className="infos_content">{fiche.waterproof_type}</div></div>
                <div className="infos">Toiture: <div className="infos_content">{fiche.waterproof_roof}</div></div>
                <div className="infos">Longueur: <div className="infos_content">{fiche.waterproof_length}</div></div>
                <div className="infos">Maçonnerie: <div className="infos_content">{fiche.waterproof_masonry}</div></div>
                <div className="infos">Nombre d'éléments: <div className="infos_content">{fiche.waterproof_length_num}</div></div>

            </div>

        </div>

        <div id="row4">
            <div id="sub_row4_1">
                <div className="sub_title">Informations complémentaires</div>

                <div className="infos"><span className="infos_content">{fiche.infos}</span></div>

            </div>

            <div id="fiche_btns_grp">
                <button className="fiche_btn" id="fiche_save"><a href="">Enregistrer</a></button>
                <button className="fiche_btn" id="fiche_send">Envoyer</button>
                
                <button className="fiche_btn" id="fiche_print"><a href="">Imprimer</a></button>
            </div>

        </div>

    </div>    
  )
}

export default Fiche