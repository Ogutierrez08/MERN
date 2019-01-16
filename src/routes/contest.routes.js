const express = require('express')
const router = express.Router();

const Contest = require('../models/Contest')
const Dist = require('../models/Dists')

//DISTRIBUIDORAS

router.get('/dist',async(req,res) => {
    const dist = await Dist.find();
    res.json(dist)
})

router.post('/dist',async(req,res) =>{
    const {
        CodigoDistribuidor,
        NombreDistribuidor
    } = req.body
    const dist = new Dist({
        CodigoDistribuidor,
        NombreDistribuidor
    })
    await dist.save()
    res.json({status:'Distribuidora Saved'})
})

router.delete('/dist/:id',async(req,res) => {
    await Dist.findByIdAndRemove(req.params.id)
    res.json({status:'Distribuidora Delete'})
})
//CUOTAS
router.get('/',async (req,res) => {
    const contests = await Contest.find();
    res.json(contests)
})

router.get('/:NombreDistribuidor',async (req,res) => {
    const contestsByDist = await Contest.find({NombreDistribuidor:req.params.NombreDistribuidor});
    res.json(contestsByDist)
})

router.get('/id/:id',async (req,res) =>{
    const contestsById = await Contest.findOne({_id:req.params.id})
    res.json(contestsById)
})

router.post('/',async (req,res) => {
    const { 
    CodigoDistribuidor,
    NombreDistribuidor,
    CodigoVendedor,
    NombreVendedor,
    InicioPeriodo,
    FinPeriodo,
    PH,
    PT,
    SE,
    PO,
    PÑ,
    TF,
    TH,
    INC,
    NP,
    TO,
    SEE
    } = req.body
    const contest = new Contest({
        CodigoDistribuidor,
        NombreDistribuidor,
        CodigoVendedor,
        NombreVendedor,
        InicioPeriodo,
        FinPeriodo,
        PH,
        PT,
        SE,
        PO,
        PÑ,
        TF,
        TH,
        INC,
        NP,
        TO,
        SEE})
    await contest.save()
    res.json({status:'Contest Saved'})
})

router.put('/:id',async (req,res) => {
    const { 
    CodigoDistribuidor,
    NombreDistribuidor,
    CodigoVendedor,
    NombreVendedor,
    InicioPeriodo,
    FinPeriodo,
    PH,
    PT,
    SE,
    PO,
    PÑ,
    TF,
    TH,
    INC,
    NP,
    TO,
    SEE
    } = req.body
    const newContest = {
        CodigoDistribuidor,
        NombreDistribuidor,
        CodigoVendedor,
        NombreVendedor,
        InicioPeriodo,
        FinPeriodo,
        PH,
        PT,
        SE,
        PO,
        PÑ,
        TF,
        TH,
        INC,
        NP,
        TO,
        SEE}
    await Contest.findByIdAndUpdate(req.params.id,newContest)
    res.json({status:'Contest Update'})
})

router.delete('/:id',async (req,res) =>{
    await Contest.findByIdAndRemove(req.params.id)
    res.json({status:'Contest Delete'})
})

module.exports = router