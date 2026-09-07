// ========================================
// JOKA HOTEL - JAVASCRIPT
// ========================================


// 1. Booking Form
// ========================================

const bookingForm = document.querySelector(".booking form");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;


    // Check required fields

    if (
        name === "" ||
        email === "" ||
        checkin === "" ||
        checkout === "" ||
        guests === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }


    // Check dates

    if (checkout <= checkin) {
        alert("Check-out date must be after check-in date.");
        return;
    }


    // Successful booking message

    alert(
        "Thank you, " +
        name +
        "! Your booking request has been received."
    );


    // Clear form

    bookingForm.reset();

});


// 2. Smooth Navigation
// ========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {

            event.preventDefault();

            const targetSection =
                document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// 3. Book Now Buttons
// ========================================

const bookButtons =
    document.querySelectorAll(
        ".book-btn, .hero-btn, .room-card a"
    );

bookButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const target =
            document.querySelector("#booking");

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// 4. Gallery Image Click
// ========================================

const galleryImages =
    document.querySelectorAll(".gallery-container img");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        alert("You selected this hotel image.");

    });

});


// 5. Welcome Message
// ========================================

console.log(
    "Welcome to Joka Hotel website!"
);