import Room from '../models/roomModel';



export const createRoom = async(req,res) => {
    res.render('index')
}


export const submitCreateRoom = async(req,res) => {
    const room = new Room({
        roomId: Math.random().toString(36).substr(2, 9)
    });
    await room.save();
    res.render('joinRoom', { roomId: room.roomId });
}