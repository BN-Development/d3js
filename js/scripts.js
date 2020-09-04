// CONSTANTS //

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const span = document.getElementsByClassName("close")[0];

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 80,
};

let width = 1000 - margin.left - margin.right;
let height = 550 - margin.top - margin.bottom;

let data = [
  { id: 1, title: "hello1", value: 98 },
  { id: 2, title: "some2", value: 1000 },
  { id: 3, title: "baboo3", value: 234 },
  { id: 4, title: "kiwi4", value: 134 },
  { id: 5, title: "banana5", value: 234 },
  { id: 6, title: "avocado6", value: 60 },
  { id: 7, title: "lemone", value: 567 },
  { id: 8, title: "orange8", value: 900 },
  { id: 9, title: "baboo9", value: 800 },
  { id: 10, title: "kiwi10", value: 645 },
  { id: 11, title: "banana11", value: 212 },
  { id: 12, title: "avocado12", value: 30 },
];

let x = d3.scaleLinear().range([0, width]);

const barOffset = 10;

// CONSTANTS END//
// MODAL //
span ? span.onclick = function () {
  closeModal()
} : null;

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal()
  }
};

function openModal3(item) {
  let i = inititalTreemapData.find(el => el.id === item.data.id)
  const data = `
    <div class='content-data'>
      <h2>${i.ticker} ${i.sleeve}</h2>
      <div><p>change YTD (%) </p> <span>${i.changeYTD}</span></div>
      <div><p>% of Portfolio</p> <span>${i.portfolio}</span></div>
    </div>
  `;
  modalContent.insertAdjacentHTML("beforeEnd", data);

  // this.classList.add("open");
  modal.classList.add("modal-open");
  document.body.classList.add("scroll-disable");
  makeModalChart3(item);
}

function openModal2(item) {
  const data = `
    <div class='content-data'>
      <h2>${item.ticker}</h2>
      <div><p>Net Yeild (%) </p> <span>${item.netYeild}</span></div>
      <div><p>Divident Growth (%) </p> <span>${item.dividentGrowth}</span></div>
      <div><p>% of Portfolio</p> <span>${item.portfolio}</span></div>
    </div>
  `;
  modalContent.insertAdjacentHTML("beforeEnd", data);

  this.classList.add("open");
  modal.classList.add("modal-open");
  document.body.classList.add("scroll-disable");
  makeModalChart2(item)
}

function openModal1(item) {
  const data = `
    <div class='content-data'>
      <h2>${item.ticker}</h2>
      <div><p>PM </p> <span>${item.pm}</span></div>
      <div><p>RP </p> <span>${item.rp}</span></div>
      <div><p>PM Per Holding </p> <span>${item.pmPerHolding}</span></div>
    </div>
  `;
  modalContent.insertAdjacentHTML("beforeEnd", data);

  this.classList.add("open");
  modal.classList.add("modal-open");
  document.body.classList.add("scroll-disable");
  makeModalChart1(item)
}

function openModal(item) {
  const data = `
    <div class='content-data'>
      <h2>${item.analyst} ${item.symbol}</h2>
      <div><p>price ($)</p> <span>325.01</span></div>
      <div><p>MKTVAL ($K) </p> <span>44,200</span></div>
      <div><p>% of portfolio </p> <span>${item.percent}</span></div>
    </div>
  `;
  modalContent.insertAdjacentHTML("beforeEnd", data);

  this.classList.add("open");
  modal.classList.add("modal-open");
  document.body.classList.add("scroll-disable");
  makeModalChart(item)
}

const closeModal = () => {
  document.body.classList.remove("scroll-disable");
  modal.classList.remove("modal-open");
  document.querySelector(".open") && document.querySelector(".open").classList.remove("open");

  document
    .querySelector(".content-data") && document
    .querySelector(".content-data")
    .parentNode.removeChild(document.querySelector(".content-data"));

  document
    .querySelector("#simple-svg") && setTimeout(() => {
      document
        .querySelector("#simple-svg")
        .parentNode.removeChild(document.querySelector("#simple-svg"))
    }, 300);
}

document.querySelector('.modal-svg').addEventListener('click', closeModal)

// MODAL END //

let initialData = [{
    id: 1,
    analyst: 'JPSG',
    symbol: 'NVDA',
    percent: 1.2
  },
  {
    id: 2,
    analyst: 'JPSG',
    symbol: 'GOOGL',
    percent: 5.7
  },
  {
    id: 3,
    analyst: 'JPSG',
    symbol: 'GOOG',
    percent: 7.5
  },
  {
    id: 4,
    analyst: 'CRDG',
    symbol: 'QCOM',
    percent: 6.6
  },
  {
    id: 5,
    analyst: 'CRDG',
    symbol: 'AMAT',
    percent: 2.1
  },
  {
    id: 6,
    analyst: 'CRDG',
    symbol: 'REGN',
    percent: 0.5
  },
  {
    id: 7,
    analyst: 'IDS',
    symbol: 'PCAR',
    percent: 2.0
  },
  {
    id: 8,
    analyst: 'IDS',
    symbol: 'NTES',
    percent: 7.0
  },

  {
    id: 9,
    analyst: 'ALXN',
    symbol: 'ATVI',
    percent: 1.6
  },
  {
    id: 10,
    analyst: 'ALXN',
    symbol: 'MSFT',
    percent: 5.7
  },
  {
    id: 11,
    analyst: 'ALXN',
    symbol: 'TSLA',
    percent: 1.5
  },

  {
    id: 12,
    analyst: 'JESS',
    symbol: 'SGEN',
    percent: 5.0
  },
  {
    id: 13,
    analyst: 'JESS',
    symbol: 'FB',
    percent: 3.2
  },

  {
    id: 14,
    analyst: 'CARJ',
    symbol: 'EXPE',
    percent: 3.8
  },
  {
    id: 15,
    analyst: 'CARJ',
    symbol: 'NFLX',
    percent: 3.5
  },

  {
    id: 16,
    analyst: 'NXAA',
    symbol: 'CHTR',
    percent: 6.1
  },
  {
    id: 17,
    analyst: 'NXAA',
    symbol: 'MCHP',
    percent: 1.0
  },

  {
    id: 18,
    analyst: 'KAIM',
    symbol: 'AAPL',
    percent: 6.4
  },
  {
    id: 19,
    analyst: 'CHEE',
    symbol: 'EBAY',
    percent: 5.7
  },
  {
    id: 20,
    analyst: 'CYDS',
    symbol: 'SWKS',
    percent: 5.5
  },
  {
    id: 21,
    analyst: 'TRV',
    symbol: 'SIRI',
    percent: 5.2
  },
  {
    id: 22,
    analyst: 'DQF',
    symbol: 'GILD',
    percent: 4.5
  },
  {
    id: 23,
    analyst: 'SPAF',
    symbol: 'BIIB',
    percent: 3.7
  },
  {
    id: 24,
    analyst: 'JMKB',
    symbol: 'ZM',
    percent: 2.6
  },
  {
    id: 25,
    analyst: 'TOHB',
    symbol: 'MCHP',
    percent: 2.3
  },
]

let dataAxis = []
let dataArr = []

const getPercentType = (arr) => {
  let n = 0;
  let b = arr.map((el) => {
    n = n + el.percent
    if (n < 33) {
      return {
        ...el,
        type: 1
      }
    } else if (n >= 33 && n <= 66) {
      return {
        ...el,
        type: 2
      }
    } else {
      return {
        ...el,
        type: 3
      }
    }
  })
  return b
}

const getTypes = (arr) => {
  let a = arr.map(el => { return { id: el.id, type: el.type } })
  let b = []
  for(let i = 0; i < initialData.length; i++) {
    let aa = a.find(el => el.id === initialData[i].id)
    let obj = {
      ...initialData[i], ...aa
    }
    b.push(obj)
  }
  dataAxis = b
  return b
  // console.log(b)


  // let c = []
  // let title = ''
  // let val = 0;
  // let data = []
  // b.map(el => {
  //   if(el.analyst === title) {
  //     val = val+el.percent
  //     data.push(el)
  //   } else {
  //     if(title && val){
  //       c.push({title, val, data})
  //     }
  //     title = el.analyst
  //     val = el.percent
  //     data = [el]
  //   }
  // })
  // c.push({title, val, data})

  // // console.log(c)
  // let d = c.sort((a, b) => b.val - a.val)
  // // console.log(d)
  // let h = []
  // d.map(el => {
  //   el.data.map(ell => h.push(ell))
  // })
  // console.log(h)
  // dataAxis = h
  // return h
}

const getStructuredObj = (arr) => {
  let a = {}
  arr.map(el => {
    let obj = {
      ...el
    };
    delete obj.analyst
    if (a[el.analyst]) {
      a[el.analyst].push(obj)
    } else {
      a[el.analyst] = []
      a[el.analyst].push(obj)
    }
  })
  return a
};

const getDx = () => {
  let title = ''
  let prev = 0
  let xxx = 0
  let yyy = 0
  let width = 0
  let total = 0

  let arr = []

  dataAxis.map(el => {
    if (title !== el.analyst) {
      if(title) {
        let obj = {
          total: total.toFixed(1),
          dx: xxx + width,
          dy: yyy-1,
        };
        arr.push(obj)
      }

      title = el.analyst;
      xxx = 0;
      yyy = yyy+1;
      prev = x(el.percent);
      width = x(el.percent);
      total = el.percent

    } else {
      xxx = prev+2
      prev = prev + x(el.percent)+2
      width = x(el.percent)
      total = total + el.percent
    }
    arr.push({ ...el, dx: !xxx ? 0 : xxx, dy: yyy-1, width: width })
  });
  let obj = {
    total: total.toFixed(1),
    dx: xxx + width,
    dy: yyy - 1,
  };
  arr.push(obj);
  dataAxis = arr;
};

const getDataFormatted = () => {
  let a = [...initialData].sort((a, b) => b.percent - a.percent);
  let b = getPercentType(a);
  let bb = getTypes(b);
  let c = getStructuredObj(bb);
  dataArr = Object.entries(c);
};

getDataFormatted();

let delta = 1
const changeInitialData = () => {
  let a = initialData.map(el => { return {...el, percent: +((Math.random()*10).toFixed(1))+1}})

  let b = a.reduce((acc, el) => acc+el.percent, 0)
  let c = a.map(el => { return {...el, percent: +(el.percent/(b/100).toFixed(1))}})
  let d = c.reduce((acc, el) => acc+el.percent, 0)
  let g = c.map(el => { return {...el, percent: +((el.percent - (d-100)/25).toFixed(1))}})

  initialData = g
  getDataFormatted();
  draw();
  let loop = document.querySelector('#loop-ico')
  loop.style.transform = `rotate(${delta*180}deg)`
  delta=delta+1
}


