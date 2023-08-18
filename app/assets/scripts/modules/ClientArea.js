import axios from 'axios';

const url = "https://eloquent-gnome-da60ce.netlify.app/.netlify/functions/secret-page"

class ClientArea {
  constructor() {
    this.injectHMTL();
    this.form = document.querySelector(".client-area__form");
    this.field = document.querySelector(".client-area__input");
    this.contentArea = document.querySelector(".client-area__content-area");
    this.events();
  }

  events() {
    window.addEventListener("submit", e => {
      e.preventDefault();
      this.sendRequest();
    })
  }

  sendRequest() {
    axios
      .post(
        url,
        {
          password: this.field.value,
        }
      )
      .then((response) => {
        this.form.remove();
        this.contentArea.innerHTML = response.data;
      })
      .catch(() => {
        this.contentArea.innerHTML = `<p class="client-area__error">Таны оруулсан нууц үг буруу байна. Дахин оролдоно уу!</p>`;
        this.field.value = '';
        this.field.focus();
      })
  }

  injectHMTL() {
    document.body.insertAdjacentHTML("beforeend", `
    <div class="client-area">
      <div class="wrapper wrapper-medium">
        <h2 class="section-title section-title--blue">Хэрэглэгчийн тусгай хуудас</h2>
        <form action="" class="client-area__form">
          <input type="text" class="client-area__input" placeholder="Нууц үгээ бичнэ үү" >
          <button class="btn btn--orange">Нэвтрэх</button>
        </form>
        <div class="client-area__content-area"></div>
      </div>
    </div>
    `)
  }
}

export default ClientArea;
