
const express = require('express')
const app = express()
const port = 5000;
// const toysRoutes = require("./routes/toys.js");
// const categoriesRoutes = require("./routes/categories");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  mongoose.connect('mongodb+srv://Matrice:QCVasMi5b2MMGwpr@cluster0.bhycl.mongodb.net/magical-world?retryWrites=true&w=majority')
        .then(()=>{console.log('connection à mongo resusir');})
        .catch(()=>{console.log('connection a mongo echoué');})
})