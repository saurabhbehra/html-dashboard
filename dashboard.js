//ring progress bar
let progressbar = document.querySelector("#progressbar");
let progressbar_two = document.querySelector("#progressbar_two");



function runProgress(progressbar, percent) {
  let progressFill = progressbar.querySelector(".progressbar__fill"),
      progressTitle = progressbar.querySelector(".progressbar__title"),
      radius = progressFill.r.baseVal.value,
      circumference = 2 * Math.PI * radius,
      offset = (circumference * (100 - percent)) / 100;

  runCounter(progressTitle, percent);
  setProgressbarInitialState(progressFill, circumference);
  setProgressbarFill(progressFill, offset);
}


runProgress(progressbar,78);
runProgress(progressbar_two,95);
runProgress(progressbar_three,59);

function runCounter(elem, percent) {
  let counter = 1,
      time = 1000 / percent;

  let countId = setInterval(function () {
    count();
  }, time);

  function count() {
    counter++;
    elem.innerHTML = counter+"%"

    if (counter === percent) {
      clearInterval(countId);
    }
  }
}

function setProgressbarInitialState(elem, value) {
  elem.style.strokeDasharray = value;
  elem.style.strokeDashoffset = value;
}

function setProgressbarFill(elem, value) {
  setTimeout(() => (elem.style.strokeDashoffset = value), 100);
}



//bar graph
var options = {
  colors : ['#4d3a96', '#8000ff','#AED6F1'],
  series: [{
    name: 'Employer: K 73,500',
    data: [10,12,14,16,18,20,22,24,26,28,30,32,34]
  }, {
    name: 'Employer K 52,500',
    data: [10,12,14,16,18,20,22,24,26,28,30,32,34]
  }, {
    name: 'Total Interest: K 244,313',
    data:[10,12,14,16,18,20,22,24,26,28,30,32,34]
  }],
  chart: {
    type: 'bar',
    height: 300,
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels:{
    enabled:false
  },
 
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'top',
        offsetX: 0,
        offsetY: 0,
        fontSize: '10px',
      }
    }
  }],
  plotOptions: {
    bar: {																																		
      horizontal: false,
    },
  },
  xaxis: {
    type: 'number',
    categories: [20,25,30,35,40,60,65
    ],
  },

  legend: {
    show :true,
    position: 'top',
    radius:5,
    offsetY: 0,
    offsetX:-10,
    markers:{
      width:20,
      height:10,
      radius: 12,
      offsetX:0,
    }
  },
  fill: {
    opacity: 1
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  




//range slider 
const settings={
	fill: '#00bfff',
	background: '#d7dcdf'
  }
  
  // First find all our sliders
  const sliders = document.querySelectorAll('.range-slider');
  
 
  Array.prototype.forEach.call(sliders,(slider)=>{

	slider.querySelector('input').addEventListener('input', (event)=>{
	  // 1. apply our value to the span
	  slider.querySelector('span').innerHTML = event.target.value;
	  // 2. apply our fill to the input
	  applyFill(event.target);
	});
	// Don't wait for the listener, apply it now!
	applyFill(slider.querySelector('input'));
  });
  
  // This function applies the fill to our sliders by using a linear gradient background
  function applyFill(slider) {
	// Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
	const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);

	const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
	slider.style.background = bg;
  }
  

  