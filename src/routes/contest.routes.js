const express = require('express')
const router = express.Router();

const Contest = require('../models/Contest')

router.get('/',async (req,res) => {
    const contests = await Contest.find();
    res.json(contests)
})

router.get('/:NombreDistribuidor',async (req,res) => {
    const contestsByDist = await Contest.find({NombreDistribuidor:req.params.NombreDistribuidor});
    res.json(contestsByDist)
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
    await Contest.findOneAndRemove(req.params.id)
    res.json({status:'Contest Delete'})
})

module.exports = router