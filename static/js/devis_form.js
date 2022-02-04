const day = new Date();
const month = new Date();
const year = new Date();

const d = new Date();
let time = d.getTime().toString();
let number = time.slice(9);

let estimate_number = "FD1-0" + number;

document.getElementById('devis_c_ref').value = "Référence du devis:" + estimate_number;
document.getElementById('devis_c_title').innerHTML = "Devis N°: " + estimate_number;

const current_day = day.getDate();
const current_month = month.getMonth();
const current_year = year.getUTCFullYear();

const date = current_day + '/' + current_month + '/' + current_year;
const nplus_1 = current_day + '/' + current_month + '/' + (current_year + 1);

document.getElementById('devis_c_date').value = "Date du devis: " + date;
document.getElementById('devis_c_valid').value = "Date de validité du devis: " + nplus_1;

$("#save").click(function () {

    var w = document.getElementById("devis_c_container").offsetWidth;
    var h = document.getElementById("devis_c_container").offsetHeight;
    let node = document.getElementById('devis_c_container');

    domtoimage.toBlob(node, {
        width: w, height: h, quality: 1,
        style: {
            'position': 'inherit',
            'left': '0%',
            'top': '0%',
            'margin': '0',
            'transform': 'translate(0%, 0%)',
            'margin-left': '0%',
            'border-radius': '0px'
        }
    })
        .then(function (blob) {
            window.saveAs(blob, estimate_number + '.png');
        });
});

let add_pos = 29.25;
let rem_pos = 26.31;
let row_number = 1;
let line_name = "items_list"
let line_number = 1;

