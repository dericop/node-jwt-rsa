const jwt = require('jsonwebtoken');
var token = jwt.sign({ twitter_account: '@dericop_' }, 'MySecretKey');
console.log(token);