document.querySelector('#loop-ico') && document.querySelector('#loop-ico').addEventListener('click', changeInitialData)
const barHeight = height / dataArr.length;
const axisHeight = height + barOffset * dataArr.length;

const svg = d3
  .select(".d3")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", axisHeight + margin.top + margin.bottom + 50)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.right})`);

// LEGEND START //
let legend = svg.append('g')

legend
  .append("circle")
  .attr("cx", 10)
  .attr("cy", axisHeight + margin.top + margin.bottom - 41)
  .attr("r", 6)
  .style("fill", "#16777b")
legend
  .append("circle")
  .attr("cx", 210)
  .attr("cy", axisHeight + margin.top + margin.bottom - 41)
  .attr("r", 6)
  .style("fill", "#509582")
legend
  .append("circle")
  .attr("cx", 410)
  .attr("cy", axisHeight + margin.top + margin.bottom - 41)
  .attr("r", 6)
  .style("fill", "#acd4b8")

legend
  .append("text")
  .attr("x", 23)
  .attr("y", axisHeight + margin.top + margin.bottom - 40)
  .text("In Top Third Of RP")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle")
legend
  .append("text")
  .attr("x", 223)
  .attr("y", axisHeight + margin.top + margin.bottom - 40)
  .text("In Middle Third Of RP")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle")
legend
  .append("text")
  .attr("x", 423)
  .attr("y", axisHeight + margin.top + margin.bottom - 40)
  .text("In Bottom Third Of RP")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle")
// LEGEND END //

// AXIS START //
const y = d3.scaleBand().range([-margin.top, axisHeight]);
const yAxis = d3.axisLeft().scale(y);
svg
  .append("g")
  .attr("class", "axis-y")
  .call(yAxis)

const xAxis = d3.axisBottom().scale(x).ticks(20);
svg
  .append("g")
  .attr("class", "axis-x")
  .attr("transform", `translate(0, ${axisHeight})`)
  .call(xAxis);

const div = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
// AXIS END //

// HELPERS FOR CHART //
const valueRangeTo = (d) => {
  let a = 0;
  d[1].map((el) => (a = a + el.percent));
  return Math.ceil(a) + 1;
};

const getBlockColor = (d) => {
  switch (d.type) {
    case 1:
      return "#16777b";
    case 2:
      return "#509582";
    case 3:
      return "#acd4b8";
    default:
      return "";
  };
};

const makeTooltips = (ind) => {
  d3.selectAll(".bar")
    .on("mouseover", function (d) {
      if (!d.total) {
        div.transition().duration(200).style("opacity", 0.9);
        div
          .html("<strong>" + d.percent + "%<br/>" + d.symbol + " </strong>")
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY - 28 + "px")
          .style('z-index', ind ? 100000 : '')
      };
    })
    .on("mouseout", function (d) {
      if (!d.total) {
        div.transition().duration(500).style("opacity", 0);
      }
    })
    .on("click", function (d) {
      if (!d.total) {
        div.transition().duration(200).style("opacity", 0);
      }
    });
}
// HELPERS FOR CHART END //

// MAKE CHART //
function draw() {
  const valueRange = [0, d3.max(dataArr, (d) => valueRangeTo(d))];

  x.domain(valueRange);
  y.domain(dataArr.map((d) => d[0]))
    .range([
      0,
      dataArr.length * barHeight + dataArr.length * barOffset,
    ]);

  // GET DX DY coord
  getDx(dataAxis)

  let bars = svg.selectAll(".bar").data(dataAxis);

  bars.exit().remove();

  // MAKE ELEMENTS
  let barsAdd = bars
    .enter()
    .append("g")
    .attr("class", "bar")
  let rect = barsAdd.append("rect").attr("class", "rect");
  let text = barsAdd.append("text").attr("class", "text");

  // console.log(dataArr)

  barsAdd.merge(bars)

  rect
    .attr("height", barHeight)
    .attr("width", (d) => d.width)
    .attr("x", (d) => d.dx)
    .attr("y", (d) => barOffset / 2 + d.dy * barHeight + d.dy * barOffset)
    .attr("fill", (d) => getBlockColor(d));
  text
    .style("z-index", 3)
    .html((d) => (!d.total ? d.width > 60 ? `${d.percent}% ${d.symbol}` : '' : `${d.total}%`))
    .attr("x", (d) => d.dx + 10)
    .attr(
      "y",
      (d) =>
        barOffset / 2 +
        d.dy * barHeight +
        d.dy * barOffset +
        (barHeight + barOffset) / 2
    )
    .style("fill", (d) => (d.total ? "black" : "white"))
    .style("font-weight", (d) => (d.total ? "bold" : ""))
    .style("cursor", (d) => (d.total ? "auto" : ""))
    .on('click', openModal)

  bars
    .select('.text')
    .style('fill-opacity', 0)
    // .style('fill', 'none')
    // .style('opacity', 0)
    // .transition()
    // .duration(20)
    .transition()
    .duration(400)
    .delay(500)
    .style("font-weight", (d) => (d.total ? "bold" : ""))
    .style("cursor", (d) => (d.total ? "auto" : ""))
    .text((d) => (!d.total ? d.width > 80 ? `${d.percent}% ${d.symbol}` : '' : `${d.total}%`))
    .attr("x", (d) => d.dx + 10)
    .attr(
      "y",
      (d) =>
        barOffset / 2 +
        d.dy * barHeight +
        d.dy * barOffset +
        (barHeight + barOffset) / 2
    )
    // .transition()
    // .duration(300)
    .style("fill", (d) => (d.total ? "black" : "white"))
    // .style('opacity', 1)
    .style('fill-opacity', 1)

  bars
    .select('.rect')
    .transition()
    .duration(1000)
    .attr("height", barHeight)
    .attr("width", (d) => d.width)
    .attr("x", (d) => d.dx)
    .attr("y", (d) => barOffset / 2 + d.dy * barHeight + d.dy * barOffset)
    .attr("fill", (d) => getBlockColor(d));

  // MAKE TOOLTIPS
  makeTooltips();

  // MAKE ACTUAL AXIS WITH CURRENT DATA
  svg
  .select(".axis-x")
  // .transition()
  .call(xAxis)
  .selectAll('text')
  .attr('dy', `20`);

  svg
  .select(".axis-y")
  .call(yAxis)
  .selectAll('text')
  .attr('x', `-15`)
  // .transition()
  // .duration(500)
  // .style('opacity', 0)
  // .transition()
  // .duration(500)
  // .style('opacity', 1)

  d3.selectAll(".rect").on("click", openModal);
}

draw();


