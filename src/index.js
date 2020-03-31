const app = require('./app');
const sequelize = require('./db/mysql');

const port = process.env.PORT;

const moment = require('moment');

sequelize
    .sync()
    .then(res => {
        app.listen(port, () => {
            console.log(
                moment().format()
        );
            console.log('Server is up on port ' + port);
        });
    })
    .catch(err => console.log(err));
