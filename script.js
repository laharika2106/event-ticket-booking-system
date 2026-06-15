// Book Ticket Button Effect

const bookButtons = document.querySelectorAll(".event-card button");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.textContent = "Ticket Selected ✓";

        button.style.backgroundColor = "green";

    });

});


// Form Validation

const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name =
    form.querySelector('input[type="text"]').value.trim();

    const email =
    form.querySelector('input[type="email"]').value.trim();

    const tickets =
    form.querySelector('input[type="number"]').value;

    if(name === "" || email === "" || tickets === ""){

        alert("Please fill all fields.");

        return;
    }

    alert("Your ticket has been booked successfully!");

    form.reset();

});


// Show / Hide Event Details

const toggleBtn =
document.getElementById("toggleDetails");

const details =
document.querySelector(".event-details");

toggleBtn.addEventListener("click", () => {

    if(details.style.display === "none"){

        details.style.display = "block";

        toggleBtn.textContent = "Hide Details";

    }
    else{

        details.style.display = "none";

        toggleBtn.textContent = "Show Details";

    }

});