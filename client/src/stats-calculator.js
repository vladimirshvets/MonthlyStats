import moment from 'moment';

function calcSum(values) {
    return values.reduce(
        (sum, item) => sum + Number(item), 0
    );
}

function calcWorkingMins(item) {
    const hours = item.dailyTime;
    const dayOfWeek = moment(item.date).weekday();
    const coffeeBreak = dayOfWeek == 6 ? 20 : 30;
    return hours * 60 - coffeeBreak;
}

function calcStats(items) {
    items.forEach((item) => {
        item.dailyTimeMins = calcWorkingMins(item);
        item.sectorsTime = [];
        for (let i = 0; i < 4; i++) {
            item.sectorsTime.push(
                item.qtys[i] * item.normOfTime[i]
            );
        }
        item.totalTime = calcSum(item.sectorsTime);
        item.dailyPercentage = item.totalTime / item.dailyTimeMins * 100;
    });
}

export { calcStats, calcSum };