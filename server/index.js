const express = require ('express')
const dotenv = require('dotenv')
dotenv.config()
const sequelize = require ('./db/db')
const app = express()
const router = require ('./router/router.js')
const body_parser = require('body-parser')
const cors = require("cors")

const PORT = process.env.PORT



app.use(cors({
    credentials: true,
}))
app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())
app.use(express.json());


app.use('/api', router)


const start = async () => {
    try {
        await sequelize.authenticate().catch(e=>console.log(e))
        await sequelize.sync()
        app.listen(PORT, ()=> console.log (`Server started on port ${PORT}`))
    } catch (e) {
        console.log (`Error ${e}`)
    }
} 
start ()
