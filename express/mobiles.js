const express = require('express');
const app = express();
const port = 4700;
// Sample array of mobile devices
const mobileDevices = [
  { id: 1, name: 'iPhone 13', brand: 'Apple' },
  { id: 2, name: 'Galaxy S21', brand: 'Samsung' },
  { id: 3, name: 'Pixel 6', brand: 'Google' },
];
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// Route to display device information based on id
app.get('/devices/', (req, res) => {
  const deviceId = parseInt(req.params.id, 10);
  const device = mobileDevices.find((dev) => dev.id === deviceId);
  if (device) {
    res.send(`Device: ${device.name} | Brand: ${device.brand}`);
  } else {
    res.send('Device not found');
  }
});
