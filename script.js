function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

/* Scroll Animation */
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
function openModal(type) {
    const modal = document.getElementById("modal");
    const body = document.getElementById("modal-body");

    if(type === "ecommerce") {
        body.innerHTML = `
        <h2>E-Commerce Platform UI</h2>
        <p>Features product grid, cart sidebar, and authentication system.</p>
        <div style="height:300px;background:linear-gradient(135deg,#38bdf8,#0ea5e9);border-radius:15px;"></div>
        `;
    }

    if(type === "hospital") {
        body.innerHTML = `
        <h2>Hospital Booking Dashboard</h2>
        <p>Admin panel with patient management and appointment tracking.</p>
        <div style="height:300px;background:linear-gradient(135deg,#22c55e,#16a34a);border-radius:15px;"></div>
        `;
    }

    if(type === "task") {
        body.innerHTML = `
        <h2>Task Management Interface</h2>
        <p>Minimal productivity layout with drag-and-drop task system.</p>
        <div style="height:300px;background:linear-gradient(135deg,#a855f7,#7e22ce);border-radius:15px;"></div>
        `;
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
