function calculate(){
    let direction = $("#select-direction").val();
    let entryValue = parseFloat($("#input-entry-value").val());
    let pipsTarget = $("#input-pips-target").val();
    let takeProfit = $("#input-take-profit");
    let floatValuePip = parseFloat((pipsTarget/10000).toFixed(5));

    let calculate = direction == "1" ? entryValue+floatValuePip : entryValue-floatValuePip;
    // takeProfit.attr("placeholder", calculate.toFixed(5)).focus();
    takeProfit.val(calculate.toFixed(5)).focus();
}

function resetCalculate(){
    $("#select-direction").val("0");
    $("#input-entry-value").val("");
    $("#input-pips-target").val("");
    $("#input-take-profit").val("");
}

function compute(){
    let direction = $("#select-direction-compute").val();
    let entryValue = parseFloat($("#input-entry-value-compute").val());
    let takeProfitValue = parseFloat($("#input-take-profit-compute").val());
    let pips = $("#input-pips");


    let compute = direction == "1" ? takeProfitValue-entryValue : entryValue-takeProfitValue;
    compute = (compute.toFixed(5) * 10000).toFixed(1);
    pips.val(compute).focus();
}

function resetCompute(){
    $("#select-direction-compute").val("0");
    $("#input-entry-value-compute").val("");
    $("#input-take-profit-compute").val("");
    $("#input-pips").val("");
}

function toFixedNoRounding(number, precision = 2){
    const factor = Math.pow(10,precision);
    return Math.floor(number * factor) / factor;
}

function computeTargets(){
    let capitalValue = parseFloat($("#input-capital").val());
    let computeLotSize = capitalValue/850;
    // let timesLotSize = toFixedNoRounding(computeLotSize) * 10;
    let with2Decimals = computeLotSize.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    let timesLotSize = (with2Decimals*10).toFixed(2);



    console.log(with2Decimals);
    // console.log(timesLotSize);
    let comms = with2Decimals*30;
    $("#commission").val(comms).focus();

    $('#input-six-pips').val((timesLotSize*6).toFixed(1) + " --- " + ((timesLotSize*6).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-seven-pips').val((timesLotSize*7).toFixed(1) + " --- " + ((timesLotSize*7).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-eight-pips').val((timesLotSize*8).toFixed(1) + " --- " + ((timesLotSize*8).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-nine-pips').val((timesLotSize*9).toFixed(1) + " --- " + ((timesLotSize*9).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-ten-pips').val((timesLotSize*10).toFixed(1) + " --- " + ((timesLotSize*10).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-eleven-pips').val((timesLotSize*11).toFixed(1) + " --- " + ((timesLotSize*11).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-twelve-pips').val((timesLotSize*12).toFixed(1) + " --- " + ((timesLotSize*12).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-thirteen-pips').val((timesLotSize*13).toFixed(1) + " --- " + ((timesLotSize*13).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-fourteen-pips').val((timesLotSize*14).toFixed(1) + " --- " + ((timesLotSize*14).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-fifteen-pips').val((timesLotSize*15).toFixed(1) + " --- " + ((timesLotSize*15).toFixed(1)-comms).toFixed(1)).focus();

    $('#input-sixfive-pips').val((timesLotSize*6.5).toFixed(1) + " --- " + ((timesLotSize*6.5).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-sevenfive-pips').val((timesLotSize*7.5).toFixed(1) + " --- " + ((timesLotSize*7.5).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-eightfive-pips').val((timesLotSize*8.5).toFixed(1) + " --- " + ((timesLotSize*8.5).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-ninefive-pips').val((timesLotSize*9.5).toFixed(1) + " --- " + ((timesLotSize*9.5).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-tenfive-pips').val((timesLotSize*10.5).toFixed(1) + " --- " + ((timesLotSize*10.5).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-elevenfive-pips').val((timesLotSize*11.5).toFixed(1) + " --- " + ((timesLotSize*11.5).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-twelvefive-pips').val((timesLotSize*12.5).toFixed(1) + " --- " + ((timesLotSize*12.5).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-thirteenfive-pips').val((timesLotSize*13.5).toFixed(1) + " --- " + ((timesLotSize*13.5).toFixed(1)-comms).toFixed(1)).focus();
    $('#input-fourteenfive-pips').val((timesLotSize*14.5).toFixed(1) + " --- " + ((timesLotSize*14.5).toFixed(1)-comms).toFixed(1)).focus();

    $("#lot-size").val(computeLotSize).focus();
}

function resetComputeTargets(){
    $("#lot-size").val("");
    $("#input-capital").val("");
    $('#input-six-pips').val("");
    $('#input-seven-pips').val("");
    $('#input-eight-pips').val("");
    $('#input-nine-pips').val("");
    $('#input-ten-pips').val("");
    $('#input-eleven-pips').val("");
    $('#input-twelve-pips').val("");
    $('#input-thirteen-pips').val("");
    $('#input-fourteen-pips').val("");
    $('#input-fifteen-pips').val("");

    $('#input-sixfive-pips').val("");
    $('#input-sevenfive-pips').val("");
    $('#input-eightfive-pips').val("");
    $('#input-ninefive-pips').val("");
    $('#input-tenfive-pips').val("");
    $('#input-elevenfive-pips').val("");
    $('#input-twelvefive-pips').val("");
    $('#input-thirteenfive-pips').val("");
    $('#input-fourteenfive-pips').val("");
    $("#commission").val("");
}