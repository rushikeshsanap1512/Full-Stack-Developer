const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        sumIs: a + b
    })
})

app.get('/multiply', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        multiplyIs: a * b
    })
})

app.get('/divide/:firstArg/:secondArg', (req, res) => {
    const a = req.params.firstArg;
    const b = req.params.secondArg;
    
    res.json({
        divisionIs: a / b 
    })
})

app.listen(3000);