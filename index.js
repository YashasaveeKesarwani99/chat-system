const express = require('express');
const socketio = require('socket.io')
const http  = require('http')

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users')

const router = require('./router');
const { Socket } = require('dgram');
const { callbackify } = require('util');

const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// socket connect and disconnecting clients
io.on('connection', (socket)=>{
    console.log(socket.id)

    socket.on('join', ({name, room})=>{
       const {error, user} = addUser({id:socket.id,name ,room})

      if(error) return callback(error)

      socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`})
      socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined the chat `})


      //joining the person in the room
      socket.join(user.room)

      io.to(user.roon).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
    })

    //sending message
    socket.on('sendMessage',(message, callback)=>{
        console.log(socket.id)
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user:user.name, text: message})
        io.to(user.room).emit('roomData', {user:user.room, users: getUsersInRoom(user.room)})

        callback();
    })

    socket.on('disconnect',()=>{
        console.log("user has left")
        const user =removeUser(socket.id)

        if(user){
            io.to(user.room).emit('message', {user:'admin', text: `${user.name} has left`})
        }
    })
})

app.use(router);

server.listen(PORT, ()=>{
    console.log(`Server has started on port ${PORT}`)
})