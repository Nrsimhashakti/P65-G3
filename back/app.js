import express from 'express'; import morgan from 'morgan'; import cors from 'cors'; import path from 'path';

const app = express(); 

// Middleware 
app.use(morgan('tiny')); 
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

//app.use(express.static(path.join(__dirname, 'public'))); 

// Rutas 
app.use('/api', require('./routes/reserva'));
app.use('/api', require('./routes/cotizacion'));
app.use('/api', require('./routes/socio'));
app.use('/api', require('./routes/empleado'));


// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.set('puerto', process.env.PORT || 3000); 
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port'+ app.get('puerto')); 
});


// Conexión base de datos 
const mongoose = require('mongoose'); 
//const uri = 'mongodb://localhost:27017/arrayanes'; 

const uri = 'mongodb+srv://Lau21:laura310@cluster0.eczwx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 

const options = {useNewUrlParser: true, useUnifiedTopology: true}; 

// Or using promises 
mongoose.connect(uri, options).then( 
    () => { console.log('Conectado a DB') }, 
    err => { console.log(err) } 
);

