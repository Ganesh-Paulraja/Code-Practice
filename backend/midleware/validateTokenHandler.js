const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];

      if (!token) {
        res.status(401);
        throw new Error('Token is missing');
      }

      // Verify the token
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          res.status(401);
          throw new Error('User is not authorized');
        }
        req.user = decoded.user;
        next();
      });
    } else {
      res.status(401);
      throw new Error('Authorization header is missing or invalid');
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = validateToken;