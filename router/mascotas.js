const express = require('express')

const router= express.Router();

const Mascota = require('../models/mascota')

router.get('/',async (req,res) => {

    try {
        
 const  arrayMascotaDB = await Mascota.find()

 console.log(arrayMascotaDB)

 res.render("mascotas", {

    
    arrayMascotas: arrayMascotaDB


})


    } catch (error) {
        console.log(error)
    }

    
})


router.get('/crear',(req,res) =>{

    res.render("crear")
})

router.post('/',async(req,res) =>{

    const body = req.body
    console.log(body)

    try {

        await Mascota.create(body)

        res.redirect('/mascotas')
        
    } catch (error) {
        console.log(error)
    }


})







module.exports = router