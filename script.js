// ================= MOBILE NAV TOGGLE =================
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}

// ================= PROJECT MODAL =================
function openProject(id) {
    document.getElementById("projectModal").style.display = "block";

    let sections = document.querySelectorAll(".project-detail");
    sections.forEach(sec => sec.style.display = "none");

    document.getElementById(id).style.display = "block";
}

function closeProject() {
    document.getElementById("projectModal").style.display = "none";
}

// close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};