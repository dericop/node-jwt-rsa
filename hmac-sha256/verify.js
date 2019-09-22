const jwt = require('jsonwebtoken');
var token = '';

jwt.verify(token, 'MySecretKey', (err, decoded) => {
  if (err) throw new Error('Invalid Token');
  console.log(decoded);
});