const makeModalChart = (item) => {
  const d = document.querySelector('.d3').getBoundingClientRect()
  const svg = d3
    .select(".modal-svg")
    .append("svg")
    .attr('id', 'simple-svg')
    .attr("class", "d3")
    .style('margin-top', d.top)
    .style('margin-left', d.left)
    // .attr("class", "d3")
    .attr("width", width + margin.left + margin.right)
    .attr("height", axisHeight + margin.top + margin.bottom + 50)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.right})`);

  const valueRange = [0, d3.max(dataArr, (d) => valueRangeTo(d))];

  x.domain(valueRange);
  y.domain(dataArr.map((d) => d[0])).range([
    0,
    dataArr.length * barHeight + dataArr.length * barOffset,
  ]);

  let bars = svg.selectAll(".bar").data([item]);

  bars.exit().remove();

  // MAKE ELEMENTS
  let barsAdd = bars.enter().append("g").attr("class", "bar");
  let rect = barsAdd.append("rect").attr("class", "rect");
  let text = barsAdd.append("text").attr("class", "text");
  // let total = bars.append("text").attr("class", "total");

  barsAdd.merge(bars);

  rect
    .attr("height", barHeight)
    .attr("width", (d) => d.width)
    .attr("x", (d) => d.dx)
    .attr("y", (d) => barOffset / 2 + d.dy * barHeight + d.dy * barOffset)
    .attr("fill", (d) => getBlockColor(d));
  text
    .style("z-index", 3)
    .html((d) => (!d.total ? `${d.percent}% ${d.symbol}` : `${d.total}%`))
    .attr("x", (d) => d.dx + 10)
    .attr(
      "y",
      (d) =>
        barOffset / 2 +
        d.dy * barHeight +
        d.dy * barOffset +
        (barHeight + barOffset) / 2
    )
    .style("fill", (d) => (d.total ? "black" : "white"))
    .style("font-weight", (d) => (d.total ? "bold" : ""))
    .style("cursor", (d) => (d.total ? "auto" : ""));

  makeTooltips(true);
}

let initialPMRPData = [{
    id: 1,
    ticker: 'ATVI',
    rp: 1.7,
    pm: 1.4,
    pmPerHolding: 3
  },
  {
    id: 2,
    ticker: 'ADBE',
    rp: 2.3,
    pm: 3.2,
    pmPerHolding: 2
  },
  {
    id: 3,
    ticker: 'AMD',
    rp: 5.2,
    pm: 4.5,
    pmPerHolding: 2
  },
  {
    id: 4,
    ticker: 'ALXN',
    rp: 2.7,
    pm: 3.3,
    pmPerHolding: 1
  },
  {
    id: 5,
    ticker: 'ALGN',
    rp: 0.8,
    pm: 3.9,
    pmPerHolding: 3
  },
  {
    id: 6,
    ticker: 'GOOGL',
    rp: 0.0,
    pm: 0.7,
    pmPerHolding: 2
  },
  {
    id: 7,
    ticker: 'GOOG',
    rp: 4.0,
    pm: 0.0,
    pmPerHolding: 0
  },
  {
    id: 8,
    ticker: 'AMZN',
    rp: 3.0,
    pm: 0.0,
    pmPerHolding: 0
  },
  {
    id: 9,
    ticker: 'AMGN',
    rp: 3.5,
    pm: 5.9,
    pmPerHolding: 1
  },
  {
    id: 10,
    ticker: 'ADI',
    rp: 1.2,
    pm: 0.0,
    pmPerHolding: 1
  },
  {
    id: 11,
    ticker: 'AAPL',
    rp: 4.0,
    pm: 8.5,
    pmPerHolding: 3
  },
  {
    id: 12,
    ticker: 'AMAT',
    rp: 0.0,
    pm: 3.2,
    pmPerHolding: 3
  },
  {
    id: 13,
    ticker: 'ASML',
    rp: 3.3,
    pm: 0.0,
    pmPerHolding: 0
  },
  {
    id: 14,
    ticker: 'CTSH',
    rp: 4.6,
    pm: 0.0,
    pmPerHolding: 0
  },
  {
    id: 15,
    ticker: 'CMCSA',
    rp: 6.8,
    pm: 4.0,
    pmPerHolding: 3
  },
  {
    id: 16,
    ticker: 'CPRT',
    rp: 0.0,
    pm: 6.5,
    pmPerHolding: 2
  },
  {
    id: 17,
    ticker: 'COST',
    rp: 2.3,
    pm: 4.3,
    pmPerHolding: 1
  },
  {
    id: 18,
    ticker: 'CSX',
    rp: 1.7,
    pm: 0.0,
    pmPerHolding: 0
  },
  {
    id: 19,
    ticker: 'DXCM',
    rp: 0.0,
    pm: 2.2,
    pmPerHolding: 1
  },
  {
    id: 20,
    ticker: 'GOOG',
    rp: 1.1,
    pm: 0.0,
    pmPerHolding: 0
  },
  {
    id: 21,
    ticker: 'DLTR',
    rp: 4.6,
    pm: 4.0,
    pmPerHolding: 1
  },
  {
    id: 22,
    ticker: 'EBAY',
    rp: 3.4,
    pm: 3.4,
    pmPerHolding: 1
  },
  {
    id: 23,
    ticker: 'EA',
    rp: 6.3,
    pm: 0.7,
    pmPerHolding: 2
  },
  {
    id: 24,
    ticker: 'EXC',
    rp: 0.0,
    pm: 4.3,
    pmPerHolding: 1
  },
  {
    id: 25,
    ticker: 'EXPE',
    rp: 1.1,
    pm: 3.0,
    pmPerHolding: 2
  },
  {
    id: 26,
    ticker: 'FB',
    rp: 1.9,
    pm: 7.7,
    pmPerHolding: 3
  },
  {
    id: 27,
    ticker: 'MXIM',
    rp: 0.0,
    pm: 2.7,
    pmPerHolding: 3
  },
  {
    id: 28,
    ticker: 'MELI',
    rp: 0.0,
    pm: 2.6,
    pmPerHolding: 1
  },
  {
    id: 29,
    ticker: 'MCHP',
    rp: 1.9,
    pm: 3.5,
    pmPerHolding: 1
  },
  {
    id: 30,
    ticker: 'MU',
    rp: 3.7,
    pm: 0.0,
    pmPerHolding: 0
  },
  {
    id: 31,
    ticker: 'MSFT',
    rp: 0.2,
    pm: 0.2,
    pmPerHolding: 2
  },
  {
    id: 32,
    ticker: 'MRNA',
    rp: 2.7,
    pm: 2.0,
    pmPerHolding: 1
  },
  {
    id: 33,
    ticker: 'MDLZ',
    rp: 6.1,
    pm: 1.4,
    pmPerHolding: 3
  },
  {
    id: 34,
    ticker: 'MNST',
    rp: 5.3,
    pm: 2.8,
    pmPerHolding: 1
  },
  {
    id: 35,
    ticker: 'MSFT',
    rp: 3.1,
    pm: 0.0,
    pmPerHolding: 0
  },
  {
    id: 36,
    ticker: 'NTES',
    rp: 0.4,
    pm: 1.9,
    pmPerHolding: 2
  },
  {
    id: 37,
    ticker: 'WDAY',
    rp: 0.0,
    pm: 4.5,
    pmPerHolding: 2
  },
  {
    id: 38,
    ticker: 'WDC',
    rp: 5.0,
    pm: 0.0,
    pmPerHolding: 0
  },
  {
    id: 39,
    ticker: 'XEL',
    rp: 1.6,
    pm: 0.0,
    pmPerHolding: 0
  },
  {
    id: 40,
    ticker: 'XLNX',
    rp: 4.5,
    pm: 1.7,
    pmPerHolding: 1
  },
  {
    id: 41,
    ticker: 'ZM',
    rp: 0.0,
    pm: 2.0,
    pmPerHolding: 3
  },
]

let delta3 = 1
const changeInitialPMRPData = () => {
  let a = initialPMRPData.map((el) => {
    return {
      ...el,
      rp:
      // +(Math.random() * 7).toFixed(1),
        +(Math.random() * 7).toFixed(1) > 0.5 &&
        +(Math.random() * 7).toFixed(1) < 6.3
          ? +(Math.random() * 7).toFixed(1)
          : 0,
      pm:
      // +(Math.random() * 9).toFixed(1),
        +(Math.random() * 9).toFixed(1) > 0.5 &&
        +(Math.random() * 9).toFixed(1) < 7.8
          ? +(Math.random() * 9).toFixed(1)
          : 0,
      pmPerHolding: Math.round(Math.random() * 4),
    };
  });

  let b = a.reduce((acc, el) => acc + el.rp, 0);
  let bb = a.reduce((acc, el) => acc + el.pm, 0);
  let c = a.map((el) => {
    return {
      ...el,
      rp: +(el.rp / (b / 100).toFixed(1)),
      pm: +(el.pm / (bb / 100).toFixed(1)),
    };
  });
  // console.log(b, bb)
  let d = c.reduce((acc, el) => acc + el.rp, 0);
  let dd = c.reduce((acc, el) => acc + el.rp, 0);
  let g = c.map((el) => {
    return {
      ...el,
      rp: +(el.rp - (d - 100) / initialPMRPData.length).toFixed(1) > 0.2 ? +(el.rp - (d - 100) / initialPMRPData.length).toFixed(1) : 0,
      pm: +(el.pm - (dd - 100) / initialPMRPData.length).toFixed(1) > 0.2 ? +(el.pm - (dd - 100) / initialPMRPData.length).toFixed(1) : 0,
    };
  });

  let hhh = false

  let h = g.map(el => {
    if(!el.rp && !el.pm){
      if(hhh) {
        hhh = true
        return {...el, pm: +(Math.random()*2).toFixed(1)}
      } else {
        hhh = false
        return {...el, rp: +(Math.random()*2).toFixed(1), pmPerHolding: 0 }
      }
    }
    if(!el.pm){
      hhh = !hhh
      return {...el, pmPerHolding: hhh ? 1 : 0 }
    }
    if(!el.rp){
      hhh = !hhh
      return {...el, pmPerHolding: hhh ? 1 : 3 }
    }
    return el
  })
  // console.log(h)
  initialPMRPData = h;

  let loop = document.querySelector("#loop-ico-3");
  loop.style.transform = `rotate(${delta3 * 180}deg)`;
  delta3 = delta3 + 1;

  let rect = document.querySelector("#visible-rect");
  rect.style["pointer-events"] = "none";
  setTimeout(() => {
    rect.style["pointer-events"] = "all";
  }, 800);
  draw1();
};
height = 700 - margin.top - margin.bottom;
const axisHeight1 = height + barOffset;

// MAKE SVG //
const svg1 = d3
  .select(".d33")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", axisHeight1 + margin.top + margin.bottom + 50)
  // .call(
  //   d3.zoom().on("zoom", function () {
  //     svg1.attr("transform", d3.event.transform);
  //   })
  // )
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.right})`);

// LEGEND START //
let legend1 = svg1.append('g').attr('class', 'legend')
legend1
  .append("circle")
  .attr("cx", 10)
  .attr("cy", axisHeight1 + margin.top + margin.bottom - 41)
  .attr("r", 6)
  .style("fill", "#2856f0")
legend1
  .append("circle")
  .attr("cx", 160)
  .attr("cy", axisHeight1 + margin.top + margin.bottom - 41)
  .attr("r", 6)
  .style("fill", "#f5b429")
legend1
  .append("circle")
  .attr("cx", 350)
  .attr("cy", axisHeight1 + margin.top + margin.bottom - 41)
  .attr("r", 6)
  .style("fill", "#3dc6fd")
legend1
  .append("circle")
  .attr("cx", 500)
  .attr("cy", axisHeight1 + margin.top + margin.bottom - 41)
  .attr("r", 6)
  .style("fill", "#3c2396");
legend1
  .append("circle")
  .attr("cx", 680)
  .attr("cy", axisHeight1 + margin.top + margin.bottom - 41)
  .attr("r", 6)
  .style("fill", "#639d2d")


legend1
  .append("text")
  .attr("x", 23)
  .attr("y", axisHeight1 + margin.top + margin.bottom - 40)
  .text("Shared Holding")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle")
legend1
  .append("text")
  .attr("x", 173)
  .attr("y", axisHeight1 + margin.top + margin.bottom - 40)
  .text("Shared Holding (1 PM)")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle")
legend1
  .append("text")
  .attr("x", 363)
  .attr("y", axisHeight1 + margin.top + margin.bottom - 40)
  .text("RP Sole Holding")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle")
legend1
  .append("text")
  .attr("x", 513)
  .attr("y", axisHeight1 + margin.top + margin.bottom - 40)
  .text("Held by PMs not in RP")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle")
legend1
  .append("text")
  .attr("x", 693)
  .attr("y", axisHeight1 + margin.top + margin.bottom - 40)
  .text("Held by PMs not in RP (1 PM)")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle")
// LEGEND END //

// HELPERS FOR CHART //
const getMaxVal = () => {
  let pm = 0;
  let rp = 0;
  initialPMRPData.map(el => {
    if (pm < el.pm) {
      pm = el.pm
    };
    if (rp < el.rp) {
      rp = el.rp
    };
    return el
  });

  return pm >= rp ? Math.ceil(pm) + 1 : Math.ceil(rp) + 1
};

const getBlockColor1 = (d) => {
  let type = 1
  if (d.rp && d.pmPerHolding === 1) {
    type = 2;
  }
  if (d.rp && !d.pm && !d.pmPerHolding) {
    type = 3
  }
  if (!d.rp && d.pmPerHolding > 1) {
    type = 4;
  }
  if (!d.rp && d.pmPerHolding === 1) {
    type = 5;
  }
  switch (type) {
    case 1:
      return "#2856f0";
    case 2:
      return "#f5b429";
    case 3:
      return "#3dc6fd";
    case 4:
      return "#3c2396"; //"#6238fb";
    case 5:
      return "#639d2d";
    default:
      return "";
  };
};
// HELPERS FOR CHART END //

const x1 = d3.scaleLinear().range([0, width]);
const y1 = d3.scaleLinear().range([0, axisHeight1]);

const xAxis1 = svg1
  .append("g")
  .attr("class", "axis-x")
  .attr("transform", `translate(0, ${axisHeight1})`)
  .call(d3.axisBottom(x1));
let yAxis1 = svg1.append("g").attr("class", "axis-y").call(d3.axisLeft(y1));

function make_x_gridlines1() {
  return d3.axisBottom(x1).ticks(10).tickSize(-height).tickFormat("");
}

function make_y_gridlines1() {
  return d3.axisLeft(y1).ticks(10).tickSize(-width).tickFormat("");
}
let staff1 = svg1
  .append("g")
  .attr("class", "staff")
  .attr("clip-path", "url(#clip)");

