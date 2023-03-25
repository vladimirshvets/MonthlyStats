import express from 'express';
import { MongoClient } from 'mongodb';
import { statsList as statsListRaw } from './temp-data';

require("dotenv").config();

let statsList = statsListRaw;

const connectionString = process.env.MONGODB_CONNECTION;
const client = new MongoClient(connectionString);

const app = express();
app.use(express.json());

app.get('/api/work-results', async (req, res) => {
    await client.connect();
    const db = client.db('MonthlyStats');
    const workResults = await db.collection('workResults').find({}).toArray();
    res.json(workResults);
});

app.get('/api/work-results/:monthId', async (req, res) => {
    const monthId = req.params.monthId;
    await client.connect();
    const db = client.db('MonthlyStats');
    const monthlyStats = await db.collection('workResults').find({ date: { $regex: `^${monthId}` }}).toArray();
    // { date: /^{2023-02}/ }
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
