const express = require('express')
const app = express()
const port = 3000

console.log(app);


//route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/xuany", (req, res) => {
    res.send("XuanY");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})