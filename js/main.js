var rButton = document.getElementById('registerButton');


function registerFunction() {
  alert("Gebruiker is geregristreerd in de Belfius Databank!");
}

var lButton = document.getElementById('loginButton');



function loginFunction() {
  alert("successvol ingelogd!");
      location.replace("simulationStart.html");
}


var cButton = document.getElementById('continue');
function continueFunction(){
   var ssBedrag = document.querySelector("#hoeveelEuro").value

    console.log(ssBedrag);


    console.log('zit in valueSender');
localStorage.setItem("myValue", ssBedrag);
    console.log(localStorage.setItem("myValue", ssBedrag));
location.replace("carLoan.html");




}

function verzendenFunction(){
    document.getElementById("carloanw").style.display = "none";
    document.getElementById("Verzonden").style.display = "block";
}
function loadNumberFunction() {
    console.log("onload werkt.");
  var b = localStorage.getItem("myValue");
document.querySelector("#hoeveelEuro").value = b;
    Calculate();
}

var vbButton = document.getElementById("buttonVB");
var show1 = document.getElementById("hide1");
function bvFunction(){
    document.getElementById("letOp").style.display = "none";
    document.getElementById("hide1").style.display = "block";

}

var wbButton = document.getElementById("buttonWB");
function wbFunction(){
    alert("De maximale looptijden worden bij Koninklijk Besluit van 14 september 2016 vastgelegd op basis van de geleende bedragen alsook door beslissing van kredietgever Belfius Bank. De minimumlooptijd bedraagt 24 maanden, de maximumlooptijd 84 maanden (afhankelijk van de hoogte van het bedrag en het gewenste product)." + '\n' +

"Voordeel berekend op basis van het volgende voorbeeld: online aangevraagde lening op afbetaling Auto voor de aankoop van een voertuig van 12.500 EUR:"
             + '\n' +
"- Duur van de lening: 48 maanden"
          + '\n' +
"- JKP (Jaarlijks Kostenpercentage): 3,45%"
          + '\n' +
"- Vaste debetrente: 3,45%"
          + '\n' +
"- Maandelijkse aflossingen: 278,88 EUR"
          + '\n' +
"- Aantal maandelijkse aflossingen: 48"
          + '\n' +
"- Terug te betalen bedrag: 13.386,24 EUR");
}

function Calculate() {

    // Extracting value in the amount
    // section in the variable
    const amount = document.querySelector("#hoeveelEuro").value;

    // Extracting value in the interest
    // rate section in the variable
    const rate = document.querySelector("#interest").innerHTML;


    // Extracting value in the months
    // section in the variable
    const months = document.querySelector("#hoeveelMaanden").value;

    // Calculating interest per month
    const interest = (amount * (rate * 0.01)) / months;

    // Calculating monthly payment
    const monthly = ((amount / months) + interest).toFixed(2);

    // Calculating total payment
    const total = (monthly * months).toFixed(2);


    document.querySelector("#mlBedrag")
        .innerHTML =  + monthly + " €";
    document.querySelector("#ttBedrag")
        .innerHTML =  + total + " €";
    console.log( "bedrag is : " + amount + " Rente is " + rate + " maanden zijn " + months + " interest is " + interest + " totaal te betalen bedrag is " + total );
}
