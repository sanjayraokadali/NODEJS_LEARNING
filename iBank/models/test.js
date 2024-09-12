
const User = require('./user');

user = new User('bob_smith','alice.mail.com','12345');

user.displayUser();
user.save();