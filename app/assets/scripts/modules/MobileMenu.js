class MobileMenu {
  constructor() {
    this.navbarToggler = document.querySelector(".navbar__toggler");
    this.navbarContent = document.querySelector(".navbar__collapse");

    this.events();
  }

  events() {
    this.navbarToggler.addEventListener("click", () => this.toggleTheMenu())
  }

  toggleTheMenu() {
    this.navbarContent.classList.toggle("navbar__is-visible")
  }

}

export default MobileMenu;
