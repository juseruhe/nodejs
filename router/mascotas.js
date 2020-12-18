const express = require('express');
const { findByIdAndUpdate } = require('../models/mascota');

const router= express.Router();

const Mascota = require('../models/mascota');
const { route } = require('./rutasweb');

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

router.get('/:id', async(req,res) => {

   const id = req.params.id;

  try {

        const mascotaDB = await Mascota.findOne({_id: id})

       console.log(mascotaDB)

       res.render("detalles", {

        mascota:mascotaDB,
        error:false
       })

        
    } catch (error) {
        console.log(error)
        res.render("detalles", {
            error:true,
            mensaje: "El ID de la Mascota Seleccionado no existe"
           })
    }

})

router.delete('/:id', async(req,res) => {

    const id = req.params.id

    try {

        const mascotaDB = await Mascota.findByIdAndDelete({_id: id})

        if(mascotaDB){

            res.json({
                estado: true,
                respuesta: "Eliminado !"
                
            })

        }else {

            res.json({
                estado: false,
                respuesta: "No se pudó eliminar !"
                
            })

           
        }
        
    } catch (error) {

        console.log(error)
        
    }


})

router.put('/:id',async(req,res) => {

    const id = req.params.id

    const body = req.body

try {

    const mascotaDB = await findByIdAndUpdate( id,body,  { useFindAndModify: false   })
    console.log(mascotaDB)

    res.json({

        estado: true,
        respuesta: "Actualizado !!"
    })
    
} catch (error) {
    console.log(error)
    res.json({

        estado: false,
        respuesta: "No se pudó actualizar !!"
    })


}


})


module.exports = router