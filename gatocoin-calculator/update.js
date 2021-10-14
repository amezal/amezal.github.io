const select = document.querySelector('#select');
const gatos = document.querySelector('#gatos');
const other = document.querySelector('#other');
const quarterButton = document.querySelector('#quarter');
const monthButton = document.querySelector('#month');
const weekButton = document.querySelector('#week');

quarterButton.classList.add('selected');

let lastMode = 'quarter';


quarterButton.addEventListener('click', function (e) {
    getChartData(gtc, currency, this.id);
    lastMode = this.id;
    document.querySelectorAll('.button').forEach((b) => b.classList.remove('selected'));
    this.classList.add('selected');
})
monthButton.addEventListener('click', function (e) {
    getChartData(gtc, currency, this.id);
    lastMode = this.id;
    document.querySelectorAll('.button').forEach((b) => b.classList.remove('selected'));
    this.classList.add('selected');
})
weekButton.addEventListener('click', function (e) {
    getChartData(gtc, currency, this.id);
    lastMode = this.id;
    document.querySelectorAll('.button').forEach((b) => b.classList.remove('selected'));
    this.classList.add('selected');
})


select.addEventListener('change', async (e) => {
    loadingImg.classList.remove('hidden');
    currency = select.value;
    const value = await calculate(gtc, currency, date);
    other.value = round(value, 7);
    await getChartData(gtc, currency, lastMode);
})


gatos.addEventListener('input', async (e) => {
    const value = await calculate(gtc, currency, date);
    other.value = round(value, 7);
})

other.addEventListener('input', async (e) => {
    const value = await calculateReverse(gtc, currency, date);
    gatos.value = round(value, 7);
})
