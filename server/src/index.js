const app = require('./app');
const sequelize = require('./db/mysql');

const port = process.env.PORT;

sequelize
    .sync()
    .then(res => {
        app.listen(port, () => console.log('Server is up on port ' + port));
    })
    .catch(err => console.log(err));
