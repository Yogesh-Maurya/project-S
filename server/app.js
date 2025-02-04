const express = require('express');
const discussionsRouter = require('./routes/discussions');

const app = express();

app.use(express.json());
app.use('/api/discussions', discussionsRouter);

// other middleware and routes...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 