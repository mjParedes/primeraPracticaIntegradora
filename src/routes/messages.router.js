import { Router } from "express";
import MessageManager from '../dao/mongoManagers/MessageManager.js'


const router = Router()

router.get('/', (req,res)=>{
    res.render('chat')
})


export default router

