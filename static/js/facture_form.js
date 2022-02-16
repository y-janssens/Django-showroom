const day = new Date();
const month = new Date();
const year = new Date();

const d = new Date();
let time = d.getTime().toString();
let number = time.slice(9);

let current_day = day.getDate();
let current_month = month.getMonth();
let current_year = year.getUTCFullYear();

if (current_day < 10) {
		current_day = "0" + current_day;
}

if (current_month < 10) {
		current_month = "0" + current_month;
}

const date = current_day + '-' + current_month + '-' + current_year;
const nplus_1 = current_day + '-' + current_month + '-' + (current_year + 1);

document.getElementById('devis_c_date').innerHTML = "Date de la facture: " + date;

let add_pos = 29.25;
let rem_pos = 26.31;
let row_number = 1;
let line_name = "items_list_c"
let line_number = 1;

function add_row() {

    row_number = row_number + 1;
    line_number = line_number + 1;
    lines = line_name + line_number;

    let line = '<table class=' + lines + ' name=' + lines + ' id="next" >' +
        '<tbody>' +
        '<tr>' +
        '<td><input type="text" class="items_c_content" name="product_c' + line_number + '" id="product_c' + line_number + '" placeholder="Produit:"/></td>' +
        '<td><input type="text" class="items_c_content" name="quant_c' + line_number + '" id="quant_c' + line_number + '" placeholder="Quantité:"/></td>' +
        '<td><input type="text" class="items_c_content" name="unit_c' + line_number + '" id="unit_c' + line_number + '" placeholder="Unité:"/></td>' +
        '<td><input type="text" class="items_c_content" name="unit_price_c' + line_number + '" id="unit_price_c' + line_number + '" placeholder="Prix unitaire HT:"/></td>' +
        '<td><input type="text" class="items_c_content" name="tva_margin_c' + line_number + '" id="tva_margin_c' + line_number + '" placeholder="%TVA:"/></td>' +
        '<td><input type="text" class="items_c_content" name="tva_total_c' + line_number + '" id="tva_total_c' + line_number + '" placeholder="Total TVA:"/></td>' +
        '<td><input type="text" class="items_c_content" name="total_price_c' + line_number + '" id="total_price_c' + line_number + '" placeholder="Total TTC:"/></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';

    if (row_number <= 10) {
        add_pos = add_pos + 2.94;
        rem_pos = rem_pos + 2.94;
        $("#devis_c_content").append(line);
        $("#add_line").css('top', add_pos + 'em');
        $("#remove_line").css('visibility', 'visible');
        $("#remove_line").css('top', rem_pos + 'em');
    }

    $("." + lines).change(function () {

        let quant = document.getElementById('quant_c').id + line_number;
        let unity = document.getElementById('unit_price_c').id + line_number;
        let margin = document.getElementById('tva_margin_c').id + line_number;
        let tva_total = document.getElementById('tva_total_c').id + line_number;
        let total_ttc = document.getElementById('total_price_c').id + line_number;

        let quantity = document.getElementById(quant).value;
        let unit = document.getElementById(unity).value;
        let tva_margin = document.getElementById(margin).value;
        let total_tva = ((unit * quantity) / 100) * (tva_margin);
        let total_price = (unit * quantity) + total_tva;

        document.getElementById(tva_total).value = total_tva.toFixed(2);
        document.getElementById(total_ttc).value = total_price.toFixed(2);

        results()
    });
}

function remove_row() {

    add_pos = add_pos - 2.94;
    rem_pos = rem_pos - 2.94;
    row_number = row_number - 1;
    line_number = line_number - 1;

    $("#next").remove();
    $("#add_line").css('top', add_pos + 'em');
    $("#remove_line").css('top', rem_pos + 'em');

    if (rem_pos <= 27) {
        $("#remove_line").css('visibility', 'hidden');
    }
}

let result = "";
document.getElementById('total_ht_c').value = result + "€";
document.getElementById('total_tva_c').value = result + "€";
document.getElementById('total_ttc_c').value = result + "€";


function calc() {
    let quantity = document.getElementById('quant_c').value;
    let unit = document.getElementById('unit_price_c').value;
    let tva_margin = document.getElementById('tva_margin_c').value;
    let tva_total = ((unit * quantity) / 100) * (tva_margin);
    let total_price = (unit * quantity) + tva_total;

    document.getElementById('tva_total_c').value = tva_total.toFixed(2);
    document.getElementById('total_price_c').value = total_price.toFixed(2);

    results();
}

