import mongoose from 'mongoose'
import generateRandomID from "../utils/generateRandomID";
const linkSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
    },
    idUrl: {
        type: String,
        default: generateRandomID
    },
})

export default mongoose.model('Link', linkSchema);