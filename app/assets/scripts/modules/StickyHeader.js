import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector(".navbar");
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  }

  events() {
    window.addEventListener("scroll", throttle(() => this.runOnScroll(),  200))
    window.addEventListener("resize", debounce(() => {
      this.browserHeight = window.innerHeight
    }, 300))
  }

  runOnScroll() {
    this.checkScrollDirection();

    if (window.scrollY > 60) {
      this.siteHeader.classList.add("navbar__header-dark")
    } else {
      this.siteHeader.classList.remove("navbar__header-dark")
    }

  }

  checkScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollDirection = "down";
    } else {
      this.scrollDirection = "up";
    }

    this.previousScrollY = window.scrollY;
  }
};

export default StickyHeader;
