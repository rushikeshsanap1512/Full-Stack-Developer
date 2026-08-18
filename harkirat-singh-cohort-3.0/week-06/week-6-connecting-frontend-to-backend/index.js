const express = require('express');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'rushikesh12345';
const app = express();

app.use(express.json());

const users = [];

function logger(req, res, next) {
    console.log(`${req.method} request came`);
    next();
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/signup', logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up."
    });
})

app.post('/signin', logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    
    let foundUser = null;
    
    for (let i = 0; i < users.length; i++){
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }

    if (!foundUser) {
        res.json({
            message: "Credentials are incorrect"
        });
    }
    else {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET);

        res.json({
            message: "You are sign in.",
            token: token
        });
    }

})

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        req.username = decodedData.username;
        next();
    }
    else {
        message: "You are not logged in";
    }
}


app.get('/me', logger, auth, (req, res) => {
    let foundUser = null;

    for (let i = 0; i < users.length; i++){
        if (users[i].username === req.username) {
            foundUser = users[i];
        }
    }

    if (req.username) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    }

    
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

