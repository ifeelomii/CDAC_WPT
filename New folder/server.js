var express = require('express');
var app = express();
const port = 8000;

app.use(static.express('public'));
app.get('/', (req,res) => {
    res.send("Hello World");    
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});