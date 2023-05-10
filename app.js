import express from "express";
import http from 'http';
import socketIO from 'socket.io';
import nodemailer from "nodemailer";
import hbs from "hbs";
import path from 'path';
import connectDB from "./config/dbConnection";
import indexRouter from './routes/index'

const app = express();
const server = http.createServer(app);
export const io  = socketIO(server);



const PORT = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/',indexRouter);


connectDB().then(()=>server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)));