let xGrid1 = staff1
  .append("g")
  .attr("class", "grid")
  .attr("transform", `translate(0, ${height + 10})`)
  .call(make_x_gridlines1());
// .attr("clip-path", "url(#clip)");

let yGrid1 = staff1.append("g").attr("class", "grid").call(make_y_gridlines1());
// .attr("clip-path", "url(#clip)");
let a1,
    b1
if (document.querySelector(".d33")){
  a1 = d3.select(".axis-y").node().getBBox();
  b1 = d3.select(".axis-x").node().getBBox();
}

// Add a clipPath: everything out of this area won't be drawn.
let defs1 = svg1
  .append("defs")
  .append("SVG:clipPath")
  .attr("id", "clip")
  .append("SVG:rect")
  .attr("width", b1 && b1.width)
  .attr("height", a1 && a1.height - 15)
  .attr("x", 0)
  .attr("y", 0);

staff1.append("line").attr("class", "line-x").attr("clip-path", "url(#clip)");
staff1.append("line").attr("class", "line-y").attr("clip-path", "url(#clip)");
staff1
  .append("line")
  .attr("class", "bissectrise")
  .attr("clip-path", "url(#clip)");

let rect1 = svg1
  .append("rect")
  .attr("width", width)
  .attr("height", axisHeight1)
  .style("fill", "none")
  .style("pointer-events", "all")
  .attr("class", "rect")
  .attr("id", "visible-rect")
  .attr("transform", "translate(0, 0)");

let kZoom = 1;
let zoomResetRP = undefined;
let updateDataRP = undefined;

// MAKE CHART //
function draw1() {
  x1.domain([-1, 10]);
  y1.domain([10, -1]);
  // x1.domain([-1, getMaxVal()]);
  // y1.domain([getMaxVal(), -1]);

  // // MAKE ACTUAL AXIS WITH CURRENT DATA
  svg1.select(".axis-x").selectAll("text").attr("dy", `20`);
  svg1.select(".axis-y").selectAll("text").attr("x", `-20`);

  // Set the zoom and Pan features: how much you can zoom, on which part, and what to do when there is a zoom
  var zoom = d3
    .zoom()
    .scaleExtent([1, 20]) // This control how much you can unzoom (x0.5) and zoom (x20)
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", updateChart);

  zoomResetRP = () => {
    rect1
      .transition()
      .duration(750)
      .call(zoom.transform, d3.zoomIdentity);
  };

  updateDataRP = () => {
    if(kZoom === 1){
      changeInitialPMRPData()
    } else {
      zoomResetRP()
      setTimeout(() => {
        changeInitialPMRPData()
      }, 650)
    }
  }

  rect1.call(zoom);

  let c = d3.select(".rect").node().getBBox();

  // MAKE RED LINE //
  svg1
    .select(".bissectrise")
    .attr("x1", 0)
    .attr("y1", Math.abs(c.height))
    .attr("x2", Math.abs(c.width))
    .attr("y2", 0);

  svg1
    .select(".line-x")
    .attr("x1", 0)
    .attr("y1", Math.abs(c.height))
    .attr("x2", 0)
    .attr("y2", 0);
  svg1
    .select(".line-y")
    .attr("x1", Math.abs(c.width))
    .attr("y1", Math.abs(c.height))
    .attr("x2", 0)
    .attr("y2", Math.abs(c.height));

  // A function that updates the chart when the user zoom and thus new boundaries are available
  function updateChart() {
    const c = d3.select(".rect").node().getBBox();
    // recover the new scale
    const newX = d3.event.transform.rescaleX(x1);
    const newY = d3.event.transform.rescaleY(y1);
    // zoom coefficient
    const k = d3.event.transform.k;
    kZoom = k;
    // update axes with these new boundaries
    xAxis1.call(d3.axisBottom(newX));
    yAxis1.call(d3.axisLeft(newY));

    xGrid1.call(
      d3
      .axisBottom(x1)
      .scale(newX)
      .ticks(10)
      .tickSize(-height)
      .tickFormat("")
    );
    yGrid1.call(
      d3
      .axisLeft(y1)
      .scale(newY)
      .ticks(10)
      .tickSize(-width)
      .tickFormat("")
    );

    let circleItem = svg1.selectAll(".circle");

    // update circle position
    circleItem
      .selectAll(".circle-main")
      .attr("cx", (d) => newX(d.pm))
      .attr("cy", (d) => newY(d.rp));
    circleItem
      .selectAll(".line-main")
      .attr("x1", (d) => newX(d.pm) + (d.rp ? 11 : 9))
      .attr("y1", (d) => (d.rp ? newY(d.rp) : newY(d.rp) - 3))
      .attr("x2", (d) => newX(d.pm) + 25)
      .attr("y2", (d) =>
        d.rp ? newY(d.rp) : newY(d.rp) - 10
      );
    circleItem
      .selectAll(".circle-small")
      .attr("cx", (d) => newX(d.pm) + 29)
      .attr("cy", (d) =>
        d.rp ? newY(d.rp) : newY(d.rp) - 11
      );
    circleItem
      .selectAll(".text-main")
      .attr("x", (d) => newX(d.pm) + 35)
      .attr("y", (d) =>
        d.rp ? newY(d.rp) + 5 : newY(d.rp) - 8
      );
    // .attr("y", (d) => (d.rp ? y(d.rp) + 5 : y(d.rp) - 8));

    svg1.select(".axis-x").selectAll("text").attr("dy", `20`);
    svg1.select(".axis-y").selectAll("text").attr("x", `-20`);

    svg1
      .select(".bissectrise")
      .attr("x2", newX(0))
      .attr("x1", newX(Math.abs(c.height)))
      .attr("y2", newY(0))
      .attr("y1", newY(Math.abs(c.height)));
    svg1
      .select(".line-x")
      .attr("x2", newX(0))
      .attr("x1", newX(0)); //.attr('y0', newY(1))
    svg1
      .select(".line-y")
      .attr("y2", newY(0))
      .attr("y1", newY(0)); //.attr('y0', newY(1))
  }

  // MAKE DATA ITEMS //
  let circles = svg1
    .selectAll(".circle")
    .data(initialPMRPData);
  circles.exit().remove();

  let circleItem = circles
    .enter()
    .append("g")
    .attr("class", "circle")
    .attr("clip-path", "url(#clip)")
    .on("click", openModal1);
  circleItem.merge(circles);

  circleItem
    .append("circle")
    .attr("class", "circle-main")
    .attr("id", (d) => d.id)
    .attr("cx", (d) => x1(d.pm))
    .attr("cy", (d) => y1(d.rp))
    .attr("r", 7)
    .style("fill", (d) => getBlockColor1(d));

  circleItem
    .append("line")
    .attr("class", "line-main")
    .attr("x1", (d) => x1(d.pm) + (d.rp ? 11 : 9))
    .attr("y1", (d) => (d.rp ? y1(d.rp) : y1(d.rp) - 3))
    .attr("x2", (d) => x1(d.pm) + 25)
    .attr("y2", (d) => (d.rp ? y1(d.rp) : y1(d.rp) - 10))
    .style("stroke", (d) => getBlockColor1(d))
    .style("stroke-dasharray", 1);

  circleItem
    .append("circle")
    .attr("class", "circle-small")
    .attr("cx", (d) => x1(d.pm) + 29)
    .attr("cy", (d) => (d.rp ? y1(d.rp) : y1(d.rp) - 11))
    .attr("r", 2)
    .style("stroke", (d) => getBlockColor1(d))
    .style("fill", "none");

  circleItem
    .append("text")
    .attr("class", "text-main")
    .html((d) => d.ticker)
    .style("font-size", 12)
    // .style("font-weight", "bold")
    .attr("x", (d) => x1(d.pm) + 35)
    .attr("y", (d) => (d.rp ? y1(d.rp) + 5 : y1(d.rp) - 8));

  rect1.call(zoom.transform, d3.zoomIdentity);

  // UPDATE DATA POSITION
  setTimeout(() => {
    circles
      .select(".circle-main")
      .transition()
      .duration(1000)
      .attr("cx", (d) => x1(d.pm))
      .attr("cy", (d) => y1(d.rp))
      .style("fill", (d) => getBlockColor1(d));
    circles
      .select(".line-main")
      .transition()
      .duration(1000)
      .attr("x1", (d) => x1(d.pm) + (d.rp ? 11 : 9))
      .attr("y1", (d) => (d.rp ? y1(d.rp) : y1(d.rp) - 3))
      .attr("x2", (d) => x1(d.pm) + 25)
      .attr("y2", (d) => (d.rp ? y1(d.rp) : y1(d.rp) - 10))
      .style("stroke", (d) => getBlockColor1(d));

    circles
      .select(".circle-small")
      .transition()
      .duration(1000)
      .attr("cx", (d) => x1(d.pm) + 29)
      .attr("cy", (d) => (d.rp ? y1(d.rp) : y1(d.rp) - 11))
      .style("stroke", (d) => getBlockColor1(d));

    circles
      .select(".text-main")
      .transition()
      .duration(1000)
      .attr("x", (d) => x1(d.pm) + 35)
      .attr("y", (d) => (d.rp ? y1(d.rp) + 5 : y1(d.rp) - 8));
  }, 300);
}
document.querySelector(".d33") && draw1();

// MAKE COMMENTS //
svg1
  .append("text")
  .attr("x", 808)
  .attr("y", axisHeight1 + margin.top + margin.bottom - 110)
  .text("% of PMs")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .style('fill', '#434348')
  .attr("alignment-baseline", "middle");
svg1
  .append("text")
  .attr("x", 5)
  .attr("y", -10)
  .text("% of RP")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .style('fill', '#434348')
  .attr("alignment-baseline", "middle");


