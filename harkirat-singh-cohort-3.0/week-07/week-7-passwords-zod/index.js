const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { UserModel, TodoModel } = require('./db');
const bcrypt = require('bcrypt');
const { z } = require('zod');
mongoose.connect("mongodb+srv://admin:Rushi%401512@cluster0.tnbw87l.mongodb.net/todos-app-week-7-2");
const JWT_SECRET = 'rushikesh12345';
const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {

    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        });
        return
    }

    // const email = req.body.email;
    // const password = req.body.password;
    // const name = req.body.name;
    const { email, password, name } = req.body;
 
    const hashPassword = await bcrypt.hash(password, 5);
    console.log(hashPassword);

    await UserModel.create({
        email: email,
        password: hashPassword,
        name: name
    });

    res.json({
        message: "You are signed up."
    });
})

app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });

    if (!response) {
        res.status(403).json({
            message: "User does not exist in our db"
        });
        return
    }

    const passwordMathch = await bcrypt.compare(password, response.password);

    if (passwordMathch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);
        res.json({
            message: "You are signed in.",
            token: token
        });
    }
    else {
        res.json({
            message: "Invalid Credentials"
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
            message: "Credentials Invalid"
        });
    }
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})