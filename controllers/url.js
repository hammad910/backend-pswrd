import shortid from "shortid";
import { shortURL } from "../models/url.model.js";


const getShortUrl = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error : 'url is required'})
    }
    const shortId = shortid()
    await shortURL.create({
        shortURL: shortId,
        redirectURL : body.url,
        visitHistory : []
    })
}

export {getShortUrl}