const makeModalChart1 = (item) => {
  const d = document.querySelector('.d33').getBoundingClientRect()
  const svg = d3
    .select(".modal-svg")
    .append("svg")
    .attr('id', 'simple-svg')
    .attr("class", "d33")
    .style('margin-top', d.top)
    .style('margin-left', d.left)
    .attr("width", width + margin.left + margin.right)
    .attr("height", axisHeight1 + margin.top + margin.bottom + 50)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.right})`);

  // MAKE DATA ITEMS //
  let circles = svg.selectAll(".circle").data([item]);
  circles.exit().remove();

  let circleItem = circles
    .enter()
    .append("g")
    .attr("class", "circle")
    .attr("clip-path", "url(#clip)")
  // .on('click', closeModal);

  let initItem = document.getElementById(item.id)
  let newX = +initItem.getAttribute('cx')
  let newY = +initItem.getAttribute('cy')

  circleItem
    .append("circle")
    .attr("class", "circle-main")
    .attr("cx", newX)
    .attr("cy", newY)
    .attr("r", 7)
    .style("cursor", "auto")
    .style("fill", (d) => getBlockColor1(d))

  circleItem
    .append("line")
    .attr("class", "line-main")
    .attr("x1", d => newX + (d.rp ? 11 : 9))
    .attr("y1", d => d.rp ? newY : newY - 3)
    .attr("x2", newX + 25)
    .attr("y2", d => d.rp ? newY : newY - 10)
    .style("stroke", (d) => getBlockColor1(d))
    .style('stroke-dasharray', 1);

  circleItem
    .append("circle")
    .attr("class", "circle-small")
    .attr("cx", newX + 29)
    .attr("cy", d => d.rp ? newY : newY - 11)
    .attr("r", 2)
    .style("stroke", (d) => getBlockColor1(d))
    .style("fill", 'none');

  circleItem
    .append("text")
    .attr("class", "text-main")
    .html((d) => d.ticker)
    .style("font-size", 12)
    .style("cursor", "pointer")
    .attr("x", newX + 35)
    .attr("y", d => d.rp ? newY + 5 : newY - 8)
}

document
.querySelector(".reset-3") &&
document
.querySelector(".reset-3")
.addEventListener("click", zoomResetRP);

document.querySelector("#loop-ico-3") &&
document
.querySelector("#loop-ico-3")
.addEventListener("click", updateDataRP);

let initialOptimizerData = [{
    id: 1,
    ticker: "AAPL",
    portfolio: 17.6,
    netYeild: 1.5,
    dividentGrowth: -0.2,
  },
  {
    id: 2,
    ticker: "NUE",
    portfolio: 7.1,
    netYeild: 2.9,
    dividentGrowth: 0.8,
  },
  {
    id: 3,
    ticker: "CONS",
    portfolio: 5.1,
    netYeild: 0.7,
    dividentGrowth: 2.8,
  },
  {
    id: 4,
    ticker: "SCHF",
    portfolio: 19.3,
    netYeild: 0.1,
    dividentGrowth: 4.8,
  },
  {
    id: 5,
    ticker: "MET",
    portfolio: 5.2,
    netYeild: 0.4,
    dividentGrowth: 7.3,
  },
  {
    id: 6,
    ticker: "EMR",
    portfolio: 3.0,
    netYeild: 1.8,
    dividentGrowth: 5.1,
  },
  {
    id: 7,
    ticker: "JPM",
    portfolio: 4.6,
    netYeild: 2.1,
    dividentGrowth: 6.9,
  },
  {
    id: 8,
    ticker: "NFLX",
    portfolio: 5.1,
    netYeild: 1.5,
    dividentGrowth: 7.3,
  },
  {
    id: 9,
    ticker: "PVH",
    portfolio: 1.0,
    netYeild: 2.3,
    dividentGrowth: 9.8,
  },
  {
    id: 10,
    ticker: "CHD",
    portfolio: 0.5,
    netYeild: 4.0,
    dividentGrowth: 2.9,
  },
  {
    id: 11,
    ticker: "BDX",
    portfolio: 7.8,
    netYeild: 3.7,
    dividentGrowth: 8.2,
  },
  {
    id: 12,
    ticker: "HOG",
    portfolio: 4.1,
    netYeild: 4.9,
    dividentGrowth: 6.2,
  },
  {
    id: 13,
    ticker: "GRMN",
    portfolio: 1.7,
    netYeild: 5.3,
    dividentGrowth: 1.3,
  },
  {
    id: 14,
    ticker: "PPG",
    portfolio: 2.5,
    netYeild: 6.0,
    dividentGrowth: 7.8,
  },
  {
    id: 15,
    ticker: "CVX",
    portfolio: 7.3,
    netYeild: 6.9,
    dividentGrowth: 1.2,
  },
  {
    id: 16,
    ticker: "CMG",
    portfolio: 8.1,
    netYeild: 6.6,
    dividentGrowth: 7.7,
  },
];

let delta2 = 1;
let moveRed = false;

const changeInitialOptimizerData = () => {
  let a = initialOptimizerData.map((el) => {
    return {
      ...el,
      netYeild: Math.random()*7,
      dividentGrowth: Math.random()*10,
      portfolio: +(Math.random() * 10).toFixed(1) + 1
    };
  });

  let b = a.reduce((acc, el) => acc + el.portfolio, 0);
  let c = a.map((el) => {
    return {
      ...el,
      portfolio: +(el.portfolio / (b / 100).toFixed(1))
    };
  });
  let d = c.reduce((acc, el) => acc + el.portfolio, 0);
  let g = c.map((el) => {
    return {
      ...el,
      portfolio: +(el.portfolio - (d - 100) / 25).toFixed(1)
    };
  });

  initialOptimizerData = g;

  let loop = document.querySelector("#loop-ico-2");
  loop.style.transform = `rotate(${delta2 * 180}deg)`;
  delta2 = delta2 + 1;

  let rect = document.querySelector("#visible-rect");
  rect.style["pointer-events"] = 'none'
  setTimeout(() => {
    rect.style["pointer-events"] = "all";
  }, 800)
  moveRed = true;
  draw2(true);
}

// document.querySelector("#loop-ico-2") &&
//   document
//   .querySelector("#loop-ico-2")
//   .addEventListener("click", changeInitialOptimizerData);
height = 700 - margin.top - margin.bottom;
const axisHeight2 = height + barOffset;

// MAKE SVG //
const svg2 = d3
  .select(".d333")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", axisHeight2 + margin.top + margin.bottom + 50)
  // .call(
  //   d3.zoom().on("zoom", function () {
  //     svg2.attr("transform", d3.event.transform);
  //   })
  // )
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.right})`);

// LEGEND START //
let legend2 = svg2.append('g').attr('class', 'legend')
legend2
  .append("circle")
  .attr("cx", 10)
  .attr("cy", axisHeight2 + margin.top + margin.bottom - 41)
  .attr("r", 6)
  // .style('stroke', "#2856f0")
  // .style('stroke-width', 2)
  .style("fill", "#2856f0")
legend2
  .append("circle")
  .attr("cx", 160)
  .attr("cy", axisHeight2 + margin.top + margin.bottom - 41)
  .attr("r", 6)
  .style("fill", 'none')
  .style('stroke', '#aaacc2')
  .style('stroke-width', 2)
legend2
  .append("line")
  .attr("x1", 160 - 6)
  .attr("x2", 160 + 6)
  .attr("y1", axisHeight2 + margin.top + margin.bottom - 41)
  .attr("y2", axisHeight2 + margin.top + margin.bottom - 41)
  .style("fill", 'none')
  .style('stroke', '#aaacc2')
  .style('stroke-width', 2)


legend2
  .append("text")
  .attr("x", 23)
  .attr("y", axisHeight2 + margin.top + margin.bottom - 40)
  .text("Company")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle")
legend2
  .append("text")
  .attr("x", 173)
  .attr("y", axisHeight2 + margin.top + margin.bottom - 40)
  .text(`Percent of Portfolio (${d3.min(initialOptimizerData, d => d.portfolio)} - ${d3.max(initialOptimizerData, d => d.portfolio)})`)
  .style("font-size", "13px")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle")
// LEGEND END //

// TOOLTIP //
const div2 = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
// TOOLTIP END //

// HELPERS FOR CHART //
const getMaxVal2 = () => {
  let dividentGrowth = 0;
  let netYeild = 0;

  initialOptimizerData.map(el => {
    if (dividentGrowth < el.dividentGrowth) {
      dividentGrowth = el.dividentGrowth
    };
    if (netYeild < el.netYeild) {
      netYeild = el.netYeild
    };
    return el
  });
  return dividentGrowth >= netYeild ? Math.ceil(dividentGrowth) + 1 : Math.ceil(netYeild) + 1
};

const getMiddleVal = (key) => {
  let a = 0;
  a = initialOptimizerData.reduce((acc, el) => acc + ((el[key] / 100) * (el.portfolio / 100)), 0)
  return a * 100
}
// HELPERS FOR CHART END //

const x2 = d3.scaleLinear().range([0, width]);
const y2 = d3.scaleLinear().range([0, axisHeight2]);

const xAxis2 = svg2
  .append("g")
  .attr("class", "axis-x")
  .attr("transform", `translate(0, ${axisHeight2})`)
  .call(d3.axisBottom(x2));
let yAxis2 = svg2.append("g").attr("class", "axis-y").call(d3.axisLeft(y2));

function make_x_gridlines() {
  return d3.axisBottom(x2).ticks(10).tickSize(-height).tickFormat("");
}

function make_y_gridlines() {
  return d3.axisLeft(y2).ticks(10).tickSize(-width).tickFormat("");
}
let staff = svg2
  .append("g")
  .attr("class", "staff")
  .attr("clip-path", "url(#clip)");

let xGrid = staff
  .append("g")
  .attr("class", "grid")
  .attr("transform", `translate(0, ${height + 10})`)
  .call(make_x_gridlines())
// .attr("clip-path", "url(#clip)");

let yGrid = staff
  .append("g")
  .attr("class", "grid")
  .call(make_y_gridlines())
// .attr("clip-path", "url(#clip)");

let a, b;
if (document.querySelector(".d333")) {
  a = d3.select(".axis-y").node().getBBox();
  b = d3.select(".axis-x").node().getBBox();
}
// Add a clipPath: everything out of this area won't be drawn.
let defs = svg2
  .append("defs")
  .append("SVG:clipPath")
  .attr("id", "clip")
  .append("SVG:rect")
  .attr("width", b && b.width)
  .attr("height", a && a.height - 15)
  .attr("x", 0)
  .attr("y", 0);

staff.append("line").attr("class", "line-x").attr("clip-path", "url(#clip)");
staff.append("line").attr("class", "line-y").attr("clip-path", "url(#clip)");
staff
  .append("rect")
  .attr("class", "red-cube")
  .attr("width", 7)
  .attr("height", 7)
  .style("stroke", "red")
  .style("fill", "red")
  .attr(
    "transform",
    `translate(${x2(getMiddleVal("dividentGrowth"))}, ${y2(
      getMiddleVal("netYeild")
    )}) rotate(45)`
  )
  .attr("clip-path", "url(#clip)");

let rect = svg2
  .append("rect")
  .attr("width", width)
  .attr("height", axisHeight2)
  .style("fill", "none")
  .style("pointer-events", "all")
  .attr("class", "rect")
  .attr("id", "visible-rect")
  .attr("transform", "translate(0, 0)");

/////////////////////////////////////////////////////////////////////////////////

let zoomResetOpt = undefined;
let updateDataOpt = undefined;

