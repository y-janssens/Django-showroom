import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { listFacture } from "../../actions/facturesActions";
import "../styles/devis_display.css";

function Facture() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const factureList = useSelector((state) => state.factureList);
    const { error, loading, facture } = factureList;
  
    useEffect(() => {
      dispatch(listFacture(id));
    }, [dispatch, id]);

  return (
<div id="devis_content">
    <div id="devis_header">
        <div id="devis_title_d">Devis N°: {facture.invoice_number}</div>
    </div>

    
    
    <hr className="devis_hr"/>

    <div id="company_infos">
    {/* <div className="devis_content" placeholder="Société: " id="company_name" >{company.name}</div><br/>
        <div  type="text" className="devis_content" placeholder="Adresse: " >{company.adress}</div><br/>
        <div  type="text" className="devis_content" placeholder="Ville: " >{company.post_code} {company.city}</div><br/>
        <div  type="text" className="devis_content" placeholder="Tel: " ><a href="tel:{company.phone}">{company.phone}</a></div> */}
    </div>

    <div id="devis_infos">
        <div className="devis_content" id="devis_date">Date de la facture: {facture.date}</div><br/>
        <div className="devis_content" id="devis_ref">Référence de la facture: {facture.invoice_number}</div><br/>
         {/* <div className="devis_content" id="devis_commercial">Commercial: <a href="tel:{facture.owner.phone}">{facture.owner.first_name} {facture.owner.last_name}</a></div> */}
    </div>

    <div id="client_infos">
        <div className="devis_content" placeholder="Nom du client:">{facture.customer}</div><br/>
        <div className="devis_content" placeholder="Adresse:">{facture.customer_adress}</div><br/>
        <div className="devis_content" placeholder="Ville:">{facture.customer_post_code} {facture.customer_city}</div><br/>
        <div className="devis_content" placeholder="Téléphone:">{facture.customer_phone}</div>
    </div>
    <hr className="devis_hr" id="dhr2"/>

    <table className="items" id="head">
        <tbody>
            <tr>
                <td>Description</td>
                <td>Quantité</td>
                <td>Unité</td>
                <td>Prix unitaire HT</td>
                <td>%TVA</td>
                <td>Total TVA</td>
                <td>Total TTC</td>
            </tr>

        </tbody>
    </table>
    
    <table className="items_list">
        <tbody>
            <tr>
                <td><div className="devis_items_content" id="product" placeholder="Produit:">{facture.product_1}</div></td>
                <td><div className="devis_items_content" id="quant" placeholder="Quantité:">{facture.quantity_1}</div></td>
                <td><div className="devis_items_content" id="unit" placeholder="Unité:">{facture.unit_1}</div></td>
                <td><div className="devis_items_content" id="unit_price" placeholder="Prix unitaire HT:">{facture.unit_price_1}</div></td>
                <td><div className="devis_items_content" id="tva_margin" placeholder="%TVA:">{facture.vat_1}</div></td>
                <td><div className="devis_items_content" id="tva_total" placeholder="Total TVA:">{facture.total_vat_1}</div></td>
                <td><div className="devis_items_content" id="total_price" placeholder="Total TTC:">{facture.total_full_1}</div></td>
            </tr>
        </tbody>
    </table>



    <table className="items_list">
        <tbody>
            <tr>
                <td><div className="devis_items_content" id="product2" placeholder="Produit:">{facture.product_2}</div></td>
                <td><div className="devis_items_content" id="quant2" placeholder="Quantité:">{facture.quantity_2}</div></td>
                <td><div className="devis_items_content" id="unit2" placeholder="Unité:">{facture.unit_2}</div></td>
                <td><div className="devis_items_content" id="unit_price2" placeholder="Prix unitaire HT:">{facture.unit_price_2}</div></td>
                <td><div className="devis_items_content" id="tva_margin2" placeholder="%TVA:">{facture.vat_2}</div></td>
                <td><div className="devis_items_content" id="tva_total2" placeholder="Total TVA:">{facture.total_vat_2}</div></td>
                <td><div className="devis_items_content" id="total_price2" placeholder="Total TTC:">{facture.total_full_2}</div></td>
            </tr>
        </tbody>
    </table>



    <table className="items_list">
        <tbody>
            <tr>
                <td><div className="devis_items_content" id="product3" placeholder="Produit:">{facture.product_3}</div></td>
                <td><div className="devis_items_content" id="quant3" placeholder="Quantité:">{facture.quantity_3}</div></td>
                <td><div className="devis_items_content" id="unit3" placeholder="Unité:">{facture.unit_3}</div></td>
                <td><div className="devis_items_content" id="unit_price3" placeholder="Prix unitaire HT:">{facture.unit_price_3}</div></td>
                <td><div className="devis_items_content" id="tva_margin3" placeholder="%TVA:">{facture.vat_3}</div></td>
                <td><div className="devis_items_content" id="tva_total3" placeholder="Total TVA:">{facture.total_vat_3}</div></td>
                <td><div className="devis_items_content" id="total_price3" placeholder="Total TTC:">{facture.total_full_3}</div></td>
            </tr>
        </tbody>
    </table>
    


    <table className="items_list">
        <tbody>
            <tr>
                <td><div className="devis_items_content" id="product4" placeholder="Produit:">{facture.product_4}</div></td>
                <td><div className="devis_items_content" id="quant4" placeholder="Quantité:">{facture.quantity_4}</div></td>
                <td><div className="devis_items_content" id="unit4" placeholder="Unité:">{facture.unit_4}</div></td>
                <td><div className="devis_items_content" id="unit_price4" placeholder="Prix unitaire HT:">{facture.unit_price_4}</div></td>
                <td><div className="devis_items_content" id="tva_margin4" placeholder="%TVA:">{facture.vat_4}</div></td>
                <td><div className="devis_items_content" id="tva_total4" placeholder="Total TVA:">{facture.total_vat_4}</div></td>
                <td><div className="devis_items_content" id="total_price4" placeholder="Total TTC:">{facture.total_full_4}</div></td>
            </tr>
        </tbody>
    </table>
    


    <table className="items_list">
        <tbody>
            <tr>
                <td><div className="devis_items_content" id="product5" placeholder="Produit:">{facture.product_5}</div></td>
                <td><div className="devis_items_content" id="quant5" placeholder="Quantité:">{facture.quantity_5}</div></td>
                <td><div className="devis_items_content" id="unit5" placeholder="Unité:">{facture.unit_5}</div></td>
                <td><div className="devis_items_content" id="unit_price5" placeholder="Prix unitaire HT:">{facture.unit_price_5}</div></td>
                <td><div className="devis_items_content" id="tva_margin5" placeholder="%TVA:">{facture.vat_5}</div></td>
                <td><div className="devis_items_content" id="tva_total5" placeholder="Total TVA:">{facture.total_vat_5}</div></td>
                <td><div className="devis_items_content" id="total_price5" placeholder="Total TTC:">{facture.total_full_5}</div></td>
            </tr>
        </tbody>
    </table>
    


    <table className="items_list">
        <tbody>
            <tr>
                <td><div className="devis_items_content" id="product6" placeholder="Produit:">{facture.product_6}</div></td>
                <td><div className="devis_items_content" id="quant6" placeholder="Quantité:">{facture.quantity_6}</div></td>
                <td><div className="devis_items_content" id="unit6" placeholder="Unité:">{facture.unit_6}</div></td>
                <td><div className="devis_items_content" id="unit_price6" placeholder="Prix unitaire HT:">{facture.unit_price_6}</div></td>
                <td><div className="devis_items_content" id="tva_margin6" placeholder="%TVA:">{facture.vat_6}</div></td>
                <td><div className="devis_items_content" id="tva_total6" placeholder="Total TVA:">{facture.total_vat_6}</div></td>
                <td><div className="devis_items_content" id="total_price6" placeholder="Total TTC:">{facture.total_full_6}</div></td>
            </tr>
        </tbody>
    </table>
    


    <table className="items_list">
        <tbody>
            <tr>
                <td><div className="devis_items_content" id="product7" placeholder="Produit:">{facture.product_7}</div></td>
                <td><div className="devis_items_content" id="quant7" placeholder="Quantité:">{facture.quantity_7}</div></td>
                <td><div className="devis_items_content" id="unit7" placeholder="Unité:">{facture.unit_7}</div></td>
                <td><div className="devis_items_content" id="unit_price7" placeholder="Prix unitaire HT:">{facture.unit_price_7}</div></td>
                <td><div className="devis_items_content" id="tva_margin7" placeholder="%TVA:">{facture.vat_7}</div></td>
                <td><div className="devis_items_content" id="tva_total7" placeholder="Total TVA:">{facture.total_vat_7}</div></td>
                <td><div className="devis_items_content" id="total_price7" placeholder="Total TTC:">{facture.total_full_7}</div></td>
            </tr>
        </tbody>
    </table>
    


    <table className="items_list">
        <tbody>
            <tr>
                <td><div className="devis_items_content" id="product8" placeholder="Produit:">{facture.product_8}</div></td>
                <td><div className="devis_items_content" id="quant8" placeholder="Quantité:">{facture.quantity_8}</div></td>
                <td><div className="devis_items_content" id="unit8" placeholder="Unité:">{facture.unit_8}</div></td>
                <td><div className="devis_items_content" id="unit_price8" placeholder="Prix unitaire HT:">{facture.unit_price_8}</div></td>
                <td><div className="devis_items_content" id="tva_margin8" placeholder="%TVA:">{facture.vat_8}</div></td>
                <td><div className="devis_items_content" id="tva_total8" placeholder="Total TVA:">{facture.total_vat_8}</div></td>
                <td><div className="devis_items_content" id="total_price8" placeholder="Total TTC:">{facture.total_full_8}</div></td>
            </tr>
        </tbody>
    </table>
    


    <table className="items_list">
        <tbody>
            <tr>
                <td><div className="devis_items_content" id="product9" placeholder="Produit:">{facture.product_9}</div></td>
                <td><div className="devis_items_content" id="quant9" placeholder="Quantité:">{facture.quantity_9}</div></td>
                <td><div className="devis_items_content" id="unit9" placeholder="Unité:">{facture.unit_9}</div></td>
                <td><div className="devis_items_content" id="unit_price9" placeholder="Prix unitaire HT:">{facture.unit_price_9}</div></td>
                <td><div className="devis_items_content" id="tva_margin9" placeholder="%TVA:">{facture.vat_9}</div></td>
                <td><div className="devis_items_content" id="tva_total9" placeholder="Total TVA:">{facture.total_vat_9}</div></td>
                <td><div className="devis_items_content" id="total_price9" placeholder="Total TTC:">{facture.total_full_9}</div></td>
            </tr>
        </tbody>
    </table>
    


    <table className="items_list">
        <tbody>
            <tr>
                <td><div className="devis_items_content" id="product10" placeholder="Produit:">{facture.product_10}</div></td>
                <td><div className="devis_items_content" id="quant10" placeholder="Quantité:">{facture.quantity_10}</div></td>
                <td><div className="devis_items_content" id="unit10" placeholder="Unité:">{facture.unit_10}</div></td>
                <td><div className="devis_items_content" id="unit_price10" placeholder="Prix unitaire HT:">{facture.unit_price_10}</div></td>
                <td><div className="devis_items_content" id="tva_margin10" placeholder="%TVA:">{facture.vat_10}</div></td>
                <td><div className="devis_items_content" id="tva_total10" placeholder="Total TVA:">{facture.total_vat_10}</div></td>
                <td><div className="devis_items_content" id="total_price10" placeholder="Total TTC:">{facture.total_full_10}</div></td>
            </tr>
        </tbody>
    </table>
    
    <div id="prices_title">
            <span className="price">Total HT</span>
            <span className="price">Total TVA</span>
            <span className="price" id="total">Total TTC</span>
        </div>
    
        <div id="prices_value">
            <span className="price" id="total_ht">{facture.total_ht}</span>
            <span className="price" id="total_tva">{facture.total_vat}</span>
            <span className="price" id="total_ttc">{facture.total_full}</span>
        </div>
    
        <div id="signa">Signature du client:</div>
        <hr className="devis_hr" id="dhr3" />       

        <div id="devis_btns_grp">
        <button className="devis_btn" id="devis_save"><a href="{% url 'devis_save' facture.id %}">Enregistrer</a></button>
        <button className="devis_btn" id="devis_send">Envoyer</button>                
        <button className="devis_btn" id="devis_print"><a href="{% url 'devis_print' facture.id %}">Imprimer</a></button>
    </div>
            
        </div>


 
    
  )
}

export default Facture