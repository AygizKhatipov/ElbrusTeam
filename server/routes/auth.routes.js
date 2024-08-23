const router = require('express').Router()
const {User, Account, Point} = require('../db/models');
const bcrypt = require('bcrypt');
const generateTokens = require('../utils/generateTokens');
const jwtConfig = require('../config/jwtConfig');

router.post('/registration', async (req, res) => {
    try {
        console.log(111)
        const {lastName,firstName, email, password, isMember, roleId} = req.body;
        if (lastName.trim() === '' ||
        firstName.trim() === '' ||
            email.trim() === ''|| 
            password.trim() === '') {
            return res.status(400).json({message: 'Пустые поля'})
        }

        const userInDb = await User.findOne({where: {email}, include:{model:Account, include:{model:Point}}});

        if (userInDb) {
            return res.status(400).json({message: 'Данный пользователь зарегистрирован'})
        } else {
            const user = (await User.create({lastName,firstName, email, password: await bcrypt.hash(password, 10), isMember, roleId})).get();
            
            const {accessToken, refreshToken} = generateTokens({user});

            res
                .status(201)
                .cookie(jwtConfig.refresh.type, refreshToken, {httpOnly: true, maxAge: jwtConfig.refresh.expiresIn})
                .json({accessToken, user})
        }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.post('/authorization', async (req, res) => {
    try {
        const { email, password} = req.body;

        if (email.trim() === ''|| 
            password.trim() === '') {
            return res.status(400).json({message: 'Пустые поля'})
        }

        const user = (await User.findOne({where: {email}})).get();
        const isMatch = await bcrypt.compare(password, user.password)
        console.log(user.password)
        if (user && isMatch) {
            const {accessToken, refreshToken} = generateTokens({user});

            res
                .status(200)
                .cookie(jwtConfig.refresh.type, refreshToken, {httpOnly: true, maxAge: jwtConfig.refresh.expiresIn})
                .json({accessToken, user})
        } else {
            return res.status(400).json({message: 'Неправильные данные'})
        }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.delete('/logout', (req, res) => {
    res
        .clearCookie(jwtConfig.refresh.type)
        .json({accessToken: ''})
});

module.exports = router;