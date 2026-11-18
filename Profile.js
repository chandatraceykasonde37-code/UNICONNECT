// ================================
// UniConnect Zambia Profile Page
// profile.js
// ================================


// Welcome Message
window.onload = function () {

    console.log("Welcome to UniConnect Zambia!");

    animateCards();

    animateProgress();

};


// Animate Dashboard Cards
function animateCards() {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "0.6s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }, index * 200);

    });

}



// Animate Progress Bar
function animateProgress() {

    const progress = document.querySelector(".progress-bar");

    progress.style.width = "0%";

    setTimeout(() => {

        progress.style.transition = "2s";
        progress.style.width = "85%";

    }, 500);

}



// Edit Profile Button
const editButton = document.querySelector(".edit-btn");

if (editButton) {

    editButton.addEventListener("click", function () {

        alert("Profile editing will be available soon!");

    });

}



// Profile Picture Button
const cameraButton = document.querySelector(".edit-photo");

if (cameraButton) {

    cameraButton.addEventListener("click", function () {

        alert("Upload a new profile picture.");

    });

}



// Quick Action Buttons
const actions = document.querySelectorAll(".actions a");

actions.forEach(action => {

    action.addEventListener("mouseenter", () => {

        action.style.transform = "scale(1.05)";

    });

    action.addEventListener("mouseleave", () => {

        action.style.transform = "scale(1)";

    });

});



// Dashboard Card Hover
const dashboardCards = document.querySelectorAll(".card");

dashboardCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 15px 30px rgba(138,43,226,.4)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});



// Activity Items Animation
const activities = document.querySelectorAll(".activity li");

activities.forEach((item, index) => {

    item.style.opacity = "0";

    setTimeout(() => {

        item.style.transition = "0.5s";
        item.style.opacity = "1";

    }, index * 300);

});