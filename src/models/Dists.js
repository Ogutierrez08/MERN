const mongoose = require('mongoose')
const {Schema} = mongoose

const DistShema = new Schema({
    CodigoDistribuidor: {type: String, required: true},
    NombreDistribuidor: {type: String , required:true}
})

module.exports= mongoose.model('Distribuidora',DistShema)