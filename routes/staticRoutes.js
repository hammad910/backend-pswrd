import express from 'express'
const router = express.Router()

router.get('/signup', (req, res) => {
   return res.render('signUp')
})

export {router};