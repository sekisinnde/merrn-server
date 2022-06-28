const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;
// const toysRoutes = require("./routes/toys.js");
// const categoriesRoutes = require("./routes/categories");
const mongoose = require('mongoose');
const toysRoutes = require("./routes/toys")
const categoriesRoutes = require("./routes/categories")

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/toys", toysRoutes)

app.listen(port, () => {
  mongoose.connect('mongodb+srv://Matrice:QCVasMi5b2MMGwpr@cluster0.bhycl.mongodb.net/Magical-world?retryWrites=true&w=majority')
        .then(()=>{console.log('connection à mongo resusir');})
        .catch(()=>{console.log('connection a mongo echoué');})
})