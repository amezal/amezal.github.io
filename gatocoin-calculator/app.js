getCurrencies();
const select = document.querySelector('#select');
const gatos = document.querySelector('#gatos');
const other = document.querySelector('#other');
let currency = 'nio';
let gtc = 'nio'

select.addEventListener('change', async (e) => {
    currency = select.value;
    other.value = await calculate(gtc, currency);
})

gatos.addEventListener('change', async (e) => {
    other.value = await calculate(gtc, currency);
})

other.addEventListener('change', async (e) => {
    gatos.value = await calculateReverse(gtc, currency);
})




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
    other.value = await calculate(gtc, currency);
}

async function calculate(currency1, currency2) {
    const value = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency1}/${currency2}.json`);
    return (value.data[currency2] * 5 * gatos.value);
}

async function calculateReverse(currency1, currency2) {
    const value = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency2}/${currency1}.json`);
    return (value.data[currency1] / 5 * other.value);
}

