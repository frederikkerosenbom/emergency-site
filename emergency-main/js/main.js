//konstanter//
const head = document.querySelector("#hotspotHeadset");
const hue = document.querySelector("#hotspotHue");
const phone = document.querySelector("#hotspotPhone");
const sko = document.querySelector("#hotspotSko");
const overskrift = document.querySelector(".info-text > h2");
const brodtekst = document.querySelector(".info-text > article > p");
const efficiency = document.querySelector("#efficiency");
const requirement = document.querySelector("#requirement");

// farveskift headset
head.addEventListener("mouseover", headsetHighlight);
head.addEventListener("mouseout", headsetUnHighlight);
function headsetHighlight() {
  console.log("headsetHighlight");
  this.style.fill = "rgba(255, 0, 200, 1)";
}
function headsetUnHighlight() {
  console.log("headUnHighlight");
  this.style.fill = "#f9b4d3";
}
// farveskift hue
hue.addEventListener("mouseover", hueHighlight);
hue.addEventListener("mouseout", hueUnHighlight);
function hueHighlight() {
  console.log("hueHighlight");
  this.style.fill = "rgba(255, 0, 200, 1)";
}
function hueUnHighlight() {
  console.log("hueUnHighlight");
  this.style.fill = "#fddf5a";
}
// farveskift Phone
phone.addEventListener("mouseover", phoneHighlight);
phone.addEventListener("mouseout", phoneUnHighlight);
function phoneHighlight() {
  console.log("phoneHighlight");
  this.style.fill = "rgba(255, 0, 200, 1)";
}
function phoneUnHighlight() {
  console.log("phoneUnHighlight");
  this.style.fill = "#000";
}
// farveskift sko
sko.addEventListener("mouseover", shoeHighlight);
sko.addEventListener("mouseout", shoeUnHighlight);
function shoeHighlight() {
  console.log("shoeHighlight");
  this.style.fill = "rgba(255, 0, 200, 1)";
}
function shoeUnHighlight() {
  console.log("shoeUnHighlight");
  this.style.fill = "#b66db9";
}

// faktaboks indhold headset
head.addEventListener("click", headsetInfo);

function headsetInfo() {
  console.log("headsetInfo");

  animateBoxes();

  overskrift.textContent = "Når beatet overdøver virkeligheden";
  brodtekst.textContent = "Du var midt i dit yndlingsnummer, verden forsvandt - og så gjorde balancen også. Resultat: 1-0 til asfalten.? Høretelefoner gør dig døv for trafikken, uanset om du er på 2, 4 eller flere hjul. Og det går stærkt, når du ikke hører bilen, der dytter bag dig.";
  efficiency.innerHTML = "<h3>Fakta: Tænk lige en ekstra gang</h3><ul><li>30 % af unge, der kommer til skade på el-løbehjul, hørte musik under kørslen.</li><li>Lav lyd = højere chance for at overleve uden skrammer</li><li>Du mister op mod 70 % af din opmærksomhed, når du har musik i ørene</li></ul>";

  requirement.innerHTML = "<h3>Husk:</h3><ul><li>Du kan ikke trykke undo på en real-life remix</li><li>“Jeg hørte det ikke” er ikke en god undskyldning på skadestuen</li></ul>";
}

// faktaboks indhold hue
hue.addEventListener("click", hueInfo);

function hueInfo() {
  console.log("hueInfo");

  animateBoxes();

  overskrift.textContent = "Den glemte helt";
  brodtekst.textContent = "“Jeg skal jo ikke så langt, den ødelægger min frisure, den ligger der hjemme” - sagde alle, der endte på skadestuen. Men hey - frisuren sad jo perfekt, indtil du ramte fortovskanten. Uanset om du kører på rulleskøjter, cykel eller el-løbehjul, er hjelmen stadig den mest undervurderede superhelt.";
  efficiency.innerHTML = "<h3>Fakta:</h3><ul><li>7 ud af 10 hovedskader i trafikken kunne undgås med hjelm</li><li>80 % af dem, der falder uden hjelm, fortryder det bagefter</li></ul>";
  requirement.innerHTML = "<h3>Husk:</h3><p>Du ser faktisk sejere ud med hjelm end med hjernerystelse og ingen frisurer ser godt ud på skadestuen</p>";
}

// faktaboks indhold sko
sko.addEventListener("click", skoInfo);

function skoInfo() {
  console.log("skoInfo");

  animateBoxes();

  overskrift.textContent = "Den skjulte fjende";
  brodtekst.textContent = "Du ville bare lige rulle lidt - men ét løst snørebånd, og pludselig laver du parkour midt på cykelstien. Lyder fjollet? Jep. Men præcis sådan starter mange ulykker - også på el-løbehjul og cykel, hvor udstyr og manglende fokus sender folk i asfalten.";
  efficiency.innerHTML = "<h3>Fakta: Vidste du?</h3><ul><li>1 ud af 5 ulykker med el-løbehjul skyldes manglende vedligeholdelse</li><li>Løst styr, dårlige bremser eller snørebånd – alt kan vælte dig</li></ul>";
  requirement.innerHTML = "<h3>Husk:</h3><p>Et tjek før du triller = færre blå mærker og færre ambulancebesøg</p>";
}
// faktaboks indhold phone
phone.addEventListener("click", phoneInfo);

function phoneInfo() {
  console.log("phoneInfo");

  animateBoxes();

  overskrift.textContent = "Bare lige et hurtigt kig…";
  brodtekst.textContent = "En besked, et like - og BUM! du møder kantstenen frontalt. Telefoner og hjul er en farlig blanding, uanset om du ruller, cykler eller suser af sted på el-løbehjul.";
  efficiency.innerHTML = "<h3>Fakta: Vidste du?</h3><ul><li>4 ud af 10 ulykker med el-løbehjul sker pga. distraktion (typisk telefon)</li><li>Et blik på skærmen tager 5 sekunder – nok til at køre 10 meter i blinde</li><li>Multitasking + hjul = dårlig kombo</li></ul>";
  requirement.innerHTML = "<h3>Husk:</h3><p>Den notifikation kan godt vente (din hjerne takker dig senere)</p>";
}

function animateBoxes() {
  efficiency.classList.remove("hide");
  efficiency.classList.add("fadeIn");

  requirement.classList.remove("hide");
  requirement.classList.add("fadeIn");

  requirement.addEventListener("animationend", cleanUp);
}

function cleanUp() {
  console.log("cleanUp");
  requirement.removeEventListener("animationend", cleanUp);
  efficiency.classList.remove("fadeIn");
  requirement.classList.remove("fadeIn");
}
