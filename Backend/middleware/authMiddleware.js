const jwt = require('jsonwebtoken');
const config = require('../utils/config');

const SECRET_KEY = config.SECRET_KEY

const authMiddleware = {

  verifyToken: (req, res, next) => {
    console.log("api")
    const token = req.headers.authorization
    console.log("middleware11",token)

    if (!token) {
      return res.status(401).json({ message: 'Authentication failedMW' });
    }
    else {
      console.log("mw17",token)
    }

    try {
      const decodedToken = jwt.verify(token, SECRET_KEY);
      req.userId = decodedToken.userId;
      console.log("decodedtoken",req.userId)
      next();
    } catch (error) {
      console.error('Error verifying token', error);
      return res.status(401).json({ message: 'Authentication failed' });
    }
  }
}
module.exports = authMiddleware;