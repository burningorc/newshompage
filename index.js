function reveal(){
    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.querySelector("body");
    mobileMenu.style.display = "block";
    body.style.backgroundColor = "hsl(233, 8%, 79%)";
}
function closed(){
    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.querySelector("body");
    mobileMenu.style.display = "none";
    body.style.backgroundColor = "white";
}