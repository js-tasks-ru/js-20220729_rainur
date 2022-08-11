export default class ColumnChart {
  constructor(columnChartParam) {
    this.columnChartParam = columnChartParam;
    this.render();
  }
  
  render () {
    const elemDiv = document.createElement("div");
    elemDiv.classList.add("column-chart");
    elemDiv.style = "--chart-height: 50";

    //ссылка
    const columnChartParamLink = (this.columnChartParam.link != undefined ? `<a href="/${this.columnChartParam.link}" class="column-chart__link">View all</a>` : ``);

    //заголовок
    const columnChartParamFormatHeading = (this.columnChartParam.formatHeading != undefined ? this.columnChartParam.formatHeading(this.columnChartParam.value) : this.columnChartParam.value);
    
    let columnChartParamData = this.columnChartParam.data;
    let elemDivInfo = ``;
    if (columnChartParamData.length === 0) {
      //если массив пустой, то добавим заглушку
      elemDiv.classList.add("column-chart_loading");
      elemDivInfo = `
        <div class="column-chart__title">
          ${this.columnChartParam.label}
          ${columnChartParamLink}
        </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">
            ${columnChartParamFormatHeading}
          </div>
          <div data-element="body" class="column-chart__chart">

          </div>
        </div>
        `;
    } 
    else {
      let elemDivInfoChart = ``;
      for (let data of columnChartParamData)
      {
        elemDivInfoChart += `<div style="--value: ${data}"></div>`;
      }

      elemDivInfo = ` 
        <div class="column-chart__title">
            ${this.columnChartParam.label}
            ${columnChartParamLink}
        </div>
        <div class="column-chart__container">
            <div data-element="header" class="column-chart__header">${columnChartParamFormatHeading}</div>
            <div data-element="body" class="column-chart__chart">
            ${elemDivInfoChart}
            </div>
        </div>
        `;
    }



    elemDiv.innerHTML = elemDivInfo;
    this.element = elemDiv;
  }
}
