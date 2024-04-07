import mongoose from "mongoose"

const mongoDBConnect = (url) => {
    mongoose.connect(url)
    .then(() => {
        console.log('mongodb connected');
    })
    .catch((error) => {
        console.log('DB connection failed', error);
    })
}

export { mongoDBConnect }