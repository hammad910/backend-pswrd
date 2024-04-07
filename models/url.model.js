import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortURL: {
        type: String,
        unique: true,
        required: true,
    },
    redirectURL: {
        type: String,
        required: true,
        unique: true
    },
    visitHistory: [
        {
            timestamps: {
                type: Number
            }
        }
    ]
})

const shortURL = mongoose.model('url', urlSchema)

export { shortURL }