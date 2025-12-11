const form = document.getElementById("bookingForm");
const msg = document.getElementById("resultMsg");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    msg.textContent = "Sending...";

    const formData = new FormData(form);

    const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    });

    if (res.ok) {
        msg.textContent = "Appointment request sent!";
        form.reset();
    } else {
        msg.textContent = "Something went wrong. Try again.";
    }
});
