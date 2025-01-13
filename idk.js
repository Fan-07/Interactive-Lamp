const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
    toggleButton.classList.toggle("hidden");
});