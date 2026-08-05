// const express = require('express');
// const app = express();

// let reqCount = 0;

// function requestIncreaser(req, res, next){
//     reqCount = reqCount + 1;
//     req.name = "Rushikesh";
//     console.log(`Total no of request: ${reqCount}`)
//     res.json({
//         message: "I ended request here!"
//     })
//     // next()
// }

// function realSumHandler(req, res) {
//     console.log(req.name);
    
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b)
    
//     res.json({
//         sumIs: a + b
//     })
// }

// app.get('/sum', requestIncreaser, realSumHandler);

// // app.get('/multiply', (req, res) => {
// //     requestIncreaser();
// //     const a = parseInt(req.query.a);
// //     const b = parseInt(req.query.b);
// //     res.json({
// //         multiplicationIs: a * b
// //     })
// // })

// app.listen(3000);



// const express = require("express");

// const app = express();

// function loggerMiddleware(req, res, next){
//     console.log("Method: " + req.method);
//     console.log("Hostname: " + req.hostname);
//     console.log("URL: " + req.url);
//     console.log(new Date());
//     next();
// }

// app.use(loggerMiddleware);

// app.get("/sum", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;

//     res.json({
//         ans: a + b
//     })
// });

// app.get("/multiply", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a * b
//     })
// });

// app.get("/divide", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a / b
//     })

// });

// app.get("/subtract", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a - b
//     })
// });

// app.listen(3000);


const express = require('express');
const app = express();

app.use(express.json());

app.post("/sum", function(req, res) {
    console.log(req.body);
    const a = req.body.a;
    const b = req.body.b;

    res.json({
        ans: a + b
    })
});

app.listen(3000);