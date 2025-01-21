const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... further logic to fetch user by userId and handle case when the user is not found ...
  // Example (assuming you have a way to check user existence):
  const user = getUserById(userId); 
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Add dummy getUserById for testing
const users = [{id: 1, name: 'John Doe'}];
const getUserById = (id) => users.find(user => user.id === id);