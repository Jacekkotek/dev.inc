

function edward() {
var ctx = document.getElementById("michael");
var context = ctx.getContext("2d");

context.clearRect(0, 0, ctx.width, ctx.height)

var myChart = new Chart(context, {
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
  document.getElementById("clark").innerHTML = "Money: " + money;
  edward()
}

edward()