/****form animationer*****/
/**spørgsmål hvad faldt du på */
document.querySelector(".ukendt").classList.add("hide");

document.querySelector("#hjul-select").addEventListener("change", showUkendt);

function showUkendt() {
  console.log("showUkendt");

  if (document.querySelector("#hjul-select").value == "hjul-other") {
    document.querySelector(".ukendt").classList.remove("hide");
  } else {
    document.querySelector(".ukendt").classList.add("hide");
  }
}
/**spørgsmål hvor slog du dig */
document.querySelector(".hurt-skjul").classList.add("hide");

document.querySelector("#andet").addEventListener("change", showHurtOther);

function showHurtOther() {
  console.log("showHurtOther");

  if (document.querySelector("#andet").checked) {
    document.querySelector(".hurt-skjul").classList.remove("hide");
  } else {
    document.querySelector(".hurt-skjul").classList.add("hide");
  }
}

/**hele form */
document.querySelector(".form-q-skjul").classList.add("hide");

document.querySelectorAll("input[name='fall']").forEach((radio) => {
  radio.addEventListener("change", showForm);
});

function showForm() {
  console.log("showForm");

  if (document.querySelector("#fallYes").checked) {
    document.querySelector(".form-q-skjul").classList.remove("hide");
  } else {
    document.querySelector(".form-q-skjul").classList.add("hide");
  }
}

/*lægehjælp1 */
document.querySelector(".doctor").classList.add("hide");
document.querySelector(".check-doctor-p").classList.add("hide");

document.querySelector("#check-doctor").addEventListener("change", showDoctor);
function showDoctor() {
  console.log("showDoctor");

  if (document.querySelector("#check-doctor").checked) {
    document.querySelector(".doctor").classList.remove("hide");
    document.querySelector(".check-doctor-p").classList.remove("hide");
  } else {
    document.querySelector(".doctor").classList.add("hide");
    document.querySelector(".check-doctor-p").classList.add("hide");
  }
}

//lægehjælp2
// Skjul alle beskeder når siden indlæses
hideAllMessages();
hideButtons();
//  hent knappen
const checkButton = document.querySelector("#doctor-check-btn");
const resetButton = document.querySelector("#doctor-reset-btn");
// knappen har class="hide" i HTML fra start

// lyt på alle checkboxe og vis/skjul knap
document.querySelectorAll(".doctor input[type='checkbox']").forEach((checkbox) => {
  checkbox.addEventListener("change", toggleCheckButton);
});

// når man klikker på knappen, så laver vi dit “gamle” check
checkButton.addEventListener("click", checkDoctorBoxes);

//skjul knapper fra start
function hideButtons() {
  const checkButton = document.querySelector("#doctor-check-btn");
  const resetButton = document.querySelector("#doctor-reset-btn");
  checkButton.classList.add("hide");
  resetButton.classList.add("hide");
}
// Skjul alle beskeder når siden indlæses
function hideAllMessages() {
  document.querySelector("#doctor-skjul1").classList.add("hide");
  document.querySelector("#doctor-skjul2").classList.add("hide");
  document.querySelector("#doctor-skjul3").classList.add("hide");
  document.querySelector("#doctor-skjul4").classList.add("hide");
}

function toggleCheckButton() {
  const checkboxes = document.querySelectorAll(".doctor input[type='checkbox']");
  const anyChecked = Array.from(checkboxes).some((cb) => cb.checked);

  if (anyChecked) {
    checkButton.classList.remove("hide");
  } else {
    checkButton.classList.add("hide");
    hideAllMessages(); // hvis man fjerner alt, fjern også beskederne
  }
}

function checkDoctorBoxes() {
  // Skjul alle beskeder hver gang vi tjekker
  hideAllMessages();

  // Grupper efter alvorlighed
  const seriousIds = ["blodM", "blod-head", "bones", "noMove", "help"];
  const concussionIds = ["head-doctor", "svimmel"];
  const mediumIds = ["blodS", "doctor-skrab"];
  const mildIds = ["home"];

  // Tjek hvilke der er valgt
  const isSerious = seriousIds.some((id) => document.querySelector("#" + id).checked);
  const isConcussion = concussionIds.some((id) => document.querySelector("#" + id).checked);
  const isMedium = mediumIds.some((id) => document.querySelector("#" + id).checked);
  const isMild = mildIds.some((id) => document.querySelector("#" + id).checked);

  // Prioritet: alvorlig > hjernerystelse > mellem > mild
  if (isSerious) {
    document.querySelector("#doctor-skjul1").classList.remove("hide");
    resetButton.classList.remove("hide");
  } else if (isConcussion) {
    document.querySelector("#doctor-skjul4").classList.remove("hide");
    resetButton.classList.remove("hide");
  } else if (isMedium) {
    document.querySelector("#doctor-skjul2").classList.remove("hide");
    resetButton.classList.remove("hide");
  } else if (isMild) {
    document.querySelector("#doctor-skjul3").classList.remove("hide");
    resetButton.classList.remove("hide");
  }
}
//reset button
resetButton.addEventListener("click", resetButton1);

function resetButton1() {
  hideAllMessages();
  hideButtons();
}

//range

const slider = document.getElementById("pinlig");

function updateSliderColor() {
  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, #00467f ${value}%, transparent ${value}%)`;
}

slider.addEventListener("input", updateSliderColor);
updateSliderColor();
