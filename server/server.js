const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/*', (req, res) => {
	res.send(res.sendFile(path.join(__dirname, '../src/index.html')));
});
