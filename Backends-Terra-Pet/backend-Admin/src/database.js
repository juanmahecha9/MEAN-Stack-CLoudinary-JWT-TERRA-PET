const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://admin1234567890:admin1234567890@cluster0-qsspt.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));