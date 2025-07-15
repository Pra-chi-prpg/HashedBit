function swapTheme() {
    let appDiv = document.getElementById("app");
    let button = document.getElementById("swap");

    if (appDiv.classList.contains("day")) {
        appDiv.classList.replace("day", "night");
        button.classList.replace("button_day", "button_night");
    } else {
        appDiv.classList.replace("night", "day");
        button.classList.replace("button_night", "button_day");
    }
}
