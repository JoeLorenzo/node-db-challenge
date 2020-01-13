const express = require("express")
const projectRouter = require("./projects/projectsRouter")
const resourcesRouter = require("./resources/resourcesRouter")
const tasksRouter = require("./tasks/tasksRouter")

const server = express()

server.use("/api", projectRouter)
server.use("/api", resourcesRouter)
server.use("/api", tasksRouter)



server.get("/", (req, res) => {
    res.status(200).send("Hello World, from the root path")
})
host = "127.0.0.1"
port = 8080

server.listen(port, ()=> console.log(`server running on ${host}:${port}, better go catch it...`)) 