const btn_open1 = document.querySelector("#cta_open1");
const btn_open2 = document.querySelector("#cta_open2");
const btn_open3 = document.querySelector("#cta_open3");
const btn_open4 = document.querySelector("#cta_open4");
const btn_close1 = document.querySelector(".close_btn1");
const btn_close2 = document.querySelector(".close_btn2");
const btn_close3 = document.querySelector(".close_btn3");
const btn_close4 = document.querySelector(".close_btn4");
const dialog1 = document.querySelector("#dialog1");
const dialog2 = document.querySelector("#dialog2");
const dialog3 = document.querySelector("#dialog3");
const dialog4 = document.querySelector("#dialog4");
//----------------------------------------
//dialog 1
btn_open1.addEventListener("click", openModal1);
btn_close1.addEventListener("click", closeModal1);

// prøv først at finde .dialog-article1, ellers brug selve dialogen
const crashImg = dialog1.querySelector(".crash-img");
let hasAnimated = false;

// lyt direkte på dialogen (som vi gør scrollable i CSS)
dialog1.addEventListener("scroll", () => {
  // debug – hvis du åbner devtools, kan du se det her:
  // console.log("scrollTop:", dialog1.scrollTop);

  if (dialog1.scrollTop > 50 && !hasAnimated) {
    hasAnimated = true;

    crashImg.classList.remove("animate");
    void crashImg.offsetWidth; // force reflow
    crashImg.classList.add("animate");
  }
});

function openModal1() {
  // reset scroll-animation hver gang dialogen åbnes
  hasAnimated = false;
  crashImg.classList.remove("animate");

  dialog1.classList.remove("fadeOut");
  dialog1.classList.add("fadeIn");
  dialog1.showModal();
  dialog1.scrollTop = 0;
}

function closeModal1() {
  dialog1.classList.remove("fadeIn");
  dialog1.classList.add("fadeOut");

  dialog1.addEventListener(
    "animationend",
    () => {
      dialog1.close();
      dialog1.classList.remove("fadeOut");
    },
    { once: true }
  );
}

//----------------------------------------
//dialog 2
btn_open2.addEventListener("click", openModal2);
btn_close2.addEventListener("click", closeModal2);

function openModal2() {
  dialog2.classList.remove("fadeOut");
  dialog2.classList.add("fadeIn");
  dialog2.showModal();
  dialog2.scrollTop = 0;
}

function closeModal2() {
  dialog2.classList.remove("fadeIn");
  dialog2.classList.add("fadeOut");

  dialog2.addEventListener(
    "animationend",
    () => {
      dialog2.close();
      dialog2.classList.remove("fadeOut");
    },
    { once: true }
  );
}
//----------------------------------------
//dialog 3
btn_open3.addEventListener("click", openModal3);
btn_close3.addEventListener("click", closeModal3);

function openModal3() {
  dialog3.classList.remove("fadeOut");
  dialog3.classList.add("fadeIn");
  dialog3.showModal();
  hideResults();
  hideReset();
  dialog3.scrollTop = 0;
}

function closeModal3() {
  dialog3.classList.remove("fadeIn");
  dialog3.classList.add("fadeOut");

  dialog3.addEventListener(
    "animationend",
    () => {
      dialog3.close();
      dialog3.classList.remove("fadeOut");
    },
    { once: true }
  );
}
//----------------------------------------
//dialog 4
btn_open4.addEventListener("click", openModal4);
btn_close4.addEventListener("click", closeModal4);

function openModal4() {
  dialog4.classList.remove("fadeOut");
  dialog4.classList.add("fadeIn");
  dialog4.showModal();
  dialog4.scrollTop = 0;
}

function closeModal4() {
  dialog4.classList.remove("fadeIn");
  dialog4.classList.add("fadeOut");

  dialog4.addEventListener(
    "animationend",
    () => {
      dialog4.close();
      dialog4.classList.remove("fadeOut");
    },
    { once: true }
  );
}

