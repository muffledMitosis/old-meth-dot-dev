const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req, res)=>{
	res.send('Lol the site works');
});

app.listen(port, () => {
	console.log(`app is listening on localhost:${port}`);
});
