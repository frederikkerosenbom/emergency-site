//darkmode
const html = document.querySelector("html");
const themeBtn = document.querySelector(".slider");
const img = document.querySelector("#main-disclamer-content .riders");
const title = document.querySelector("#main-disclamer-content .head-img-2");

const svgTexts = document.querySelectorAll(".svg-text");
const hasPhone = document.querySelector("#hotspotPhone");

if (localStorage.getItem("darkmode") == "true") {
  document.querySelector("#checkbox").checked = true;
  toggleTheme();
}

function toggleTheme() {
  html.classList.toggle("dark");
  imgFilter(); //forside billede filter funktionen
}

themeBtn.addEventListener("click", toggleTheme);

function imgFilter() {
  const isDark = html.classList.contains("dark");

  if (isDark) {
    localStorage.setItem("darkmode", "true");
  } else {
    localStorage.setItem("darkmode", "false");
  }
  // IMG
  if (img) {
    img.classList.toggle("dark-img-filter", isDark);
    img.classList.toggle("light-img-filter", !isDark);
  }

  // TITLE
  if (title) {
    title.classList.toggle("dark-img-filter", isDark);
    title.classList.toggle("light-img-filter", !isDark);
  }

  // SVG-TEKSTER

  if (svgTexts.length > 0) {
    svgTexts.forEach((svg) => {
      svg.classList.toggle("dark-img-filter", isDark);
      // intet andet – i light mode har de bare ingen filter-klasse
    });
  }
  if (hasPhone) {
    hasPhone.style.fill = isDark ? "#f9b4d3" : "#000";
  }
}
