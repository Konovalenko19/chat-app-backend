const express = require('express');
const path = require('path');
const { v4 } = require('uuid');

const PORT = process.env.PORT || 4600;

const app = express();

const chatsList = [
    {
        id: v4(),
        name: 'Vladimir 222222',
        photo: 'https://images11.cosmopolitan.ru/upload/img_cache/e3e/e3e8f4d7ac8bcce755d9fa4996aab4a6_ce_916x607x0x0_fitted_740x0.jpg',
        last_message: 'Hi, where are you?',
    },
    {
        id: v4(),
        name: 'Maxima',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkqXxb1E7_EhIK0geFef5wRhzALOMew-IaRA&usqp=CAU',
        last_message: 'I will see him next week.',
    },
    {
        id: v4(),
        name: 'Viktoria',
        photo: '',
        last_message: 'Can you help me with my homework?',
    },
];

const userData = {
    user: {
        name: 'Vladimir Konovalenko',
        email: 'konovalenko.vowa@gmail.com',
        avatar: '',
    },
    jwt: 'jwt_string_here',
};

app.use(express.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/api/chats', (req, res) => {
    setTimeout(() => {
        res.status(200).json(chatsList);
    }, 500);
});

app.get('/api/user/profile', (req, res) => {
    setTimeout(() => {
        res.status(200).json(userData);
    }, 500);
});

app.post('/api/user/login', (req, res) => {
    setTimeout(() => {
        res.status(200).json(userData);
    }, 500);
});

app.post('/api/user/signup', (req, res) => {
    setTimeout(() => {
        res.status(200).json(userData);
    }, 500);
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
});