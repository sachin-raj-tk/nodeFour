import mongoose from "mongoose";


const roomSchema = mongoose.Schema({
    roomId: {
        type: String,
        unique: true
    }
})


const Room = mongoose.model('Room',roomSchema);


export default Room;