const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "/client/build")))

app.get('/api/customers', (req,res) => {
    const customers = [
        {id: 1, firstName: 'Rahul', lastName: 'Choudhary'},
        {id: 2, firstName: 'Shalu', lastName: 'Baliyan'},
    ];
    res.json(customers);
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"))
})

const PORT = 8080;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`))
