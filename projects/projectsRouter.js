const express = require("express")
const router = require('express').Router();
const projects = require('./projectsModels')
router.use(express.json())


const parseToInteger = (completed) => {
    if (!completed || completed == "false") {
        return {completed:0}
      }
    else {
        return {completed:1}
      }
}
const parseToBolean = (completed) => {
    if (completed === 0){
        return completed = 'false'
    }
    else {
        return completed = 'true'
    }
}

// This route gets all projects
router.get("/projects", (req, res) => {
    projects.get()
    .then(projects => {
        projects.forEach(project => { 
            project.completed = parseToBolean(project.completed)
        })
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Server error. Unable to retrieve projects"})
    })
})

// This route post's a new project
router.post("/projects", (req, res) => {
    const { project_name, project_description, completed } = req.body
    const newProject = {...parseToInteger(completed), project_name, project_description}
    if (project_name){
        projects.insert(newProject)
        .then(project => { 
            project.completed = parseToBolean(project.completed)
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({err:"project could not be created"})
        })
    }
   else {
    res.status(400).json({error:"missing name or description"})
   }
})



// This route get a specfic project by id
router.get("/project/:projectId", (req, res) => {
    const { projectId } = req.params
    if (projectId) {
        console.log("projectId:",projectId)
        projects.getById(projectId)
        .then(project => {
            if (project) {
                project.completed = parseToBolean(project.completed)
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