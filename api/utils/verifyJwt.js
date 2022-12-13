const jwt = require("jsonwebtoken");
const createError = require("./error");

const verifyToken = (req, res, next) => {
    console.log("inside verify Token");
    const token = req.cookies.access_token;
    
   
    if (!token) {
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      
        if (err) return next(createError(403, "Invalid token !"));
        req.user = user;
        return next();
    });
};

const verifyUser = (req, res, next) => {
    
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
           
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};


const verifyAdmin = (req, res, next) => {

  
    verifyToken(req, res, () => {

        if (req.user.isAdmin)
            return next();
        else return next(createError(403, "You are not Authorized"));
    });


}

module.exports = { verifyAdmin, verifyUser };