const mongoose = require('mongoose')
const {Schema} = mongoose

const ImpShema = new Schema({
    CodigoDistribuidor : {type:String,required:true},
    NombreDistribuidor : {type:String,required:true},
    Etapa : {type:String,required:true},
    Observacion : {type:String,required:true},
    Region : {type:String,required:true},
    Supervisor : {type:String,required:true},
    Contacto : {type:String,required:true},
    NumeroContacto : {type:Number,required:true}
})

module.exports= mongoose.model('Implementacion',ImpShema)