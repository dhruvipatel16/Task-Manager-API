const mongoose = require('mongoose')

//Connecting to d/b
mongoose.connect(process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
