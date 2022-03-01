import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listClients } from "../../actions/clientsActions";
import styled from "styled-components";

import "../styles/clients.css"

function Clients() {
    const dispatch = useDispatch();
    const clientsList = useSelector((state) => state.clientsList);
    const { error, loading, clients } = clientsList;
  
    useEffect(() => {
      dispatch(listClients());
    }, [dispatch]);

  return (
    <div id="clients_wrapper">
    <div id="clients_content">
        
        {clients.map((client) => (
            <Container>
            <div className="client_line">

            <div className="client_infos">- {client.last_name} <span>N°:{client.id}</span></div>
        
                <div className="client_crud_grp">
                    <a className="client_crud" href="{% url 'edit_client' client.id %}"><button className="client_edit">✎</button></a>
                    <a className="client_crud" href="{% url 'confirm_client' client.id %}"><button className="client_delete">X</button></a>
                </div>          
        </div>

            <div className="client_details">

                <div className="client_details_grid">

                    <div className="client_details_content_1">
                        <ul>
                            <li><span>Nom: </span>{client.first_name} {client.last_name}</li>
                            <li><span>Adresse: </span>{client.adress}</li>
                            <li><span>Ville: </span>{client.post_code} {client.city}</li>
                            <li><span>N° de téléphone: </span>{client.phone}</li>
                            <li><span>Adresse e-mail: </span>{client.email}</li>
                            <li><span>Date de naissance: </span>{client.birth_date}</li>
                        </ul>
                    </div>

                    <div className="client_details_content_2">
                        <ul>
                            <li><a className="client_items" href="/devis/?search_query={client.last_name}#">Devis associés</a></li>
                            <li><a className="client_items" href="/factures/?search_query={client.last_name}#">Factures associées</a></li>
                            <li><a className="client_items" href="/fiches/?search_query={client.last_name}#">Fiches associées</a></li>                              
                        </ul>
                    </div>

                </div>  
            </div>
                <br/>
                </Container>
                ))}
    </div>
    </div>
  )
}

const Container = styled.div`
position: absolute;
width: auto;
`
export default Clients