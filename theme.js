let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");
let lightTheme = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkTheme = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function change(event) {
    if (event.key === "Enter") {
        let themeUserInputElval = themeUserInputEl.value;
        if (themeUserInputElval === "Light") {
            bgContainerEl.style.backgroundImage = lightTheme;
            headingEl.style.color = "#014d40";
        } else if (themeUserInputElval === "Dark") {
            bgContainerEl.style.backgroundImage = darkTheme;
            headingEl.style.color = "#ffffff";

        } else {
            alert("Enter the valid Theme");
        }

    }
}
themeUserInputEl.addEventListener("keydown", change);