const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.Port || 5000;
const mongoose = require('mongoose');
const toysRoutes = require("./routes/toys")
const categoriesRoutes = require("./routes/categories")

app.use(cors({ origin: true, credentials: true}));
app.use(express.json({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/toys", toysRoutes)



app.listen(port, () => {
  mongoose.connect('mongodb+srv://Matrice:QCVasMi5b2MMGwpr@cluster0.bhycl.mongodb.net/magical-world?retryWrites=true&w=majority')
        .then(()=>{console.log('connection à mongo reussi');})
        .catch(()=>{console.log('connection a mongo echoué');})
})