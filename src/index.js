const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
try {
    mongoose.connect('mongodb+srv://admin:admin@cluster0.av3mc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("MongoDb Connected!")
})
} catch (error) {
    throw new Error(error)
}


app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => {
    console.log('Server Started!')
})
