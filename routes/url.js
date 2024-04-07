import express from 'express'
import { getShortUrl } from '../controllers/url.js'
import { handleSignIn } from '../controllers/signup.js'
const router = express.Router()

router.route('/user').post(handleSignIn)
// router.route('/').post(getShortUrl)

export {router}