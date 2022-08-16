export default class NotificationMessage {
  constructor(
    label = "",
    data = {}) {
    this.data = data;
    this.label = label;
    this.render();
  }

  get template() {

    return `<div class="notification ${this.data.type}" style="--value:${this.data.duration / 1000}s">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.data.type}</div>
      <div class="notification-body">
        ${this.label}
      </div>
    </div>
  </div>`;
  }


  render() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = this.template;
    this.element = wrapper.firstElementChild;
  }
  show() {
    document.body.append(this.element);
    setTimeout(() => this.remove(), this.data.duration);

  }
  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
