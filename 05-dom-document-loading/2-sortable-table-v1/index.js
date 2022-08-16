export default class SortableTable {
  constructor(headerConfig = [], data = []) {
    this.headerConfig = headerConfig;
    this.data = data;

    this.render();
  }
  render() {
    
    
    console.log(this.header);

  }

  get header() {
    return `
    <div data-element="header" class="sortable-table__header sortable-table__row">
      ${this.getHeaderInfo()}
    </div>
  `;
  }

  getHeaderInfo() {
    return this.headerConfig
    .map(item => {
      if (item.template) {
        return item.template();
      }
      else {
        return `<div class="sortable-table__cell" data-id="${item.id}" data-sortable="${item.sortable}" data-order="asc">
        <span>${item.title}</span>
      </div>`;
      }

    })
    .join("");
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

