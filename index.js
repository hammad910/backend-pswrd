import express, { urlencoded } from 'express'
import { mongoDBConnect } from './connection.js'
// import { router } from './routes/url.js'
import signRoute from './routes/signUp.js'
import {router} from './routes/staticRoutes.js'
import 'dotenv/config'

mongoDBConnect("mongodb://127.0.0.1:27017/signup")


const app = express()
const PORT = 3000

app.set("view engine", "ejs")
app.set("views", "./views")


app.use(express.json())
app.use(urlencoded())
app.use('/', router)
// app.use('/url', router)
app.use('/user', signRoute)

app.listen(process.env.PORT, () => {
    console.log(`server was running on ${PORT}`);
})