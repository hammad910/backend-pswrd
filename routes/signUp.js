import express from 'express'
import { handleSignIn } from '../controllers/signup.js'
const signRoute = express.Router()

signRoute.post('/', handleSignIn)

export default signRoute