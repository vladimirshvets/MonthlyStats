import moment from 'moment';

function calcSum(values) {
    return values.reduce(
        (sum, item) => sum + Number(item), 0
    );
}

function calcWorkingMins(item) {
    const hours = item.dailyTime;
    const dayOfWeek = moment(item.date).weekday();
    const coffeeBreak = hours > 4
        ? dayOfWeek == 6 ? 20 : 30
        : 0;
    return hours * 60 - coffeeBreak;
}

function calcStats(items) {
    items.forEach((item) => {
        item.dailyTimeMins = calcWorkingMins(item);
        item.sectorsTime = [];
        item.items.forEach(function(wr) {
            let time = wr.qty * wr.normOfTime;
            item.sectorsTime.push(time);
        });
        item.totalTime = calcSum(item.sectorsTime);
        item.dailyPercentage = item.totalTime / item.dailyTimeMins * 100;
    });
}

export { calcStats, calcSum };
