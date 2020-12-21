const express = require('express');
const app = express();
const port = 8081;

app.get('/',(req, res)=>{
	res.send('connect with mc.meth.dev using Minecraft!');
});

app.listen(port, () => {
	console.log(`app is listening on localhost:${port}`);
});
