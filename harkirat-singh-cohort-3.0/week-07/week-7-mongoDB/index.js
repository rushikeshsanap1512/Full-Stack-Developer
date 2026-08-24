const express = require('express');
const jwt = require('jsonwebtoken');
const { UserModel, TodoModel } = require('./db');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:Rushi%401512@cluster0.tnbw87l.mongodb.net/todo-rushikesh-12345");
const JWT_SECRET = 'rushikesh12345';
const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    const email= req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });

    res.json({
        message: "You are signed up"
    });
})

app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    console.log(`user is ${user}`);

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        res.json({
            token: token
        });
    }
    else {
        res.status(403).json({
            message: "Incorrect credentials."
        });        
    }

})

app.post('/todo', auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;

    await TodoModel.create({
        title,
        userId
    });

    res.json({
        userId: userId
    });
})

app.get('/todos', auth, async (req, res) => {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    });
    res.json({
        todos
    });
})

function auth(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        req.userId = decodedData.id;
        next();
    }
    else {
        res.status(403).json({
            message: "Incorrect Credentials"
        });
    }
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})