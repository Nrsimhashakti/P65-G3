import express from 'express'; 
const router = express.Router(); 

// importar el modelo reserva 
import User from '../models/empleado'


// AGREGAR USUARIO
router.post('/nuevo-empleado', async(req, res) => { 
    const body = req.body; 
    try { 
        const empleadoDB = await User.create(body); 
        res.status(200).json(empleadoDB); 
    } catch (error) {
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});



//BUSCAR UN USUARIO
router.get('/buscar-empleado/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const empleadoDB = await User.findOne({_id}); 
        res.json(empleadoDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        })
    }
});


//BUSCAR TODAS LOS USUARIOS
router.get('/empleados', async(req, res) => { 
    try { 
        const empleadoDB = await User.find(); 
        res.json(empleadoDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});

//Actualizar Empleado

router.put('/actualizar-empleado/:id',async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        const empleadoDB = await User.findByIdAndUpdate(
            _id,
            body,{new:true});
            res.json(empleadoDB); 

    } catch (error) {
        return res.status(400).json({
            mensaje: 'No se logro actualizar',
            error
        })
        
    }
});




// Exportamos la configuración de express app
module.exports = router;