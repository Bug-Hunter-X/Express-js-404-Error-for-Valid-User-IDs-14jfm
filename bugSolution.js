const express = require('express');
const app = express();
// Simulate a database operation
const db = {
  users: {
    '1': { id: '1', name: 'John Doe' },
    '2': { id: '2', name: 'Jane Doe' }
  }
};
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  await delay(100); // Simulate database latency
  const userData = db.users[userId];
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});
app.listen(3000, () => console.log('Server listening on port 3000'));