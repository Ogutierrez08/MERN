const mongoose = require('mongoose')
const {Schema} = mongoose

const ContestShema = new Schema({
    CodigoDistribuidor: {type: String, required: true},
    NombreDistribuidor: {type: String , required:true},
    CodigoVendedor: {type: String, required: true},
    NombreVendedor: {type: String, required: true},
    InicioPeriodo: {type:String,required:true},
    FinPeriodo : {type:String,required:true},
    PH: {type:Number,required:true},
    PT: {type:Number,required:true},
    SE: {type:Number,required:true},
    PO: {type:Number,required:true},
    PÑ: {type:Number,required:true},
    TF: {type:Number,required:true},
    TH: {type:Number,required:true},
    INC: {type:Number,required:true},
    NP: {type:Number,required:true},
    TO: {type:Number,required:true},
    SEE: {type:Number,required:true}
})

module.exports = mongoose.model('Contest',ContestShema)