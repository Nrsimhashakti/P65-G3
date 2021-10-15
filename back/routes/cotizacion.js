import express from 'express'; 
const router = express.Router(); 

// importar el modelo reserva 
import Cotizacion from '../models/cotizacion'; 

// Agregar una cotizacion 
router.post('/nueva-cotizacion', async(req, res) => { 
    const body = req.body; 
    try { 
        const cotizacionDB = await Cotizacion.create(body); 
        res.status(200).json(cotizacionDB); 
    } catch (error) {
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


//BUSCAR TODAS LAS COTIZACIONES
router.get('/cotizaciones', async(req, res) => { 
    try { 
        const cotizacionDB = await Cotizacion.find(); 
        res.json(cotizacionDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


//BUSCAR UNA LAS COTIZACIONES
router.get('/buscar-cotizacion/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const cotizacionDB = await Cotizacion.findOne({_id}); 
        res.json(cotizacionDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        })
    }
});


//ELIMINAR COTIZACION 
router.delete('/eliminar-cotizacion/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const cotizacionDB = await Cotizacion.findByIdAndDelete({_id}); 
        if(!cotizacionDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró la cotizacion indicada', 
                error 
            }) 
        } 
        res.json(cotizacionDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

router.put('/actualizar-cotizacion/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const cotizacionDB = await Cotizacion.findByIdAndUpdate(
            _id, 
            body, 
            {new: true}); 
            res.json(cotizacionDB); 
        } catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            }) 
        } 
    });


// Exportamos la configuración de express app
module.exports = router;