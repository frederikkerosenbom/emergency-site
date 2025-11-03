// document.querySelector("#frontpage h1").textContent = "EMERGENCY";
// document.querySelector("#frontpage .sub").textContent = "SITE";

// farveskift headset
document
  .querySelector("#hotspotHeadset")
  .addEventListener("mouseover", headHighlight);
document
  .querySelector("#hotspotHeadset")
  .addEventListener("mouseout", headUnHighlight);
function headHighlight() {
  console.log("headHighlight");
  this.style.fill = "rgba(255, 0, 200, 1)";
}
function headUnHighlight() {
  console.log("headUnHighlight");
  this.style.fill = "#f9b4d3";
}
// farveskift hue
document
  .querySelector("#hotspotHue")
  .addEventListener("mouseover", hueHighlight);
document
  .querySelector("#hotspotHue")
  .addEventListener("mouseout", hueUnHighlight);
function hueHighlight() {
  console.log("hueHighlight");
  this.style.fill = "rgba(255, 0, 200, 1)";
}
function hueUnHighlight() {
  console.log("hueUnHighlight");
  this.style.fill = "#fddf5a";
}
// farveskift Phone
document
  .querySelector("#hotspotPhone")
  .addEventListener("mouseover", phoneHighlight);
document
  .querySelector("#hotspotPhone")
  .addEventListener("mouseout", phoneUnHighlight);
function phoneHighlight() {
  console.log("phoneHighlight");
  this.style.fill = "rgba(255, 0, 200, 1)";
}
function phoneUnHighlight() {
  console.log("phoneUnHighlight");
  this.style.fill = "#000";
}
// farveskift sko
document
  .querySelector("#hotspotSko")
  .addEventListener("mouseover", shoeHighlight);
document
  .querySelector("#hotspotSko")
  .addEventListener("mouseout", shoeUnHighlight);
function shoeHighlight() {
  console.log("shoeHighlight");
  this.style.fill = "rgba(255, 0, 200, 1)";
}
function shoeUnHighlight() {
  console.log("shoeUnHighlight");
  this.style.fill = "#b66db9";
}

// faktaboks indhold headset
document
  .querySelector("#hotspotHeadset")
  .addEventListener("click", headsetInfo);

function headsetInfo() {
  console.log("headsetInfo");
  document.querySelector(".info-text > h2").textContent =
    "Når beatet overdøver virkeligheden";
  document.querySelector(".info-text > article > p").textContent =
    "Du var midt i dit yndlingsnummer, verden forsvandt - og så gjorde balancen også. Resultat: 1-0 til asfalten.? Høretelefoner gør dig døv for trafikken, uanset om du er på 2, 4 eller flere hjul. Og det går stærkt, når du ikke hører bilen, der dytter bag dig.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Effektivitet</h3><p>lorem ipsum1</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Styrke</h3><p>lorem ipsum1</p>";
}

// faktaboks indhold hue
document.querySelector("#hotspotHue").addEventListener("click", hueInfo);

function hueInfo() {
  console.log("hueInfo");
  document.querySelector(".info-text > h2").textContent = "Den glemte helt";
  document.querySelector(".info-text > article > p").textContent =
    " “Jeg skal jo ikke så langt, den ødelægger min frisure, den ligger der hjemme” - sagde alle, der endte på skadestuen. Men hey - frisuren sad jo perfekt, indtil du ramte fortovskanten. Uanset om du kører på rulleskøjter, cykel eller el-løbehjul, er hjelmen stadig den mest undervurderede superhelt.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Effektivitet</h3><p>lorem ipsum2</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Styrke</h3><p>lorem ipsum2</p>";
}

// faktaboks indhold sko
document.querySelector("#hotspotSko").addEventListener("click", skoInfo);

function skoInfo() {
  console.log("skoInfo");
  document.querySelector(".info-text > h2").textContent = "Den skjulte fjende";
  document.querySelector(".info-text > article > p").textContent =
    "Du ville bare lige rulle lidt - men ét løst snørebånd, og pludselig laver du parkour midt på cykelstien. Lyder fjollet? Jep. Men præcis sådan starter mange ulykker - også på el-løbehjul og cykel, hvor udstyr og manglende fokus sender folk i asfalten.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Effektivitet</h3><p>lorem ipsum3</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Styrke</h3><p>lorem ipsum3</p>";
}
// faktaboks indhold phone
document.querySelector("#hotspotPhone").addEventListener("click", phoneInfo);

function phoneInfo() {
  console.log("phoneInfo");
  document.querySelector(".info-text > h2").textContent =
    "Bare lige et hurtigt kig…";
  document.querySelector(".info-text > article > p").textContent =
    "En besked, et like - og BUM! du møder kantstenen frontalt. Telefoner og hjul er en farlig blanding, uanset om du ruller, cykler eller suser af sted på el-løbehjul.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Effektivitet</h3><p>lorem ipsum4</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Styrke</h3><p>lorem ipsum4</p>";
}
