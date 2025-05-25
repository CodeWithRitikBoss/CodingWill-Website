// **** Start important lines of code. ****

// All function code is here.

// This function is ued to generate random colors in dark mode.
function getRandomDarkColor() {
    let val1 = Math.ceil(100 - Math.random() * 255);
    let val2 = Math.ceil(100 - Math.random() * 255);
    let val3 = Math.ceil(100 - Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
// This function is ued to generate random colors in light mode.
function getRandomlightColor() {
    let val1 = Math.ceil(100 + Math.random() * 255);
    let val2 = Math.ceil(100 + Math.random() * 255);
    let val3 = Math.ceil(100 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// This code is used to Right Click eventListener on the body.
let body = document.body
body.addEventListener("contextmenu", () => {
    alert("Don't hack us by Right click please!!")
})

// This code is used to "Free Course" Click eventListener button.
let freeCoursesButton = document.getElementById("freeCourses")
freeCoursesButton.addEventListener("click", () => {
    alert("I was clicked (Free Courses)")
})
// This code is used to "Explore More" Click eventListener button.
let exploreMoreButton = document.getElementById("exploreMoreButton")
exploreMoreButton.addEventListener("click", () => {
    alert("I was clicked (Emplore More)")
})

// This code is used to change airNab color reandomly.
setInterval(() => {
    document.getElementById("airNav").style.backgroundColor = getRandomDarkColor();
}, 2000)

// This code is used to change websiteName color reandomly.
setInterval(() => {
    // document.getElementById("logoName").style.color = getRandomLightColor();
    document.getElementById("logoName").style.color = getRandomlightColor();
}, 1000)

// These lines of code is used to change body color by double clicking anywhere on body.
let section3BackgroundColorChange = document.querySelector("html")
a = true;
section3BackgroundColorChange.addEventListener("dblclick", ()=>{
    if (a) {
        section3BackgroundColorChange.style.backgroundColor = "#09090B";
        a = false
    }else {
        section3BackgroundColorChange.style.backgroundColor = "white";
        a = true
    }
})











// **** End important lines of code. ****

