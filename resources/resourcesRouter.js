
const express = require("express")
const router = require('express').Router();
const resources = require('./resourcesModels')


router.use(express.json())

// This route gets all resources
router.get("/resources", (req, res) => {
    resources.get()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve resource list"})
    })
})

// This route post's a new resource
router.post("/resources", (req, res) => {
    const { resource_name, resource_description } = req.body
    if (resource_name){
        resources.insert(req.body)
        .then(resource => { 
            res.status(201).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err:"resource could not be created"})
        })
    }
   else {
    res.status(400).json({error:"missing name or description"})
   }
})

module.exports = router;