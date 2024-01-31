

function edward() {
var ctx = document.getElementById("michael");
var context = ctx.getContext("2d");

context.clearRect(0, 0, ctx.width, ctx.height)

var myChart = new Chart(context, {
    type: 'line',

    data: {
        labels: ["6 months ago","5 months ago","4 months ago","3 months ago","2 months ago","1 month ago","now"],
        datasets: [{
            label: "Money",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [jack, jon, jen, jill, jane, john, james]
        }]
    },

    options: {}
});
}

function obama() {
  kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers = kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers + bruce - ronald
  if (kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers < -10000) {
    billclinton()
  }
  jack = jon
  jon = jen
  jen = jill
  jill = jane
  jane = john
  john = james
  james = kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers
  document.getElementById("clark").innerHTML = "Money: " + kennethblevinsjohnsimpsonaberothdonbirdrudolphrogers;
  edward()
}

edward()