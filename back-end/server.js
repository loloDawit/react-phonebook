const express = require('express');

const app = express();

const PORT = process.env.PORT || 5600;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
