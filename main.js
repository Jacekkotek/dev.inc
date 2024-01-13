
// Money counter

let money = 0 

let james = 0 //now
let john = 0 //1 month ago
let jane = 0 //2 months ago
let jill = 0 //3 months ago
let jen = 0 //4 months ago
let jon = 0 //5 months ago
let jack = 0 //6 months ago


function edward() {
var ctx = document.getElementById("michael").getContext('2d');

ctx.clearRect(0, 0, 200, 200)

var myChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["6 months ago","5 months ago","4 months ago","3 months ago","2 months ago","1 month ago","now"],
        datasets: [{
            label: "Money",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [jack, jon, jen, jill, jane, john, james]
        }]
    },

    // Configuration options go here
    options: {}
});
}

function obama() {
  money = money + bruce - ronald
  jack = jon
  jon = jen
  jen = jill
  jill = jane
  jane = john
  john = james
  james = money
  edward()
}

edward()