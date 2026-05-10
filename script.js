const menuButton = document.querySelector(".menu-btn");
const siteNav = document.querySelector(".site-nav");
const cookieNotice = document.getElementById("cookie-notice");

menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
    if (event.target.tagName !== "A") {
        return;
    }

    siteNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
});

if (localStorage.getItem("bangbyte-cookie-choice")) {
    cookieNotice.classList.add("is-hidden");
}

cookieNotice.addEventListener("click", (event) => {
    const choice = event.target.dataset.cookieChoice;

    if (!choice) {
        return;
    }

    localStorage.setItem("bangbyte-cookie-choice", choice);
    cookieNotice.classList.add("is-hidden");
});
