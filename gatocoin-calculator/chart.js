const data = {
    labels: [],
    datasets: [{
        backgroundColor: 'rgb(130, 229, 130)',
        borderColor: 'rgb(130, 229, 130)',
        data: [],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
};



Chart.defaults.color = "aliceblue";
Chart.defaults.scale.grid.color = "#3A3A3F";
var chart = new Chart(document.querySelector('#myChart'), config);

getChartData(gtc, gtc, 'quarter');

console.dir(Chart);