// MAKE CHART //
function draw2() {
  // x2.domain([-1, getMaxVal2()]);
  // y2.domain([getMaxVal2(), -1]);
  x2.domain([-1, 11]);
  y2.domain([11, -1]);

  // // MAKE ACTUAL AXIS WITH CURRENT DATA
  svg2.select(".axis-x").selectAll("text").attr("dy", `20`);
  svg2.select(".axis-y").selectAll("text").attr("x", `-20`);

  // Set the zoom and Pan features: how much you can zoom, on which part, and what to do when there is a zoom
  var zoom = d3
    .zoom()
    .scaleExtent([1, 20]) // This control how much you can unzoom (x0.5) and zoom (x20)
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", updateChart);

  zoomResetOpt = () => {
    rect
      .transition()
      .duration(750)
      .call(zoom.transform, d3.zoomIdentity);
  };

  updateDataOpt = () => {
    if(kZoom === 1){
      changeInitialOptimizerData()
    } else {
      zoomResetOpt()
      setTimeout(() => {
        changeInitialOptimizerData()
      }, 650)
    }
  }

  // This add an invisible rect on top of the chart area. This rect can recover pointer events: necessary to understand when the user zoom
  rect.call(zoom);
  // now the user can zoom and it will trigger the function called updateChart

  let c = d3.select(".rect").node().getBBox();

  // MAKE LINES
  svg2
    .select(".line-x")
    .attr("x1", 0)
    .attr("y1", Math.abs(c.height))
    .attr("x2", 0)
    .attr("y2", 0);
  svg2
    .select(".line-y")
    .attr("x1", Math.abs(c.width))
    .attr("y1", Math.abs(c.height))
    .attr("x2", 0)
    .attr("y2", Math.abs(c.height));

  // A function that updates the chart when the user zoom and thus new boundaries are available
  function updateChart() {
    // recover the new scale
    const newX = d3.event.transform.rescaleX(x2);
    const newY = d3.event.transform.rescaleY(y2);
    // zoom coefficient
    const k = d3.event.transform.k;
    kZoom=k
    // console.log(k)

    // update axes with these new boundaries
    xAxis2.call(d3.axisBottom(newX));
    yAxis2.call(d3.axisLeft(newY));

    xGrid.call(
      d3
      .axisBottom(x2)
      .scale(newX)
      .ticks(10)
      .tickSize(-height)
      .tickFormat("")
    );
    yGrid.call(
      d3
      .axisLeft(y2)
      .scale(newY)
      .ticks(10)
      .tickSize(-width)
      .tickFormat("")
    );

    let circleItem = svg2.selectAll(".circle");

    // update circle position
    circleItem
      .selectAll(".circle-radius")
      .attr("cx", (d) => newX(d.dividentGrowth))
      .attr("cy", (d) => newY(d.netYeild));
    circleItem
      .selectAll(".circle-main")
      .attr("cx", (d) => newX(d.dividentGrowth))
      .attr("cy", (d) => newY(d.netYeild));
    circleItem
      .selectAll(".line-main")
      .attr("x1", (d) => newX(d.dividentGrowth) + 9)
      .attr("y1", (d) => newY(d.netYeild))
      .attr(
        "x2",
        (d) =>
        newX(d.dividentGrowth) +
        (20 > 3 * d.portfolio + 5 ?
          20 :
          3 * d.portfolio + 3)
      )
      .attr("y2", (d) => newY(d.netYeild));
    circleItem
      .selectAll(".circle-small")
      .attr(
        "cx",
        (d) =>
        newX(d.dividentGrowth) +
        (24 > 3 * d.portfolio + 5 + 4 ?
          24 :
          3 * d.portfolio + 3)
      )
      .attr("cy", (d) => newY(d.netYeild));
    circleItem
      .selectAll(".text-main")
      .attr(
        "x",
        (d) =>
        newX(d.dividentGrowth) +
        (30 > 3 * d.portfolio + 5 + 10 ?
          30 :
          3 * d.portfolio + 5 + 5)
      )
      .attr("y", (d) => newY(d.netYeild) + 5);

    svg2.select(".axis-x").selectAll("text").attr("dy", `20`);
    svg2.select(".axis-y").selectAll("text").attr("x", `-20`);

    svg2
      .select(".line-x")
      .attr("x2", newX(0))
      .attr("x1", newX(0)); //.attr('y0', newY(1))
    svg2
      .select(".line-y")
      .attr("y2", newY(0))
      .attr("y1", newY(0)); //.attr('y0', newY(1))

    if (moveRed) {
      moveRed = false
      svg2
        .select(".red-cube")
        .transition()
        .delay(300)
        .duration(1000)
        .attr(
          "transform",
          `translate(${newX(getMiddleVal("dividentGrowth"))}, ${newY(
          getMiddleVal("netYeild")
        )}) rotate(45)`
        );
    } else {
      svg2
        .select(".red-cube")
        .attr(
          "transform",
          `translate(${newX(getMiddleVal("dividentGrowth"))}, ${newY(
             getMiddleVal("netYeild")
           )}) rotate(45)`
        );
    };
  }

  // MAKE DATA ITEMS //
  let circles = svg2
    .selectAll(".circle")
    .data(initialOptimizerData);
  circles.exit().remove();

  let circleItem = circles
    .enter()
    .append("g")
    .attr("class", "circle")
    .attr("clip-path", "url(#clip)")
    .on("click", openModal2);
  circleItem.merge(circles);

  circleItem
    .append("circle")
    .attr("class", "circle-radius")
    .attr("id", (d) => d.id)
    .attr("cx", (d) => x2(d.dividentGrowth))
    .attr("cy", (d) => y2(d.netYeild))
    .attr("r", (d) => 3 * d.portfolio + 5)
    .style("fill", "#e3e8fa");
  circleItem
    .append("circle")
    .attr("class", "circle-main")
    .attr("id", (d) => d.id)
    .attr("cx", (d) => x2(d.dividentGrowth))
    .attr("cy", (d) => y2(d.netYeild))
    .attr("r", 5)
    .style("fill", "#2856f0");
  circleItem
    .append("line")
    .attr("class", "line-main")
    .attr("x1", (d) => x2(d.dividentGrowth) + 9)
    .attr("y1", (d) => y2(d.netYeild))
    .attr(
      "x2",
      (d) =>
      x2(d.dividentGrowth) +
      (20 > 3 * d.portfolio + 5 ? 20 : 3 * d.portfolio + 3)
    )
    .attr("y2", (d) => y2(d.netYeild))
    .style("stroke", "#2856f0")
    .style("stroke-dasharray", 1);
  circleItem
    .append("circle")
    .attr("class", "circle-small")
    .attr(
      "cx",
      (d) =>
      x2(d.dividentGrowth) +
      (24 > 3 * d.portfolio + 5 + 4 ?
        24 :
        3 * d.portfolio + 3)
    )
    .attr("cy", (d) => y2(d.netYeild))
    .attr("r", 2)
    .style("stroke", "#2856f0")
    .style("fill", "none");
  circleItem
    .append("text")
    .attr("class", "text-main")
    .html((d) => d.ticker)
    .style("font-size", 12)
    .style("cursor", "pointer")
    .attr(
      "x",
      (d) =>
      x2(d.dividentGrowth) +
      (30 > 3 * d.portfolio + 5 + 10 ?
        30 :
        3 * d.portfolio + 5 + 5)
    )
    .attr("y", (d) => y2(d.netYeild) + 5);

  rect.call(zoom.transform, d3.zoomIdentity);
  // UPDATE DATA POSITION
  setTimeout(() => {
    circles
      .select(".circle-radius")
      .transition()
      .duration(1000)
      .attr("cx", (d) => x2(d.dividentGrowth))
      .attr("cy", (d) => y2(d.netYeild))
      .attr("r", (d) => 3 * d.portfolio + 5);
    circles
      .select(".circle-main")
      .transition()
      .duration(1000)
      .attr("cx", (d) => x2(d.dividentGrowth))
      .attr("cy", (d) => y2(d.netYeild));
    circles
      .select(".line-main")
      .transition()
      .duration(1000)
      .attr("x1", (d) => x2(d.dividentGrowth) + 9)
      .attr("y1", (d) => y2(d.netYeild))
      .attr(
        "x2",
        (d) =>
        x2(d.dividentGrowth) +
        (20 > 3 * d.portfolio + 5 ?
          20 :
          3 * d.portfolio + 3)
      )
      .attr("y2", (d) => y2(d.netYeild));
    circles
      .select(".circle-small")
      .transition()
      .duration(1000)
      .attr(
        "cx",
        (d) =>
        x2(d.dividentGrowth) +
        (24 > 3 * d.portfolio + 5 + 4 ?
          24 :
          3 * d.portfolio + 3)
      )
      .attr("cy", (d) => y2(d.netYeild));
    circles
      .select(".text-main")
      .transition()
      .duration(1000)
      .attr(
        "x",
        (d) =>
        x2(d.dividentGrowth) +
        (30 > 3 * d.portfolio + 5 + 10 ?
          30 :
          3 * d.portfolio + 5 + 5)
      )
      .attr("y", (d) => y2(d.netYeild) + 5);
  }, 300);
}

document.querySelector(".d333") && draw2();

// MAKE COMMENTS //
svg2
  .append("text")
  .attr("x", 732)
  .text("Grows of Dividend, %")
  .attr("y", axisHeight2 + margin.top + margin.bottom - 110)
  .style("font-size", "13px")
  .style("font-weight", "600")
  .style('fill', '#434348')
  .attr("alignment-baseline", "middle");

svg2
  .append("text")
  .attr("x", 5)
  .attr("y", -10)
  .text("Net Yield, %")
  .style("font-size", "13px")
  .style("font-weight", "600")
  .style('fill', '#434348')
  .attr("alignment-baseline", "middle");

