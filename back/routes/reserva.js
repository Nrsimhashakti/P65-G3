import express from 'express'; 
const router = express.Router(); 

// importar el modelo reserva 
import Reserva from '../models/reserva'; 

// AGREGAR UNA RESERVA
router.post('/nueva-reserva', async(req, res) => { 
    const body = req.body; 
    try { 
        const reservaDB = await Reserva.create(body); 
        res.status(200).json(reservaDB); 
    } catch (error) {
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});

//BUSCAR TODAS LAS RESERVAS
router.get('/reservas', async(req, res) => { 
    try { 
        const reservaDB = await Reserva.find(); 
        res.json(reservaDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


//BUSCAR UNA RESERVA
router.get('/buscar-reserva/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const reservaDB = await Reserva.findOne({_id}); 
        res.json(reservaDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        })
    }
});


//ELIMINAR RESERVA 
router.delete('/eliminar-reserva/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const reservaDB = await Reserva.findByIdAndDelete({_id}); 
        if(!reservaDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró la reserva indicada', 
                error 
            }) 
        } 
        res.json(reservaDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

//ACTUALIZAR RESERVA

router.put('/actualizar-reserva/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const reservaDB = await Reserva.findByIdAndUpdate(
            _id, 
            body, 
            {new: true}); 
            res.json(reservaDB); 
        } catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            }) 
        } 
    });

// Exportamos la configuración de express app
module.exports = router;