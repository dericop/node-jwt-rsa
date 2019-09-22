const _ = require('lodash');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).send('Not authorized');

  const token = _.replace(authHeader, 'Bearer', '').trim();
  if (!token) return res.status(401).send('Not authorized');
  const publicKey = fs.readFileSync('../rsa-sha256/jwtRS256.key.pub');

  try {
    const decoded = jwt.verify(token, publicKey, {
      algorithm: 'RS256',
      audience: '078b1750-dd74-11e9-8a34-2a2ae2dbcce4'
    });
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send('Not authorized');
  }
};
