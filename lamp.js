const lamp = document.getElementById("lamp");
const body = document.body;

let isOn = false;

lamp.addEventListener("click", () => {
    isOn = !isOn;

    if (isOn) {
        body.classList.add("light-on");
        lamp.textContent = "💡";
    } else {
        body.classList.remove("light-on");
        lamp.textContent = "💡";
    }
});