const makeModalChart2 = (item) => {
  const d = document.querySelector('.d333').getBoundingClientRect()

  const svg = d3
    .select(".modal-svg")
    .append("svg")
    .attr('id', 'simple-svg')
    .attr("class", "d33")
    .style('margin-top', d.top)
    .style('margin-left', d.left)
    .attr("width", width + margin.left + margin.right)
    .attr("height", axisHeight2 + margin.top + margin.bottom + 50)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.right})`);

  // MAKE DATA ITEMS //
  let circles = svg.selectAll(".circle").data([item]);
  circles.exit().remove();

  let circleItem = circles
    .enter()
    .append("g")
    .attr("class", "circle")
    .attr("clip-path", "url(#clip)")
  // .on('click', closeModal);

  let initItem = document.getElementById(item.id)
  let newX = +initItem.getAttribute('cx')
  let newY = +initItem.getAttribute('cy')

  circleItem
    .append("circle")
    .attr("class", "circle-radius")
    .attr("id", d => d.id)
    .attr("cx", newX)
    .attr("cy", newY)
    .attr("r", (d) => 3 * d.portfolio + 5)
    .style("fill", "#e3e8fa")

  circleItem
    .append("circle")
    .attr("class", "circle-main")
    .attr("cx", newX)
    .attr("cy", newY)
    .attr("r", 5)
    .style("cursor", "auto")
    .style("fill", "#2856f0")

  circleItem
    .append("line")
    .attr("class", "line-main")
    .attr("x1", newX + 9)
    .attr("y1", newY)
    .attr("x2", d => newX + (20 > (3 * d.portfolio + 5) ? 20 : (3 * d.portfolio + 3)))
    .attr("y2", newY)
    .style("stroke", "#2856f0")
    .style('stroke-dasharray', 1);

  circleItem
    .append("circle")
    .attr("class", "circle-small")
    .attr("cx", d => newX + (24 > (3 * d.portfolio + 5 + 4) ? 24 : (3 * d.portfolio + 3)))
    .attr("cy", newY)
    .attr("r", 2)
    .style("stroke", "#2856f0")
    .style("fill", 'none');

  circleItem
    .append("text")
    .attr("class", "text-main")
    .html((d) => d.ticker)
    .style("font-size", 12)
    .style("cursor", "pointer")
    .attr("x", d => newX + (30 > (3 * d.portfolio + 5 + 10) ? 30 : (3 * d.portfolio + 5 + 5)))
    .attr("y", newY + 5)
}

document
.querySelector(".reset-2") &&
document
.querySelector(".reset-2")
.addEventListener("click", zoomResetOpt);

document.querySelector("#loop-ico-2") &&
  document
  .querySelector("#loop-ico-2")
  .addEventListener("click", updateDataOpt);

let inititalTreemapData = [
  {
    id: 1,
    ticker: 'AAPL',
    portfolio: 0.5,
    sleeve: '2626ML - PENY',
    changeYTD: -2.7,
    date: '01.09.2019',
  },
  {
    id: 2,
    ticker: 'CDNS',
    portfolio: 2.7,
    sleeve: '2626ML - PENY',
    changeYTD: -9.8,
    date: '01.09.2019',
  },
  {
    id: 3,
    ticker: 'CVX',
    portfolio: 6.0,
    sleeve: '2626ML - PENY',
    changeYTD: -5.1,
    date: '01.09.2019',
  },
  {
    id: 4,
    ticker: 'CHD',
    portfolio: 2.7,
    sleeve: '2626ML - PENY',
    changeYTD: 15.2,
    date: '01.09.2019',
  },
  {
    id: 5,
    ticker: 'HOG',
    portfolio: 5.8,
    sleeve: '2626ML - PENY',
    changeYTD: 16.0,
    date: '01.09.2019',
  },
  {
    id: 6,
    ticker: 'CINF',
    portfolio: 0.4,
    sleeve: '2626ML - PENY',
    changeYTD: -3.2,
    date: '01.09.2019',
  },
  {
    id: 7,
    ticker: 'MET',
    portfolio: 4.0,
    sleeve: '2626ML - PENY',
    changeYTD: 14.6,
    date: '01.09.2019',
  },
  {
    id: 8,
    ticker: 'JPM',
    portfolio: 4.7,
    sleeve: '2626ML - PENY',
    changeYTD: -9.3,
    date: '01.09.2019',
  },
  {
    id: 9,
    ticker: 'DFS',
    portfolio: 1.5,
    sleeve: '2626ML - PENY',
    changeYTD: 15.2,
    date: '01.09.2019',
  },
  {
    id: 10,
    ticker: 'GSRA',
    portfolio: 0.6,
    sleeve: '2626ML - PENY',
    changeYTD: 14.1,
    date: '01.09.2019',
  },
  {
    id: 11,
    ticker: 'CMG',
    portfolio: 2.5,
    sleeve: '2626ML - PENY',
    changeYTD: -17.3,
    date: '01.09.2019',
  },
  {
    id: 12,
    ticker: 'CCI',
    portfolio: 4.5,
    sleeve: '2626ML - PENY',
    changeYTD: 10.4,
    date: '01.09.2019',
  },
  {
    id: 13,
    ticker: 'DRI',
    portfolio: 3.9,
    sleeve: '2626ML - PENY',
    changeYTD: 15.2,
    date: '01.09.2019',
  },
  {
    id: 14,
    ticker: 'MPC',
    portfolio: 5.5,
    sleeve: '2626ML - PENY',
    changeYTD: -19.3,
    date: '01.09.2019',
  },
  {
    id: 15,
    ticker: 'ECL',
    portfolio: 5.1,
    sleeve: '2626ML - PENY',
    changeYTD: 11.2,
    date: '01.09.2019',
  },
  {
    id: 16,
    ticker: 'SCHW',
    portfolio: 3.6,
    sleeve: '2626ML - SHEL',
    changeYTD: 15.2,
    date: '01.09.2019',
  },
  {
    id: 17,
    ticker: 'CMG',
    portfolio: 2.7,
    sleeve: '2626ML - SHEL',
    changeYTD: 16.6,
    date: '01.09.2019',
  },
  {
    id: 18,
    ticker: 'EMR',
    portfolio: 3.7,
    sleeve: '2626ML - SHEL',
    changeYTD: 19.9,
    date: '01.09.2019',
  },
  {
    id: 19,
    ticker: 'GRMN',
    portfolio: 2.3,
    sleeve: '2626ML - SHEL',
    changeYTD: -14.2,
    date: '01.09.2019',
  },
  {
    id: 20,
    ticker: 'NFLX',
    portfolio: 2.4,
    sleeve: '2626ML - SHEL',
    changeYTD: -10.4,
    date: '01.09.2019',
  },
  {
    id: 21,
    ticker: 'JWN',
    portfolio: 4.7,
    sleeve: '2626ML - SHEL',
    changeYTD: -2.7,
    date: '01.09.2019',
  },
  {
    id: 22,
    ticker: 'PPG',
    portfolio: 2.7,
    sleeve: '2626ML - SHEL',
    changeYTD: 15.2,
    date: '01.09.2019',
  },
  {
    id: 23,
    ticker: 'XEC',
    portfolio: 5.7,
    sleeve: '2626ML - SHEL',
    changeYTD: -6.0,
    date: '01.09.2019',
  },
  {
    id: 24,
    ticker: 'MSFT',
    portfolio: 2.2,
    sleeve: '2626ML - SHEL',
    changeYTD: -4.1,
    date: '01.09.2019',
  },
  {
    id: 25,
    ticker: 'UNH',
    portfolio: 4.8,
    sleeve: '2626ML - SHEL',
    changeYTD: 12.8,
    date: '01.09.2019',
  },
  {
    id: 26,
    ticker: 'XEL',
    portfolio: 3.0,
    sleeve: '2626ML - SHEL',
    changeYTD: 2.8,
    date: '01.09.2019',
  },
  {
    id: 27,
    ticker: 'XYL',
    portfolio: 1.3,
    sleeve: '2626ML - SHEL',
    changeYTD: 18.1,
    date: '01.09.2019',
  },
  {
    id: 28,
    ticker: 'UPS',
    portfolio: 3.5,
    sleeve: '2626ML - SHEL',
    changeYTD: -14.4,
    date: '01.09.2019',
  },
  {
    id: 29,
    ticker: 'XLNS',
    portfolio: 3.5,
    sleeve: '2626ML - SHEL',
    changeYTD: -2.5,
    date: '01.09.2019',
  },
  {
    id: 30,
    ticker: 'DOV',
    portfolio: 3.5,
    sleeve: '2626ML - SHEL',
    changeYTD: -6.0,
    date: '01.09.2019',
  },
]

let treeData = {}

const getTreemapData = () => {
  let obj = {
    name: 'Base',
    children: []
  }

  let arr = []

  inititalTreemapData.map((el) =>
    arr.includes(el.sleeve) ? el : arr.push(el.sleeve)
  );
  // console.log(arr)

  arr2 = []

  arr.map(el => {
    let obj = {
      name: el,
      colname: 'level2',
      children: inititalTreemapData.filter(ell => ell.sleeve === el).sort((a, b) => b.portfolio - a.portfolio)
    }
    arr2.push(obj)
  })

  // console.log(arr2)
  obj.children = arr2
  treeData = obj
}

const changeData = () => {
  let arr = inititalTreemapData.map(el => { return {...el, changeYTD: +`${Math.round(Math.random()) ? '' : '-'}${(Math.random()*20).toFixed(1)}`} })
  // console.log(arr)
  inititalTreemapData = arr
  getTreemapData()
  draw5(true)
}

getTreemapData()
width = 1050 - margin.left - margin.right;
height = 1000 - margin.top - margin.bottom;
const axisHeight3 = height + barOffset;

const getColor = (d, m) => {
  let val = d.data.changeYTD
  if (m) {
    let a = inititalTreemapData.find(el => el.id === d.data.id)
    val = a.changeYTD
  }
  if (val < -8) {
    return "#FF8080";
  } else if (val >= -8 && val < -4) {
    return "#FFB4B3";
  } else if (val >= -4 && val < 0) {
    return "#EFC9C4";
  } else if (val >= 0 && val < 4) {
    return "#D0D6EB";
  } else if (val >= 4 && val < 8) {
    return "#84C196";
  } else if (val >= 8 && val < 12) {
    return "#6EA495";
  } else if (val >= 12) {
    return "#1D8488";
  }
};

const makeTooltips3 = (ind) => {
  d3.selectAll(".rect")
    .on("mouseover", function (d) {
      let i = inititalTreemapData.find(el => el.id === d.data.id)
      div.transition().duration(200).style("opacity", 1);
      // console.log(d);
      div
        .html("<strong>" + i.changeYTD + "%<br/>" + i.ticker + "</strong>")
        .style("font-size", "14px")
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY - 28 + "px")
        .style("z-index", ind ? 100000 : "");
    })
    .on("mouseout", function (d) {
      div.transition().duration(500).style("opacity", 0);
    })
    .on("click", function (d) {
      openModal3(d)
      div.transition().duration(200).style("opacity", 0);
    });
};

const svg3 = d3
  .select(".d3333")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", axisHeight3 + margin.top + margin.bottom + 50)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.right})`);

svg3
  .append("text")
  .attr("x", -margin.left)
  .attr("y", -20)
  .text("Treemap Result Attribution")
  .style("font-weight", "bold")
  .style("line-height", "120%")
  .style("font-size", "20px");

// LEGEND START //
let legend3 = svg3.append("g").attr("class", "legend");

legend3
  .append("rect")
  .attr("x", 590)
  .attr("y", -40)
  .attr("width", 46)
  .attr("height", 22)
  .attr("fill", "#FF8080");
legend3
  .append("rect")
  .attr("x", 638)
  .attr("y", -40)
  .attr("width", 46)
  .attr("height", 22)
  .attr("fill", "#FFB4B3");
