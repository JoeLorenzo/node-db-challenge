const express = require("express")
const router = require('express').Router();
const projects = require('./projectsModels')
router.use(express.json())

// This route gets all projects
router.get("/projects", (req, res) => {
    projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve projects"})
    })
})
module.exports = router;