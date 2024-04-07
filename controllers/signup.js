import { user } from "../models/signup.model.js";

const handleSignIn = async (req, res) => {
    const { name, email, password } = req.body
    await user.create({
        name,
        email,
        password,
    })
   return res.render('home')
}

export { handleSignIn }