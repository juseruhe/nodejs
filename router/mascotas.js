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










module.exports = router