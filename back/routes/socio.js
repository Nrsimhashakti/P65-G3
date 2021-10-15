import express from 'express'; 
const router = express.Router(); 

// importar el modelo reserva 
import Socio from '../models/socio'; 


//Hash contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10; 

// AGREGAR SOCIO
router.post('/nuevo-socio', async(req, res) => { 
    // const body = req.body; 
    const body ={
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo,
        documento: req.body.documento,
        contraseña: req.body.contraseña,
        rol: req.body.rol
    }

    try { 
        const socioDB = await Socio.create(body); 
        res.status(200).json(socioDB); 
    } catch (error) {
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', error 
        });
    } 
});

//BUSCAR TODAS LOS SOCIOS
router.get('/socios', async(req, res) => { 
    try { 
        const socioDB = await Socio.find(); 
        res.json(socioDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


//BUSCAR UN SOCIO
router.get('/buscar-socio/:documento', async(req, res) => { 
    const documento = req.params.documento; 
    try { 
        const socioDB = await Socio.findOne({documento}); 
        res.json(socioDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        })
    }
});


//ELIMINAR SOCIO 
router.delete('/eliminar-socio/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const socioDB = await Socio.findByIdAndDelete({_id}); 
        if(!socioDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el socio', 
                error 
            }) 
        } 
        res.json(socioDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

//ACTUALIZAR SOCIO

router.put('/actualizar-socio/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const socioDB = await Socio.findByIdAndUpdate(
            _id, 
            body, 
            {new: true}); 
            res.json(socioDB); 
        } catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            }) 
        } 
    });

// Exportamos la configuración de express app
module.exports = router;