legend3
  .append("rect")
  .attr("x", 686)
  .attr("y", -40)
  .attr("width", 46)
  .attr("height", 22)
  .attr("fill", "#EFC9C4");
legend3
  .append("rect")
  .attr("x", 734)
  .attr("y", -40)
  .attr("width", 46)
  .attr("height", 22)
  .attr("fill", "#D0D6EB");
legend3
  .append("rect")
  .attr("x", 782)
  .attr("y", -40)
  .attr("width", 46)
  .attr("height", 22)
  .attr("fill", "#84C196");
legend3
  .append("rect")
  .attr("x", 830)
  .attr("y", -40)
  .attr("width", 46)
  .attr("height", 22)
  .attr("fill", "#6EA495");
legend3
  .append("rect")
  .attr("x", 878)
  .attr("y", -40)
  .attr("width", 46)
  .attr("height", 22)
  .attr("fill", "#1D8488");

legend3
  .append("text")
  .attr("x", 604)
  .attr("y", -28)
  .text("-12")
  .style("font-size", "11px")
  .style("fill", "white")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle");
legend3
  .append("text")
  .attr("x", 654)
  .attr("y", -28)
  .text("-8")
  .style("font-size", "11px")
  .style("fill", "white")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle");
legend3
  .append("text")
  .attr("x", 704)
  .attr("y", -28)
  .text("-4")
  .style("font-size", "11px")
  .style("fill", "white")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle");
legend3
  .append("text")
  .attr("x", 754)
  .attr("y", -28)
  .text("0")
  .style("font-size", "11px")
  .style("fill", "white")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle");
legend3
  .append("text")
  .attr("x", 801)
  .attr("y", -28)
  .text("4")
  .style("font-size", "11px")
  .style("fill", "white")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle");
legend3
  .append("text")
  .attr("x", 849)
  .attr("y", -28)
  .text("8")
  .style("font-size", "11px")
  .style("fill", "white")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle");
legend3
  .append("text")
  .attr("x", 894)
  .attr("y", -28)
  .text("12")
  .style("font-size", "11px")
  .style("fill", "white")
  .style("font-weight", "600")
  .attr("alignment-baseline", "middle");
// LEGEND END //

// LOOP ICON //
// const makeTransition = () => {
//   console.log('do this')
//   d3.select(".loop")
//     .transition()
//     .duration(300)
//     .attr(
//       "transform",
//       d3.interpolateString(
//         "translate(910, -40) scale(.4) rotate(-180)",
//         "translate(910, -40) scale(.4) rotate(-180)",
//         "translate(910, -40) scale(.4) rotate(-180)"
//       )
//     );
// };

// let ooo = legend3
//   .append('image')
//   .attr('xlink:href', 'https://image.flaticon.com/icons/svg/66/66934.svg/')
//   .attr('width', 25)
//   .attr('height', 22)
//   // .attr('transform', 'rotate(0, 0, 0)')
//   // .attr('transform', 'translate(910, -40)')
//   .attr('x', 910)
//   .attr('y', -40)
//   .style('cursor', 'pointer')
//   .on('click', () => {
//     // ooo.transition().duration(1000).attr(
//     //   "transform",
//     //   d3.interpolateString(
//     //     "translate(910, -40) rotate(-180)",
//     //     "translate(910, -40) rotate(-180)"
//     //   )
//     // )
//     // ooo
//     //   .transition()
//     //   .duration(500)
//     //   .attr("transform", "rotate(30, 0, 0)")
//     //   // .attr('transform', 'translate(910, -40) rotate(180, 0, 0)')
//     //   .transition()
//     //   .duration(500)
//     //   .attr('transform', 'rotate(30, 10, 10)')
//     changeData()
//   })

legend3
  .append('rect')
  .attr('width', 22)
  .attr('height', 22)
  .attr('x', 940)
  .attr('y', -40)
  .attr('fill', '#dfdede')
  .attr('opacity', '.1')
  .style('cursor', 'pointer')
  .on("click", changeData)

let loop = legend3
  .append("g")
  .attr("class", "loop")
  .attr("transform", "translate(940, -40) scale(.4)")
  .attr("height", "50")
  .style('cursor', 'pointer')
  // .on("click", changeData)

loop
  .append("path")
  .attr(
    "d",
    "M43.439,8.12A25,25,0,0,0,0,25H4.686A20.31,20.31,0,0,1,40.119,11.44L32.81,18.749H50V1.562L43.437,8.12Z"
  )
  .attr("fill", "#A6A9C0")
  .style('cursor', 'pointer')
  // .on("click", changeData)

loop
  .append("path")
  .attr(
    "d",
    "M45.31,16A20.31,20.31,0,0,1,9.878,29.559l7.309-7.309H0V39.436l6.557-6.557A25,25,0,0,0,50,16Z"
  )
  .attr("fill", "#A6A9C0")
  .attr("transform", "translate(0.001, 8.999)")
  .style('cursor', 'pointer')
  // .on("click", changeData)

// LOOP ICON END //

var root = d3.hierarchy(treeData).sum(function (d) {
  // console.log(d)
  return Math.abs(d.portfolio);
}); // Here the size of each leave is given in the 'value' field in input data

// Then d3.treemap computes the position of each element of the hierarchy
d3
  .treemap()
  .size([width, height])
  .padding(2)
  // .paddingTop(28)
  .paddingLeft(20)(
    // .paddingInner(3)
    // Padding between each rectangle
    //.paddingOuter(6)
    root
  );

svg3
  .selectAll("titles")
  .data(
    root.descendants().filter(function (d) {
      return d.depth == 1;
    })
  )
  .enter()
  .append("text")
  .attr("x", function (d) {
    return d.y0 * 1.4;
  })
  .attr("y", function (d) {
    return d.x0 * 1.15;
  })
  .text((d) => d.data.name)
  .attr("font-size", "18px")
  .attr("font-weight", "700");

let aa = svg3.append('g').attr('class', 'treemap')

const draw5 = () => {
  // MAKE SVG //

  let treemap = aa.selectAll(".treemapitem").data(root.leaves());
  treemap.exit().remove();

  const treemapItem = treemap.enter().append("g").attr("class", "treemapitem");

  let rect = treemapItem.append("rect").attr("class", "rect");
  let percent = treemapItem.append("text").attr("class", "percent");
  let ticker = treemapItem.append("text").attr("class", "ticker");

  treemapItem.merge(treemap)

  rect
    .attr("x", d => d.y0 * 1.17 - margin.left)
    .attr("y", d => d.x0 / 1.17)
    .attr("width", d => (d.y1 - d.y0) * 1.17)
    .attr("height", d => (d.x1 - d.x0) / 1.17)
    .style("fill", d => {
      // console.log(d.data)
      return getColor(d)
    });
  percent
    .attr("x", d => d.y0 * 1.17 - margin.left + 5)
    .attr("y", d => d.x0 / 1.17 + 25)
    .text(d => {
      if ((d.y1 - d.y0) * 1.17 > 45) {
        return `${d.data.changeYTD}%`;
      }
    })
    .attr("font-size", "24px")
    .attr("font-weight", "700")
    .attr("fill", "white");
  ticker
    .attr("x", d => d.y0 * 1.17 - margin.left + 5)
    .attr("y", d => d.x0 / 1.17 + 40)
    .text(d => {
      if ((d.y1 - d.y0) * 1.17 > 45) {
        return d.data.ticker;
      }
    })
    .attr("font-size", "14px")
    .attr("font-weight", "300")
    .attr("fill", "white");

  treemap
    .select('.rect')
    .transition()
    .duration(1000)
    .style("fill", d => {
      return getColor(d, true)
    });

  treemap
    .select('.percent')
    .transition()
    .duration(500)
    .style('opacity', 0)
    .transition()
    .duration(500)
    .style('opacity', 1)
    .text(d => {
      if ((d.y1 - d.y0) * 1.17 > 45) {
        let a = inititalTreemapData.find(el => el.id === d.data.id)
        return `${a.changeYTD}%`;
      }
    })

  treemap
    .select('.ticker')
    .transition()
    .duration(500)
    .style('opacity', 0)
    .transition()
    .duration(500)
    .style('opacity', 1)
    .text(d => {
      if ((d.y1 - d.y0) * 1.17 > 45) {
        let a = inititalTreemapData.find(el => el.id === d.data.id)
        return `${a.ticker}`;
      }
    })

  makeTooltips3();
};

document.querySelector('.d3333') && draw5()

const makeModalChart3 = (item) => {

  const d = document.querySelector(".d3333").getBoundingClientRect();
  const svg = d3
    .select(".modal-svg")
    .append("svg")
    .attr("id", "simple-svg")
    .attr("class", "d33")
    .style("margin-top", d.top)
    .style("margin-left", d.left)
    .attr("width", width + margin.left + margin.right)
    .attr("height", axisHeight3 + margin.top + margin.bottom + 50)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.right})`);

  // MAKE DATA ITEMS //
  let i = inititalTreemapData.find(el => el.id === item.data.id)
  let treemap = svg
    .append("g")
    .attr("class", "treemap")
    .selectAll(".treemapitem")
    .data([{...item, data: i}]);
  treemap.exit().remove();

  const treemapItem = treemap.enter().append("g").attr("class", "treemapitem");
  treemapItem
    .append("rect")
    .attr("class", "rect")
    .attr("x", function (d) {
      return d.y0 * 1.17 - margin.left;
    })
    .attr("y", function (d) {
      return d.x0 / 1.17;
    })
    .attr("width", function (d) {
      return (d.y1 - d.y0) * 1.17;
    })
    .attr("height", function (d) {
      return (d.x1 - d.x0) / 1.17;
    })
    .style("fill", (d) => getColor(d))
    .style("stroke", 'white');

  // and to add the text labels
  treemapItem
    .append("text")
    .attr("class", "percent")
    .attr("x", function (d) {
      return d.y0 * 1.17 - margin.left + 5;
    })
    .attr("y", function (d) {
      return d.x0 / 1.17 + 25;
    })
    .text(function (d) {
      if ((d.y1 - d.y0) * 1.17 > 45) {
        return `${d.data.changeYTD}%`;
      }
    })
    .attr("font-size", "24px")
    .attr("font-weight", "700")
    .attr("fill", "white");

  treemapItem
    .append("text")
    .attr("class", "ticker")
    .attr("x", function (d) {
      return d.y0 * 1.17 - margin.left + 5;
    })
    .attr("y", function (d) {
      return d.x0 / 1.17 + 40;
    })
    .text(function (d) {
      if ((d.y1 - d.y0) * 1.17 > 45) {
        return d.data.ticker;
      }
    })
    .attr("font-size", "14px")
    .attr("font-weight", "300")
    .attr("fill", "white");
}