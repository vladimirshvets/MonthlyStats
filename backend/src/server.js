import express from 'express';
import { statsList as statsListRaw } from './temp-data';

let statsList = statsListRaw;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json(statsList);
});

app.get('/monthly-stats/:monthId', (req, res) => {
    const monthId = req.params.monthId;
    const monthlyStats = statsList.find(s => s.date.startsWith(monthId));
    res.json(monthlyStats);
});

app.post('/daily-info', (req, res) => {
    const value = req.body;
    //const date = value.date;
    //const dailyInfo = statsList.find(d => d.date == date); 
    statsList.push(value);
    response.json(statsList);
});

app.delete('/daily-info/:date', (req, res) => {
    const date = req.params.date;
    statsList = statsList.filter(day => day.date != date);
    response.json(statsList);
});

const port = 8000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
