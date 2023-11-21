require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileupload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileupload({}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
/*
  Middleware которое работает с ошибками обязательно должен идти в конце
  Так как он замыкаюший, если произошла ошибка мы прекрашаем работу и возврашаем ошибку
*/
app.use(errorHandler) 


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server started on port: ', PORT))
    } catch (e) {
        console.log(e)
    }
}

start()
