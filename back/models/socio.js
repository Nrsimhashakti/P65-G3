import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const uniqueValidator= require('mongoose-unique-validator');

//roles
const roles ={
    values: ['Admin','Socio'],
    message: '{value} no es un rol valido'
}

const socioSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    apellido: {type: String, required: [true, 'Apellido obligatorio']},
    telefono: Number,
    correo: {type: String, required: [true, 'Correo obligatorio']}, 
    documento: {
        type: Number, 
        required: [true, 'Documento obligatorio'],
        unique: true
    }, 
    contraseña: {type: String, required: [true, 'contraseña obligatorio']},
    rol: {type: String, default:'Socio', enum:roles},

});

//validator
socioSchema.plugin(uniqueValidator, {message: 'Error, esperaba {PATH} único.'});

const Socio = mongoose.model('Socio', socioSchema); 
export default Socio;