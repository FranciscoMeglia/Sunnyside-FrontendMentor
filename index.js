const nav = document.getElementById("nav")
const navBtn = document.getElementById("navBtn")

navBtn.addEventListener("click", () => {
    nav.classList.toggle("navMobile")

    if (nav.className === "navMobile") {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflowY = "scroll"
    }
})