const express = require('express');
const cors = require('cors');
const coordinates = require('./coordinates');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    try {
        // Extract offset and limit from query parameters
        const offset = parseInt(req.query.offset) || 0;
        const limit = parseInt(req.query.limit) || coordinates.length;

        // Validate the values of offset and limit
        if (offset < 0 || limit < 1) {
            return res.status(400).json({ message: "Invalid offset or limit" });
        }

        // Slice the coordinates array based on offset and limit
        const slicedCoordinates = coordinates.slice(offset, offset + limit);

        res.json({ coordinates: slicedCoordinates });
    } catch (error) {
        res.status(500).json({ message: "Some error occurred", error });
    }
});

app.listen(8000, (error) => {
    if (error) throw error;
    console.log('Server is running on port 8000');
});
