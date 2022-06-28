           const express = require('express');
           const mongoose = require('mongoose');
           const router = express.Router();
           const Toy = require ('../models/toys');
           
           router.get('/', async(req, res) => {
                try {                
                    const toys = await Toy.find()
                    res.json(toys);
                } catch (error) {
                    console.log(error);
                };
           })
            
            router.get('/:id', (req, res) => {
                let id = req.params.id;
                const toy =Toy.findById(id)
                res.send(JSON.stringify(toy, null, 2));               
            })
                    
            router.post('/', (req, res) =>{
            //creer
            const newToy = new Toy({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
            });
            newToy.save()
            .then(()=>console.log('enregisitrement reusit'))
            .catch(()=>console.log('engresitrement echoué'));
            res.send(JSON.stringify(newToy, null,2));
           })
            
            router.put('/:id', async(req, res)=>{
              
                if (req.params.id){
                let findtoy = await Toy.findOneAndUpdate({id: req.params.id} ,{name: req.body.name, description: req.body.description, price:req.body.price})
                findtoy.save()
                res.send(JSON.stringify(findtoy,null,2))
                }else res.sendStatus(404)
            })
            // router.delete('/:name', function(req, res) {

            //     Category.deleteOne({name:req.params.name})
            //         .then(() => console.log("Catégorie supprimée"))
            //         .catch(err => console.log("Erreur : Catégorie non supprimée"))
            
            // });
             
         module.exports = router;
