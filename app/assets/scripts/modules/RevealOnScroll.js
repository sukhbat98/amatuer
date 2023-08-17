import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
  constructor(els, revealPoint) {
    this.revealPoint = revealPoint
    this.itemsToReaveal = els;
    this.browserHeight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle)
    window.addEventListener("resize", debounce(() => {
      console.log("checking")
      this.browserHeight = window.innerHeight
    }, 300))
  }

  calcCaller() {
    this.itemsToReaveal.forEach(el => {
      if (el.isRevealed == false) {
        this.calculateIfScrolledTo(el)
      }
    })
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (scrollPercent < this.revealPoint) {
        el.classList.add("reveal-item--is-visible");
        el.isRevealed = true;
        // scroll шалгаж байгаа хэсгийг зогсоож байна
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle)
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReaveal.forEach(el => {
      el.classList.add("reveal-item");
      el.isRevealed = false;
    })
    // хамгийн сүүлийн элемент мөн гэдгийг тодорхойллоо
    this.itemsToReaveal[this.itemsToReaveal.length - 1].isLastItem = true
  }
};

export default RevealOnScroll;
