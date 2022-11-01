const jwt = require('jsonwebtoken');
const accessTokenSecret = 'gestari-secret-key';

function AuthenticationToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    if(!authHeader) {
        next(new Error("Token not found"));
    }

    const token = authHeader.split(" ")[1];
    if(!token) {
        next(new Error("Token is required"));
    }

    const decoded = jwt.verify(token, accessTokenSecret);

    const user = {
        id: decoded.id,
        name: decoded.name,
        role: decoded.role,
    };

    req.user = user;

    next();
}

module.exports = AuthenticationToken;
