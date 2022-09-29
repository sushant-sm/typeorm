import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
const express = require('express');
const userRoutes = require('./routes/user')


const app = express()
AppDataSource.initialize().then(async () => {

    app.use(express.json())
    app.use('/api/user', userRoutes)
    app.listen(8080, () => {
        console.log("Server is running on port 8080");
    })

}).catch(error => console.log(error))
