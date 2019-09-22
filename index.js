const express = require('express');
const auth = require('./middlewares/auth');

const app = express();
const port = 3000;

app.get('/animals', auth, (req, res) => {
  return res.json({ data: [{ name: 'Oso' }, { name: 'Tigre' }] });
});

app.listen(port, () => console.log('Server working!'));