//----------------------------------------
//quiz
const form = document.querySelector("#quiz-form");
const btn = document.querySelector("#quiz-btn");
const resetBtn = document.querySelector("#quiz-reset-btn");
const resultA = document.querySelector(".resultatA");
const resultB = document.querySelector(".resultatB");
const hint1 = document.querySelector(".hint1");
const hint2 = document.querySelector(".hint2");
const hint3 = document.querySelector(".hint3");
const hint4 = document.querySelector(".hint4");
const q1 = document.querySelectorAll('[name="q1"]');
const q2 = document.querySelectorAll('[name="q2"]');
const q3 = document.querySelectorAll('[name="q3"]');
const q4 = document.querySelectorAll('[name="q4"]');
const reset1 = document.querySelector("#quiz-reset1-btn");

function hideResults() {
  resultA.classList.add("hide");
  resultB.classList.add("hide");
}

function hideReset() {
  resetBtn.classList.add("hide");
  reset1.classList.add("hide");
}

function hideHint() {
  hint1.classList.add("hide");
  hint2.classList.add("hide");
  hint3.classList.add("hide");
  hint4.classList.add("hide");
}

// skjul alt fra start
hideResults();
hideReset();
hideHint();
btn.addEventListener("click", showResults);

function showResults() {
  const questions = ["q1", "q2", "q3", "q4"];

  let aCount = 0;
  let bCount = 0;

  // Gå igennem hvert spørgsmål ét ad gangen
  for (let i = 0; i < questions.length; i++) {
    const selected = form.querySelector(`input[name="${questions[i]}"]:checked`);

    // Hvis et spørgsmål ikke er besvaret
    if (!selected) {
      alert("Svar venligst på alle spørgsmål først 😊");
      return; // stop koden her
    }

    // Tæl point
    if (selected.value.startsWith("a")) {
      aCount++;
    } else if (selected.value.startsWith("b")) {
      bCount++;
    }
  }

  // Skjul tidligere resultater
  hideResults();
  // Skjul den lille RESET, når vi viser resultatet

  reset1.classList.add("hide");

  // Vis resultat afhængigt af flest A eller B
  if (aCount > bCount) {
    resultA.classList.remove("hide");
  } else if (bCount > aCount) {
    resultB.classList.remove("hide");
  } else {
    alert("Uafgjort! Prøv at ændre dine svar lidt.");
  }

  // Vis reset-knappen
  resetBtn.classList.remove("hide");
}

// Funktion der håndterer ét spørgsmål
function setupHint(radios, hint) {
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      // Så snart der svares på noget → vis lille RESET
      reset1.classList.remove("hide");

      if (radio.value.startsWith("b")) {
        hint.classList.remove("hide");
      } else {
        hint.classList.add("hide");
      }
    });
  });
}
// Når der svares på spørgsmål 1 → styr hint1 osv.
setupHint(q1, hint1);
setupHint(q2, hint2);
setupHint(q3, hint3);
setupHint(q4, hint4);

resetBtn.addEventListener("click", resetForm);
function resetForm() {
  // skjul resultat og knap igen
  hideResults();
  hideReset();
  hideHint();
}

//heading animation//
window.addEventListener("load", () => {
  const img = document.querySelector("#riders-img");
  img.classList.add("animate");
});

const riders = document.querySelector("#riders-img");

function playEnter() {
  // fjern evt. exit-klasse
  riders.classList.remove("exit");
  // force reflow, så animation kan starte forfra
  void riders.offsetWidth;
  // tilføj enter-klasse
  riders.classList.add("enter");
}

function playExit() {
  riders.classList.remove("enter");
  void riders.offsetWidth;
  riders.classList.add("exit");
}

// 1) når siden loader → kør ind fra venstre
window.addEventListener("load", () => {
  playEnter();
});

let lastScrollY = window.scrollY;

// 2) når man scroller
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  // hvis man scroller NED forbi fx 50px → kør UD
  if (y > 20 && lastScrollY <= 20) {
    playExit();
  }

  // hvis man scroller OP igen til nær toppen → kør IND
  if (y <= 200 && lastScrollY > 200) {
    playEnter();
  }

  lastScrollY = y;
});
