const express = require("express")
const router = express.Router()
const projects = require('../projects/projectsModels')
const tasks = require('./tasksModels')


router.use(express.json())

// This route gets all tasks given a project id
router.get("/project/:projectId/tasks", (req, res) => {
    const { projectId } = req.params
    if (projectId) {
        projects.getById(projectId)
        .then(project => {
            if (project) {
                tasks.getTasksByProjectId(projectId)
                .then(tasks => {
                    console.log(project)
                    tasks.forEach(task =>{
                        if (task.completed === 0){
                            task.completed = 'false'
                        }
                        else {
                            task.completed = 'true'
                        }

                    })
                    res.status(200).json(tasks)
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({error:"server error, unable to retrieve tasks"})
                })
                }
            else {
                    res.status(404).json({error:"project not found"})
                }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:"server error, could not retrieve project"})
        })
        }
    else {
        res.status(400).json({error:"invalid id format"})
    }
})

module.exports = router;