require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const errorMiddleware = require('./services/errorMiddleware');
const app = express();
app.use(bodyParser.json());

app.get('/user', userController.getAllUsers);

app.get('/user/:id', userController.findUser);

app.post('/user', userController.createUser);

app.put('/user/:id', userController.updateUser);

app.delete('/user/:id', userController.deleteUser);

app.use(errorMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
