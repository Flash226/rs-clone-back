const jwt = require('jsonwebtoken');
const {secret} = require('../configJwt');

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        if (!req.headers.authorization) {
            return res.json(false);
        }
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.json(false);;
        }
        const decodedData = jwt.verify(token, secret);
        req.user = decodedData;
        next();
    } catch (e) {
        console.log(e);
        return res.json(false);
    }
};

// module.exports = function (req, res, next) {
//     if (req.method === "OPTIONS") {
//         next();
//     }
//     try {
//         if (!req.headers.authorization) {
//             return res.status(403).json({message: "User not authorized"});
//         }
//         const token = req.headers.authorization.split(' ')[1];
//         if (!token) {
//             return res.status(403).json({message: "User not authorized"});
//         }
//         const decodedData = jwt.verify(token, secret);
//         req.user = decodedData;
//         next();
//     } catch (e) {
//         console.log(e);
//         return res.status(403).json({message: "User not authorized"});
//     }
// };
