const express = require("express")
const router = express.Router()
const projects = require('../projects/projectsModels')
const tasks = require('./tasksModels')


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

// This route gets all tasks given a project id
router.get("/project/:projectId/tasks", (req, res) => {
    const { projectId } = req.params
    if (projectId) {
        projects.getById(projectId)
        .then(project => {
            if (project) {
                tasks.getTasksByProjectId(projectId)
                .then(tasks => {
                    tasks.forEach(task => {
                        console.log(task)
                        task.completed = parseToBolean(task.completed)
                        console.log(task)
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

// This route posts a task given a project id as a param.  
router.post("/project/:projectId/tasks", (req, res) => {
    const { projectId } = req.params
    const { task_name, task_notes, completed }  = req.body
    const task = {...parseToInteger(completed), task_name, task_notes}

    if (projectId) {
        projects.getById(projectId)
        .then(project => {
            if (project) {
                tasks.insert(projectId, task)
                .then(tasks => {
                    tasks.forEach(task => { 
                        task.completed = parseToBolean(completed)
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