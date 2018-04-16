const User          = require('../models').User;
const authService   = require('./../services/AuthService');

// Here we define our various controller methods for the user model

// Create a new user in the database
const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;

    // We want thorough error handling, as the email, password, and phone number
    // can all be entered erraneously
    if(!body.unique_key && !body.email && !body.phone){
        return ReE(res, 'Please enter an email or phone number to register.');
    } else if(!body.password){
        return ReE(res, 'Please enter a password to register.');
    } else if(body.password != body.confirm){
        return ReE(res, 'Passwords do not match.');
    } else if(body.email != body.emailCon){
            return ReE(res, 'Emails do not match.');
    }else{
        let err, user;

        [err, user] = await to(authService.createUser(body));

        if(err) return ReE(res, err, 422);
        else if(user)
            return ReS(res, {message:'Successfully created new user.', user:user.toWeb(), token:user.getJWT()}, 201);
        else
            TE("Error while making new account!")
    }
}
module.exports.create = create;

// Return information on a user
// Information is alsp returned on a successful login, register, or update
const get = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let user = req.user;

    return ReS(res, {user:user.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, user, data
    user = req.user;
    data = req.body;
    user.set(data);

    [err, user] = await to(user.save());
    if(err){
        if(err.message=='Validation error') err = 'The email address or phone number is already in use';
        return ReE(res, err);
    }
    return ReS(res, {message :'Updated User: '+user.email});
}
module.exports.update = update;

const remove = async function(req, res){
    let user, err;
    user = req.user;

    [err, user] = await to(user.destroy());
    if(err) return ReE(res, 'error occured trying to delete user');

    return ReS(res, {message:'Deleted User'}, 204);
}
module.exports.remove = remove;

// Authenticate the user and return a JWT
const login = async function(req, res){
    const body = req.body;
    let err, user;

    [err, user] = await to(authService.authUser(req.body));
    if(err) return ReE(res, err, 422);

    return ReS(res, {token:user.getJWT(), user:user.toWeb()});
}
module.exports.login = login;