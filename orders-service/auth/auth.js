const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../services/users/user.model');

passport.use('signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, callback) => {
    try {
        let newUser = new UserModel({
            email: email,
            password: password
        });
        const user = UserModel.add(newUser, () => { });
        return callback(null, user);
    } catch (error) {
        callback(error);
    }
}));

passport.use('signin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, callback) => {
    try {
        const user = UserModel.getBy(email);
        if (!user) {
            return callback(null, false, { message: 'User not found' });
        }

        const validate = UserModel.validatePassword(password, user.password);
        if (!validate) {
            return callback(null, false, { message: 'Invalid password' });
        }
        return callback(null, user, { message: 'Sing in successfully' })
    } catch (error) {
        return callback(error);
    }
}));