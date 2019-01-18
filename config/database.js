if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://charlie:qwerty101ck@ds161144.mlab.com:61144/safapp'
    }
} else {
    module.exports ={
        mongoURI:"mongodb://localhost:27017/Saf-App"
    }
}
