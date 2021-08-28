const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.port

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on ' + port)
})







// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined, true)
//     }
// })
// // const errorMiddleware = (req, res, next) => {
// //     throw new Error('From my middleware')
// // }
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })


// // Middleware for maintenance mode
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Please try back soon.')
// })
// // How to use middleware
// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })


// // How populate work
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     //  Getting owner who created this particular task
//     // const task = await Task.findById('6124083a9ba79431a07f1e8a')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     // Getting all tasks created by this user
//     const user = await User.findById('6123e278bdffcc4994464bef')
//     await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }
// main()


// // toJSON example
// const pet = {
//     name: 'Hal'
// }
// pet.toJSON = function () {
//     // console.log(this)
//     // return this
//     return {}
// }
// console.log(JSON.stringify(pet))


// JSONwebtoken example
// const jwt = require('jsonwebtoken')
// const myFunction = async () => {
//     // create authentication tokens
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismylearningcourse', { expiresIn: '5days' })
//     console.log(token)

//     // verify to make sure the user is authenticated correctly
//     const data = jwt.verify(token, 'thisismylearningcourse')
//     console.log(data)
// }
// myFunction()


// Hashing password example
// const bcrypt = require('bcrypt')
// const myFunction = async () => {
//     const password = 'Dhruvi@1234'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Dhruvi@1234', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()