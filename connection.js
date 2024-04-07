import mongoose from "mongoose"

const mongoDBConnect = (url) => {
    mongoose.connect(url)
    .then(() => {
        console.log('mongodb connected');
    })
    .catch(() => {
        console.log('DB connection failed');
    })
}

export { mongoDBConnect }