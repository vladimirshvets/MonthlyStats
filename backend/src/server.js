import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';

require("dotenv").config();

const connectionString = process.env.MONGODB_CONNECTION;
const client = new MongoClient(connectionString);

const app = express();
app.use(express.json());

app.use(express.static(
    path.resolve(
        __dirname, '../dist'),
        { maxAge: '1y', etag: false }
    )
);

app.get('/api/work-results', async (req, res) => {
    await client.connect();
    const db = client.db('MonthlyStats');
    const workResults = await db.collection('workResults').find().sort({ date: -1 }).toArray();
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

app.post('/api/daily-info', async (req, res) => {
    const value = req.body;
    await client.connect();
    const db = client.db('MonthlyStats');
    const result = await db.collection('workResults').insertOne(value);
    res.json(result);
});

app.put('/api/daily-info/:date', async (req, res) => {
    const date = req.params.date;
    const value = req.body;
    const updateDoc = {
        $set: {
            date: value.date,
            dailyTime: value.dailyTime,
            qtys: value.qtys,
            normOfTime: value.normOfTime
        },
    };
    await client.connect();
    const db = client.db('MonthlyStats');
    const result = await db.collection('workResults').updateOne({ date: date }, updateDoc);
    res.json(result);
});

app.delete('/api/daily-info/:date', async (req, res) => {
    const date = req.params.date;
    await client.connect();
    const db = client.db('MonthlyStats');
    const result = await db.collection('workResults').deleteOne({ date: date });
    res.json(result);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..dist/index.html'));
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
