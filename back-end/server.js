const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Server is up and running' }));
// Routes
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5600;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
