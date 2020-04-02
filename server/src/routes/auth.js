const isAuth = (req, res, next) => {
    if(false){
        res.status(401).send({
            error: 'You are not authorize'
        });
    }

    next();
};

module.exports = isAuth;
