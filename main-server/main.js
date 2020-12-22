const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req, res)=>{
	res.send('hehe the site works');
});

app.get('/mc/',(req, res)=>{
	res.send('connect to mc.meth.dev using Minecraft! :D');
});

app.listen(port, () => {
	console.log(`app is listening on localhost:${port}`);
});
