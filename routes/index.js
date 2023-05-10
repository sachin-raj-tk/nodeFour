import express from "express";
import {createRoom,submitCreateRoom} from "../controllers/chatController"
const router = express.Router();


router.get('/', createRoom)

router.post('/create-room', submitCreateRoom)

export default router;