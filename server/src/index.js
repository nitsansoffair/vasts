const app = require('./app');
const sequelize = require('./db/mysql');
const User = require('./models/users');
const Vast = require('./models/vasts');

const port = process.env.PORT;

Vast.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Vast);

sequelize
    .sync()
    .then(res => {
        return User.findOne({ email: 'test@test.com' });
    })
    .then(user => {
        if(!user){
            return User.create({ name: process.env.DUMMY_USERNAME, email: process.env.DUMMY_EMAIL, password: process.env.DUMMY_PASSWORD });
        }

        return user;
    })
    .then(user => {
        app.listen(port, () => console.log('Server is up on port ' + port));
    })
    .catch(err => console.log(err));

// TODO - Add authorization
