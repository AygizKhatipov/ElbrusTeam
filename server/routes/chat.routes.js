const router = require('express').Router(); 
const {Chat} = require('../db/models')



router.route('/')
.get( async(req, res) => { 
    try {
        const messages = await Chat.findAll()
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json(error)
    }
})
.post( async(req, res) => {
    try {

        const {fromId, message} = req.body
        const newMessage = await Chat.create({fromId, toId: fromId, message})

        if(newMessage) {
            res.status(201).json(newMessage)
        }
        else {
            res.status(404).json({message: 'Попытайтесь отправить сообщение заново'})
        }
    } catch (error) {
        res.status(500).json(error)
    }
})











module.exports = router