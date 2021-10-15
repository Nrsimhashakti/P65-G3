import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const reservaSchema = new Schema({ 
    nombre: String,
    apellido: String,
    correo: String,
    telefono: Number,
    tipo_evento: String,
    num_personas: Number,  
    area: String,
    fecha:String, 
    hora: String,
    comida: String ,
    bebidas: String, 
    grupo_musical: String, 
    adicionales: String, 
  
});

const Reserva = mongoose.model('Reserva', reservaSchema); 
export default Reserva;