const express = require('express');

const app = express();

app.use(express.json());

const buildingRoutes = require('./routes/buildingRoutes');
const inspectionRoutes = require('./routes/inspectionRoutes');

app.use('/buildings', buildingRoutes);
app.use('/inspections', inspectionRoutes);

app.get('/', (req, res) => {
    res.send('Building Safety Backend Running');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});