let ht_1 = ht_2 = ht_3 = ht_4 = ht_5 = ht_6 = ht_7 = ht_8 = ht_9 = ht_10 = 0;
let tv_1 = tv_2 = tv_3 = tv_4 = tv_5 = tv_6 = tv_7 = tv_8 = tv_9 = tv_10 = 0;
let tt_1 = tt_2 = tt_3 = tt_4 = tt_5 = tt_6 = tt_7 = tt_8 = tt_9 = tt_10 = 0;

function results() {
    if (document.getElementById('unit_price_c') !== null) {
        ht_1 = document.getElementById('unit_price_c').value * document.getElementById('quant_c').value;
        tv_1 = parseFloat(document.getElementById('tva_total_c').value);
        tt_1 = parseFloat(document.getElementById('total_price_c').value);
    }
    if (document.getElementById('unit_price_c2') !== null) {
        ht_2 = document.getElementById('unit_price_c2').value * document.getElementById('quant_c2').value;
        tv_2 = parseFloat(document.getElementById('tva_total_c2').value);
        tt_2 = parseFloat(document.getElementById('total_price_c2').value);
    }
    if (document.getElementById('unit_price_c3') !== null) {
        ht_3 = document.getElementById('unit_price_c3').value * document.getElementById('quant_c3').value;
        tv_3 = parseFloat(document.getElementById('tva_total_c3').value);
        tt_3 = parseFloat(document.getElementById('total_price_c3').value);
    }
    if (document.getElementById('unit_price_c4') !== null) {
        ht_4 = document.getElementById('unit_price_c4').value * document.getElementById('quant_c4').value;
        tv_4 = parseFloat(document.getElementById('tva_total_c4').value);
        tt_4 = parseFloat(document.getElementById('total_price_c4').value);
    }
    if (document.getElementById('unit_price_c5') !== null) {
        ht_5 = document.getElementById('unit_price_c5').value * document.getElementById('quant_c5').value;
        tv_5 = parseFloat(document.getElementById('tva_total_c5').value);
        tt_5 = parseFloat(document.getElementById('total_price_c5').value);
    }
    if (document.getElementById('unit_price_c6') !== null) {
        ht_6 = document.getElementById('unit_price_c6').value * document.getElementById('quant_c6').value;
        tv_6 = parseFloat(document.getElementById('tva_total_c6').value);
        tt_6 = parseFloat(document.getElementById('total_price_c6').value);
    }
    if (document.getElementById('unit_price_c7') !== null) {
        ht_7 = document.getElementById('unit_price_c7').value * document.getElementById('quant_c7').value;
        tv_7 = parseFloat(document.getElementById('tva_total_c7').value);
        tt_7 = parseFloat(document.getElementById('total_price_c7').value);
    }
    if (document.getElementById('unit_price_c8') !== null) {
        ht_8 = document.getElementById('unit_price_c8').value * document.getElementById('quant_c8').value;
        tv_8 = parseFloat(document.getElementById('tva_total_c8').value);
        tt_8 = parseFloat(document.getElementById('total_price_c8').value);
    }
    if (document.getElementById('unit_price_c9') !== null) {
        ht_9 = document.getElementById('unit_price_c9').value * document.getElementById('quant_c9').value;
        tv_9 = parseFloat(document.getElementById('tva_total_c9').value);
        tt_9 = parseFloat(document.getElementById('total_price_c9').value);
    }
    if (document.getElementById('unit_price_c10') !== null) {
        ht_10 = document.getElementById('unit_price_c10').value * document.getElementById('quant_c10').value;
        tv_10 = parseFloat(document.getElementById('tva_total_c10').value);
        tt_10 = parseFloat(document.getElementById('total_price_c10').value);
    }

    final_ht = ht_1 + ht_2 + ht_3 + ht_4 + ht_5 + ht_6 + ht_7 + ht_8 + ht_9 + ht_10;
    final_tv = tv_1 + tv_2 + tv_3 + tv_4 + tv_5 + tv_6 + tv_7 + tv_8 + tv_9 + tv_10;
    final_tt = tt_1 + tt_2 + tt_3 + tt_4 + tt_5 + tt_6 + tt_7 + tt_8 + tt_9 + tt_10;

    document.getElementById('total_ht_c').value = (final_ht).toFixed(2) + "€";
    document.getElementById('total_tva_c').value = (final_tv).toFixed(2) + "€";
    document.getElementById('total_ttc_c').value = (final_tt).toFixed(2) + "€";
}

function erase() {
    location.reload();
}