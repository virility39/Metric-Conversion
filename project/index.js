function kilogram(){
    var kilo=document.getElementById("inputKilogram").value;
    document.getElementById("outKilogram").innerHTML=kilo;
    document.getElementById("outGram").innerHTML=kilo*1000;
    document.getElementById("outMetricTon").innerHTML=kilo/1000;
    document.getElementById("outShortTon").innerHTML=(kilo/907.184008305).toFixed(10)
    document.getElementById("outPound").innerHTML=(kilo*2.2046244202).toFixed(10);
    document.getElementById("outOunce").innerHTML=kilo*35.273990723;
}
function gram(){
    var gram=document.getElementById("inputKilogram").value;
    document.getElementById("outKilogram").innerHTML=gram*0.001;
    document.getElementById("outGram").innerHTML=gram;
    document.getElementById("outMetricTon").innerHTML=gram*0.000001;
    document.getElementById("outShortTon").innerHTML=gram*0.0000011023
    document.getElementById("outPound").innerHTML=gram*0.0022046244
    document.getElementById("outOunce").innerHTML=gram*0.0352739907
    
}
function miligram(){
    var miligram=document.getElementById("inputKilogram").value;
    document.getElementById("outKilogram").innerHTML=miligram*0.000001
    document.getElementById("outGram").innerHTML=miligram*0.001
    document.getElementById("outMiligram").innerHTML=miligram
    document.getElementById("outMetricTon").innerHTML=miligram*0.000000001
    document.getElementById("outLongTon").innerHTML=(miligram*0.0000000009842073).toFixed(10)
    document.getElementById("outShortTon").innerHTML=(miligram*0.0000000011023122).toFixed(10)
    document.getElementById("outPound").innerHTML=miligram*0.0000022046
    document.getElementById("outOunce").innerHTML=miligram*0.000035274
    document.getElementById("outCarrat").innerHTML=miligram*0.005
    document.getElementById("outAtomicMassUnit").innerHTML=0
}

function metricton(){
    var metricton=document.getElementById("inputKilogram").value;
    document.getElementById("outKilogram").innerHTML=metricton*1000;
    document.getElementById("outGram").innerHTML=metricton*1000000;
    document.getElementById("outMiligram").innerHTML=metricton*1000000000;
    document.getElementById("outMetricTon").innerHTML=metricton;
    document.getElementById("outLongTon").innerHTML=(metricton/1.01604611142).toFixed(10);
    document.getElementById("outShortTon").innerHTML=(metricton/0.907184008305).toFixed(10)
    document.getElementById("outPound").innerHTML=(metricton*2204.6244202).toFixed(10);

    document.getElementById("outOunce").innerHTML=metricton*35273.990723;
    document.getElementById("outCarrat").innerHTML=metricton*5000000;
    document.getElementById("outAtomicMassUnit").innerHTML=0
}
function longton(){
    var longton=document.getElementById("inputKilogram").value;
    document.getElementById("outKilogram").innerHTML=longton*1016.04608;
    document.getElementById("outGram").innerHTML=longton*1016046.08;
    document.getElementById("outMiligram").innerHTML=longton*101604608;
    document.getElementById("outMetricTon").innerHTML=longton*1.01604608;
    document.getElementById("outLongTon").innerHTML=longton;
    document.getElementById("outShortTon").innerHTML=longton*1.12
    document.getElementById("outPound").innerHTML=longton*2240
    document.getElementById("outOunce").innerHTML=longton*35840;
    document.getElementById("outCarrat").innerHTML=longton*5080230.4;
    document.getElementById("outAtomicMassUnit").innerHTML=0
}
function shortton(){
    var shortton=document.getElementById("inputKilogram").value;
    document.getElementById("outKilogram").innerHTML=shortton*907.184
    document.getElementById("outGram").innerHTML=shortton*907184 
    document.getElementById("outMiligram").innerHTML=shortton*907184000
    document.getElementById("outMetricTon").innerHTML=shortton*0.907184
    document.getElementById("outLongTon").innerHTML=shortton*0.8928571429
    document.getElementById("outShortTon").innerHTML=shortton;
    document.getElementById("outPound").innerHTML=shortton*2000
    document.getElementById("outOunce").innerHTML=shortton*32000
    document.getElementById("outCarrat").innerHTML=shortton*4535920
    document.getElementById("outAtomicMassUnit").innerHTML=0
}
function pound(){
    var pound=document.getElementById("inputKilogram").value;
    document.getElementById("outKilogram").innerHTML=pound*0.453592 
    document.getElementById("outGram").innerHTML=pound*453.592
    document.getElementById("outMiligram").innerHTML=pound*453592 
    document.getElementById("outMetricTon").innerHTML=pound*0.000453592
    document.getElementById("outLongTon").innerHTML=pound*0.0004464286
    document.getElementById("outShortTon").innerHTML=pound*0.0005
    document.getElementById("outPound").innerHTML=pound
    document.getElementById("outOunce").innerHTML=pound*16
    document.getElementById("outCarrat").innerHTML=pound*2267.96
    document.getElementById("outAtomicMassUnit").innerHTML=0
}
function ounce(){var ounce=document.getElementById("inputKilogram").value;
document.getElementById("outKilogram").innerHTML=ounce*0.0283495
document.getElementById("outGram").innerHTML=ounce*28.3495
document.getElementById("outMiligram").innerHTML=ounce*28349.5
document.getElementById("outMetricTon").innerHTML=ounce*0.0000283495
document.getElementById("outLongTon").innerHTML=ounce*0.0000279018
document.getElementById("outShortTon").innerHTML=ounce*0.00003125
document.getElementById("outPound").innerHTML=ounce*0.0625
document.getElementById("outOunce").innerHTML=ounce
document.getElementById("outCarrat").innerHTML=ounce*141.7475
document.getElementById("outAtomicMassUnit").innerHTML=0
}
function carrat(){
var carrat=document.getElementById("inputKilogram").value;
document.getElementById("outKilogram").innerHTML=carrat*0.0002
document.getElementById("outGram").innerHTML=carrat* 0.2
document.getElementById("outMiligram").innerHTML=carrat*200
document.getElementById("outMetricTon").innerHTML=carrat*0.0000002
document.getElementById("outLongTon").innerHTML=carrat*0.0000001968
document.getElementById("outShortTon").innerHTML=carrat*0.0000002204
document.getElementById("outPound").innerHTML=carrat*0.0004409248
document.getElementById("outOunce").innerHTML=carrat*0.00705479814
document.getElementById("outCarrat").innerHTML=carrat
document.getElementById("outAtomicMassUnit").innerHTML=0
}