const express = require('express');
const bodyParser = require('body-parser');
const discussions = require('./routes/discussions');

const app = express();
app.use(bodyParser.json());

app.use('/api/discussions', discussions);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 