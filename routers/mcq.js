const { json } = require('express');
const express = require('express');
const router = express.Router();
const mcq = require('../models/mcq')

router.get('/', async( req, res) =>{
   try{
             const Mcq = await mcq.find();

             res.json(Mcq);
   }catch(err){
       res.send('Error '  + err)
   }
});

router.get('/:id', async( req, res) =>{
    try{
              const Mcq = await mcq.findById(req.params.id);
 
              res.json(Mcq);
    }catch(err){
        res.send('Error '  + err)
    }
 });

 router.patch('/:id', async( req, res) =>{
    try{
          const mcQ = await mcq.findById(req.params.id);
          mcQ.address = req.body.add;
          mcQ.name =req.body.name;
          mcQ.age =req.body.age;
        const s1 = await mcQ.save();
        res.json(s1);     
    }catch(err){
        res.send('Error '  + err)
    }
 });

 router.delete('/:id', async( req, res)=>{
    const mCq = await mcq.findById(req.params.id);
    const d1 = await mCq.delete();

    res.json(d1);


 });

router.post('/', async(req, res)=>{
    const u = new mcq({
        name : req.body.name,
        age : req.body.age,
        address: req.body.add
    })

    try{
        const m1 = await u.save();
        res.json(m1);
    }catch(err){
    res.send('Error '  + err)
    }
     
})


module.exports = router;