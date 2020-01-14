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


// This route get a specfic project by id
router.get("/project/:projectId", (req, res) => {
    const { projectId } = req.params
    if (projectId) {
        console.log("projectId:",projectId)
        projects.getById(projectId)
        .then(project => {
            if (project) {
                res.status(200).json(project)
            }
            else {
                res.status(404).json({error:"project not found"})
            }
        })
        .catch(err =>{
            console.log(err)
            res.status(500).json({error:"server error, could not retrieve project"})
        })
    }
    else {
        res.status(400).json({error:"invalid id format"})
    }
})
module.exports = router;