function add_row() {

    row_number = row_number + 1;
    line_number = line_number + 1;
    lines = line_name + line_number;

    let line = '<table class=' + lines + ' id="next" >' +
        '<tbody>' +
        '<tr>' +
        '<td><input type="text" class="items_content" id="product' + line_number + '" placeholder="Produit:"/></td>' +
        '<td><input type="text" class="items_content" id="quant' + line_number + '" placeholder="Quantité:"/></td>' +
        '<td><input type="text" class="items_content" id="unit' + line_number + '" placeholder="Unité:"/></td>' +
        '<td><input type="text" class="items_content" id="unit_price' + line_number + '" placeholder="Prix unitaire HT:"/></td>' +
        '<td><input type="text" class="items_content" id="tva_margin' + line_number + '" placeholder="%TVA:"/></td>' +
        '<td><input type="text" class="items_content" id="tva_total' + line_number + '" placeholder="Total TVA:"/></td>' +
        '<td><input type="text" class="items_content" id="total_price' + line_number + '" placeholder="Total TTC:"/></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';

    if (row_number <= 10) {
        add_pos = add_pos + 2.94;
        rem_pos = rem_pos + 2.94;
        $("#devis_content").append(line);
        $("#add_line").css('top', add_pos + 'em');
        $("#remove_line").css('visibility', 'visible');
        $("#remove_line").css('top', rem_pos + 'em');
    }

    $("." + lines).change(function () {

        let quant = document.getElementById('quant').id + line_number;
        let unity = document.getElementById('unit_price').id + line_number;
        let margin = document.getElementById('tva_margin').id + line_number;
        let tva_total = document.getElementById('tva_total').id + line_number;
        let total_ttc = document.getElementById('total_price').id + line_number;

        let quantity = document.getElementById(quant).value;
        let unit = document.getElementById(unity).value;
        let tva_margin = document.getElementById(margin).value;
        let total_tva = ((unit * quantity) / 100) * (tva_margin);
        let total_price = (unit * quantity) + total_tva;

        document.getElementById(tva_total).value = total_tva;
        document.getElementById(total_ttc).value = total_price;

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
document.getElementById('total_ht').innerHTML = result + "€";
document.getElementById('total_tva').innerHTML = result + "€";
document.getElementById('total_ttc').innerHTML = result + "€";


function calc() {
    let quantity = document.getElementById('quant').value;
    let unit = document.getElementById('unit_price').value;
    let tva_margin = document.getElementById('tva_margin').value;
    let tva_total = ((unit * quantity) / 100) * (tva_margin);
    let total_price = (unit * quantity) + tva_total;
    document.getElementById('tva_total').value = tva_total;
    document.getElementById('tva_margin').value = tva_margin;
    document.getElementById('total_price').value = total_price;

    results();
}

let ht_1 = ht_2 = ht_3 = ht_4 = ht_5 = ht_6 = ht_7 = ht_8 = ht_9 = ht_10 = 0;
let tv_1 = tv_2 = tv_3 = tv_4 = tv_5 = tv_6 = tv_7 = tv_8 = tv_9 = tv_10 = 0;
let tt_1 = tt_2 = tt_3 = tt_4 = tt_5 = tt_6 = tt_7 = tt_8 = tt_9 = tt_10 = 0;

function results() {
    if (document.getElementById('unit_price') !== null) {
        ht_1 = document.getElementById('unit_price').value * document.getElementById('quant').value;
        tv_1 = parseFloat(document.getElementById('tva_total').value);
        tt_1 = parseFloat(document.getElementById('total_price').value);
    }
    if (document.getElementById('unit_price2') !== null) {
        ht_2 = document.getElementById('unit_price2').value * document.getElementById('quant2').value;
        tv_2 = parseFloat(document.getElementById('tva_total2').value);
        tt_2 = parseFloat(document.getElementById('total_price2').value);
    }
    if (document.getElementById('unit_price3') !== null) {
        ht_3 = document.getElementById('unit_price3').value * document.getElementById('quant3').value;
        tv_3 = parseFloat(document.getElementById('tva_total3').value);
        tt_3 = parseFloat(document.getElementById('total_price3').value);
    }
    if (document.getElementById('unit_price4') !== null) {
        ht_4 = document.getElementById('unit_price4').value * document.getElementById('quant4').value;
        tv_4 = parseFloat(document.getElementById('tva_total4').value);
        tt_4 = parseFloat(document.getElementById('total_price4').value);
    }
    if (document.getElementById('unit_price5') !== null) {
        ht_5 = document.getElementById('unit_price5').value * document.getElementById('quant5').value;
        tv_5 = parseFloat(document.getElementById('tva_total5').value);
        tt_5 = parseFloat(document.getElementById('total_price5').value);
    }
    if (document.getElementById('unit_price6') !== null) {
        ht_6 = document.getElementById('unit_price6').value * document.getElementById('quant6').value;
        tv_6 = parseFloat(document.getElementById('tva_total6').value);
        tt_6 = parseFloat(document.getElementById('total_price6').value);
    }
    if (document.getElementById('unit_price7') !== null) {
        ht_7 = document.getElementById('unit_price7').value * document.getElementById('quant7').value;
        tv_7 = parseFloat(document.getElementById('tva_total7').value);
        tt_7 = parseFloat(document.getElementById('total_price7').value);
    }
    if (document.getElementById('unit_price8') !== null) {
        ht_8 = document.getElementById('unit_price8').value * document.getElementById('quant8').value;
        tv_8 = parseFloat(document.getElementById('tva_total8').value);
        tt_8 = parseFloat(document.getElementById('total_price8').value);
    }
    if (document.getElementById('unit_price9') !== null) {
        ht_9 = document.getElementById('unit_price9').value * document.getElementById('quant9').value;
        tv_9 = parseFloat(document.getElementById('tva_total9').value);
        tt_9 = parseFloat(document.getElementById('total_price9').value);
    }
    if (document.getElementById('unit_price10') !== null) {
        ht_10 = document.getElementById('unit_price10').value * document.getElementById('quant10').value;
        tv_10 = parseFloat(document.getElementById('tva_total10').value);
        tt_10 = parseFloat(document.getElementById('total_price10').value);
    }

    final_ht = ht_1 + ht_2 + ht_3 + ht_4 + ht_5 + ht_6 + ht_7 + ht_8 + ht_9 + ht_10;
    final_tv = tv_1 + tv_2 + tv_3 + tv_4 + tv_5 + tv_6 + tv_7 + tv_8 + tv_9 + tv_10;
    final_tt = tt_1 + tt_2 + tt_3 + tt_4 + tt_5 + tt_6 + tt_7 + tt_8 + tt_9 + tt_10;

    document.getElementById('total_ht').innerHTML = (final_ht).toFixed(2) + "€";
    document.getElementById('total_tva').innerHTML = (final_tv).toFixed(2) + "€";
    document.getElementById('total_ttc').innerHTML = (final_tt).toFixed(2) + "€";
}

function erase() {
    location.reload();
}