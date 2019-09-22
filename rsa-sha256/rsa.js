const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('jwtRS256.key');
var token = jwt.sign({ twitter_account: '@dericop_' }, privateKey, {
  algorithm: 'RS256',
  expiresIn: 60 * 60,
  audience: '078b1750-dd74-11e9-8a34-2a2ae2dbcce4'
});
console.log(token);
