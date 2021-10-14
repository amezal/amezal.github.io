const loadingImg = document.querySelector('.loading');
let date = 'latest';
let currency = 'nio';
let gtc = 'nio'

getCurrencies();


function round(value, decimals) {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

function appendOptions(currencies) {
    for (currency in currencies) {
        const option = document.createElement('option');
        option.innerText = `${currencies[currency]} (${currency})`;
        option.value = currency;
        if (currency == 'nio') {
            option.selected = true;
        }
        select.appendChild(option);
    }
    currency = 'nio';
}

async function getCurrencies() {
    const currencies = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json');
    appendOptions(currencies.data);
    other.value = await calculate(gtc, currency, date);
}

async function calculate(currency1, currency2, date) {
    const value = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${currency1}/${currency2}.json`);
    return (value.data[currency2] * 5 * gatos.value);
}

async function calculateReverse(currency1, currency2, date) {
    const value = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/${currency2}/${currency1}.json`);
    return (value.data[currency1] / 5 * other.value);
}


async function getChartData(gtc, currency, mode) {
    const today = moment();
    const chartData = [];
    const chartLabels = [];
    let key;
    let division;
    let subtracting;
    let format;

    switch (mode) {
        case 'quarter':
            key = 'w';
            division = 9;
            subtracting = 2
            format = "DD-MMM-YY"
            break;
        case 'month':
            key = 'd';
            division = 10;
            subtracting = 3
            format = "dd-DD-MMM"
            break;
        case 'week':
            key = 'd';
            division = 7;
            subtracting = 1
            format = "dd-DD-MMM"
            break;
    }

    loadingImg.classList.remove('hidden');
    for (var i = 0; i < division; i++) {
        auxDate = today.subtract(subtracting, key);
        res = await calculate(gtc, currency, auxDate.format("YYYY-MM-DD"));
        chartLabels.unshift(auxDate.format(format));
        chartData.unshift(res);
    }
    chart.data.labels = chartLabels;
    chart.data.datasets[0].data = chartData;
    loadingImg.classList.add('hidden');
    chart.update();
}

