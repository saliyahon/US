const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const multer = require('multer') //ддля обработки файлов кот отправл
const fs = require('fs')
const bcrypt = require('bcryptjs')



app.use(express.static('./public')) //papka public put, ves front end fail budet tam
app.use(bodyParser.urlencoded({extended: true})) //читать запрос
app.use(bodyParser.json({limit: '2mb'}))//обработка форм
app.use(cookieParser()); 
app.use(cors())
app.use(morgan('dev'))




app.use(express.static('./public'))

app.get('*', (req, res, next) => {
	res.redirect('/#' + req.originalUrl)
})


app.listen(8080, () => {
	console.log(`Server listening on port ${8080}`)
})