const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.use('/dist', express.static(path.join(__dirname, 'src', 'dist')));
app.use('/data', express.static(path.join(__dirname, 'src', 'data')));
app.use('/images', express.static(path.join(__dirname, 'src', 'images')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/src/images/tec.jpeg', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/images', 'tec.jpeg'));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});