
let result = "";
document.getElementById('total_ht').innerHTML = result + "€";
document.getElementById('total_tva').innerHTML = result + "€";
document.getElementById('total_ttc').innerHTML = result + "€";


function calc() {
    let quantity = document.getElementById('quant').innerHTML;
    let unit = document.getElementById('unit_price').innerHTML;
    let tva_margin = document.getElementById('tva_margin').innerHTML;
    let tva_total = ((unit * quantity) / 100) * (tva_margin);
    let total_price = (unit * quantity) + tva_total;
    document.getElementById('tva_total').innerHTML = tva_total;
    document.getElementById('tva_margin').innerHTML = tva_margin;
    document.getElementById('total_price').innerHTML = total_price;

    results();
}

let ht_1 = ht_2 = ht_3 = ht_4 = ht_5 = ht_6 = ht_7 = ht_8 = ht_9 = ht_10 = 0;
let tv_1 = tv_2 = tv_3 = tv_4 = tv_5 = tv_6 = tv_7 = tv_8 = tv_9 = tv_10 = 0;
let tt_1 = tt_2 = tt_3 = tt_4 = tt_5 = tt_6 = tt_7 = tt_8 = tt_9 = tt_10 = 0;

function results() {
    if (document.getElementById('unit_price') !== null) {
        ht_1 = document.getElementById('unit_price').innerHTML * document.getElementById('quant').innerHTML;
        tv_1 = parseFloat(document.getElementById('tva_total').innerHTML);
        tt_1 = parseFloat(document.getElementById('total_price').innerHTML);
    }
    if (document.getElementById('unit_price2') !== null) {
        ht_2 = document.getElementById('unit_price2').innerHTML * document.getElementById('quant2').innerHTML;
        tv_2 = parseFloat(document.getElementById('tva_total2').innerHTML);
        tt_2 = parseFloat(document.getElementById('total_price2').innerHTML);
    }
    if (document.getElementById('unit_price3') !== null) {
        ht_3 = document.getElementById('unit_price3').innerHTML * document.getElementById('quant3').innerHTML;
        tv_3 = parseFloat(document.getElementById('tva_total3').innerHTML);
        tt_3 = parseFloat(document.getElementById('total_price3').innerHTML);
    }
    if (document.getElementById('unit_price4') !== null) {
        ht_4 = document.getElementById('unit_price4').innerHTML * document.getElementById('quant4').innerHTML;
        tv_4 = parseFloat(document.getElementById('tva_total4').innerHTML);
        tt_4 = parseFloat(document.getElementById('total_price4').innerHTML);
    }
    if (document.getElementById('unit_price5') !== null) {
        ht_5 = document.getElementById('unit_price5').innerHTML * document.getElementById('quant5').innerHTML;
        tv_5 = parseFloat(document.getElementById('tva_total5').innerHTML);
        tt_5 = parseFloat(document.getElementById('total_price5').innerHTML);
    }
    if (document.getElementById('unit_price6') !== null) {
        ht_6 = document.getElementById('unit_price6').innerHTML * document.getElementById('quant6').innerHTML;
        tv_6 = parseFloat(document.getElementById('tva_total6').innerHTML);
        tt_6 = parseFloat(document.getElementById('total_price6').innerHTML);
    }
    if (document.getElementById('unit_price7') !== null) {
        ht_7 = document.getElementById('unit_price7').innerHTML * document.getElementById('quant7').innerHTML;
        tv_7 = parseFloat(document.getElementById('tva_total7').innerHTML);
        tt_7 = parseFloat(document.getElementById('total_price7').innerHTML);
    }
    if (document.getElementById('unit_price8') !== null) {
        ht_8 = document.getElementById('unit_price8').innerHTML * document.getElementById('quant8').innerHTML;
        tv_8 = parseFloat(document.getElementById('tva_total8').innerHTML);
        tt_8 = parseFloat(document.getElementById('total_price8').innerHTML);
    }
    if (document.getElementById('unit_price9') !== null) {
        ht_9 = document.getElementById('unit_price9').innerHTML * document.getElementById('quant9').innerHTML;
        tv_9 = parseFloat(document.getElementById('tva_total9').innerHTML);
        tt_9 = parseFloat(document.getElementById('total_price9').innerHTML);
    }
    if (document.getElementById('unit_price10') !== null) {
        ht_10 = document.getElementById('unit_price10').innerHTML * document.getElementById('quant10').innerHTML;
        tv_10 = parseFloat(document.getElementById('tva_total10').innerHTML);
        tt_10 = parseFloat(document.getElementById('total_price10').innerHTML);
    }

    final_ht = ht_1 + ht_2 + ht_3 + ht_4 + ht_5 + ht_6 + ht_7 + ht_8 + ht_9 + ht_10;
    final_tv = tv_1 + tv_2 + tv_3 + tv_4 + tv_5 + tv_6 + tv_7 + tv_8 + tv_9 + tv_10;
    final_tt = tt_1 + tt_2 + tt_3 + tt_4 + tt_5 + tt_6 + tt_7 + tt_8 + tt_9 + tt_10;

    document.getElementById('total_ht').innerHTML = (final_ht).toFixed(2) + "€";
    document.getElementById('total_tva').innerHTML = (final_tv).toFixed(2) + "€";
    document.getElementById('total_ttc').innerHTML = (final_tt).toFixed(2) + "€";
}

window.onload = calc();