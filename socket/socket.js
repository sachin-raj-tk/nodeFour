import io from '../app'


io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('joinRoom', (roomId, username) => {
        socket.join(roomId);
        io.to(roomId).emit('user-joined', username);

        socket.on('chat-message', (message) => {
            io.to(roomId).emit('chat-message', { message, username });
        });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});