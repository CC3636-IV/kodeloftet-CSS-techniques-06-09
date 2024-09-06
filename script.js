function toggleTheme() {
    console.log("Theme button clicked")

    let htmlElement = document.querySelector("html")
    console.log(htmlElement.dataset.theme)

    let currentTheme = htmlElement.dataset.theme

    if (currentTheme === "dark") {
        htmlElement.dataset.theme = "light"
    } else {
        htmlElement.dataset.theme = "dark"
    }
}

let themebutton = document.getElementById("toggle-theme")
themebutton.addEventListener("click", toggleTheme)