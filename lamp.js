const lamp = document.getElementById("lamp");
const body = document.body;

lamp.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light-on");
});
