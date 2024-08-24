const express = require('express');
const cors = require('cors');
const coordiantes = require('./coordinates');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    try {
        res.json({ coordiantes });
    } catch (error) {
        res.json({ message: "Some error", error })
    }
})

app.listen(8000, ((error) => {
    if (error) throw error;
    console.log('Server is running on port 8000');
}))