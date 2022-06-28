const express = require('express');
const router = express.Router();
const Category = require ('../models/categories');


router.get('/:id', (req, res) => {
})

router.get('/', async (req, res,) => {
    const categories = await Category.find()
    res.send(JSON.stringify(categories))
});

router.post('/', (req, res) =>{
    const newcat =  new Category({
        name:req.body.name
    });
    newcat.save()
    .then(()=>console.log('enregisitrement reusit'))
    .catch(()=>console.log('engresitrement echoué'));
    res.send(JSON.stringify(newcat, null,2));
})

router.get('/', async(req, res) => {
const newcategories = await categories.find()
.catch(()=>console.log('error'));
res.send(JSON.stringify(newcategories, null, 2));
        });


router.delete('/:name', function(req, res) {

    Category.deleteOne({name:req.params.name})
.then(() => console.log("Catégorie supprimée"))
.catch(err => console.log("Erreur : Catégorie non supprimée"))
            
});

// password mongodb+srv://Matrice:<password>@cluster0.bhycl.mongodb.net/?retryWrites=true&w=majority

module.exports = router;