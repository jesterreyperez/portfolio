// This function opens or closes the mobile menu and changes the icon style
function toggleMenu() {
  const menu = document.querySelector(".menu-links"); // Find the menu container with the class "menu-links"
  const icon = document.querySelector(".hamburger-icon"); // Find the hamburger icon with the class "hamburger-icon"
  menu.classList.toggle("open"); // Add or remove the "open" class on the menu to show or hide it
  icon.classList.toggle("open"); // Add or remove the "open" class on the icon to animate it
}
