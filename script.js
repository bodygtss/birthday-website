/* =========================
   PAGE CONTROL
========================= */

function showPage(pageId) {

    // Get all pages
    const pages = document.querySelectorAll(".page");

    // Hide every page
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show requested page
    document.getElementById(pageId).classList.add("active");

}


/* =========================
   OPEN GIFT
========================= */

function openGift() {

    showPage("lovePage");

}


/* =========================
   SHOW PASSCODE
========================= */

function showPasscode() {

    showPage("passcodePage");

}


/* =========================
   PASSCODE
========================= */

let enteredCode = "";


/*
    CHANGE THIS NUMBER
    to whatever password
    you want.
*/

const correctCode = "2006";


function pressNumber(number) {

    // Don't allow more than 4 numbers
    if (enteredCode.length >= 4) {
        return;
    }

    // Add number
    enteredCode += number;

    // Update dots
    updateDots();


    // Check password
    if (enteredCode.length === correctCode.length) {

        if (enteredCode === correctCode) {

            correctPassword();

        } else {

            wrongPassword();

        }

    }

}


/* =========================
   UPDATE PASSWORD DOTS
========================= */

function updateDots() {

    const dots = document.querySelectorAll("#dots span");

    dots.forEach(function(dot, index) {

        if (index < enteredCode.length) {

            dot.classList.add("filled");

        } else {

            dot.classList.remove("filled");

        }

    });

}


/* =========================
   WRONG PASSWORD
========================= */

function wrongPassword() {

    document.getElementById("wrong").innerText =
        "Wrong passkey, try again ❤️";

    setTimeout(function() {

        enteredCode = "";

        updateDots();

        document.getElementById("wrong").innerText = "";

    }, 1000);

}


/* =========================
   CORRECT PASSWORD
========================= */

function correctPassword() {

    document.getElementById("wrong").innerText =
        "You got it! ";

    setTimeout(function() {

        showPage("loadingPage");

        setTimeout(function() {

            showPage("photosPage1");

        }, 2500);

    }, 700);

}


/* =========================
   CLEAR PASSWORD
========================= */

function clearCode() {

    enteredCode = "";

    updateDots();

    document.getElementById("wrong").innerText = "";

}


/* =========================
   SHOW LETTER
========================= */

function showLetter() {
    showPage("letterPage");
    startLetterTyping();
}




function watchFromBeginning() {
    location.reload();
}
