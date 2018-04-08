const User 			= require('./../models').User;
const validator     = require('validator');

/*
We would love if the user can use either an email or phone number.
This method helps us combine what ever is sent to a variable called unique_key. 
Which we will use in the create user function
*/

const getUniqueKeyFromBody = function(body){ 
    // this is so they can send in 3 options for unique_key, email, or phone and it will work
    let unique_key = body.unique_key;
    if(typeof unique_key==='undefined'){
        if(typeof body.email != 'undefined'){
            unique_key = body.email
        }else if(typeof body.phone != 'undefined'){
            unique_key = body.phone
        }else{
            unique_key = null;
        }
    }

    return unique_key;
}
module.exports.getUniqueKeyFromBody = getUniqueKeyFromBody;

// This function creates and prepares the user for insertion
const createUser = async function(userInfo){
    let unique_key, auth_info, err;

    auth_info={}
    auth_info.status='create';

    unique_key = getUniqueKeyFromBody(userInfo);
    if(!unique_key) TE('An email was not entered.');

    if(validator.isEmail(unique_key)){
        auth_info.method = 'email';
        userInfo.email = unique_key;

        [err, user] = await to(User.create(userInfo));
        
        if(err) {
            if(err.message=='Validation error') 
                TE('The email address or phone number is already in use');
            else
                TE(err.message);
        }

        return user;

    }else if(validator.isMobilePhone(unique_key, 'any')){//checks if only phone number was sent
        auth_info.method = 'phone';
        userInfo.phone = unique_key;

        [err, user] = await to(User.create(userInfo));
        if(err) TE(err.message);

        return user;
    }else{
        console.log(userInfo)
        TE('A valid email or phone number was not entered.');
    }
}
module.exports.createUser = createUser;

// To log the user in, we need to verify they exist
const authUser = async function(userInfo){//returns token
    let unique_key;
    let auth_info = {};
    auth_info.status = 'login';
    unique_key = getUniqueKeyFromBody(userInfo);

    if(!unique_key) TE('Please enter an email to login');


    if(!userInfo.password) TE('Please enter a password to login');

    let user;
    
    // Determine the unique key for the user row in the db
    // Then, search and verify existence
    if(validator.isEmail(unique_key)){
        auth_info.method='email';

        [err, user] = await to(User.findOne({where:{email:unique_key}}));
        console.log(err, user, unique_key);
        if(err) TE(err.message);

    }else if(validator.isMobilePhone(unique_key, 'any')){//checks if only phone number was sent
        auth_info.method='phone';

        [err, user] = await to(User.findOne({where:{phone:unique_key }}));
        if(err) TE(err.message);

    }else{
        TE('A valid email or phone number was not entered');
    }

    if(!user) TE('Email or Password incorrect!');

    [err, user] = await to(user.comparePassword(userInfo.password));

    if(err) TE(err.message);

    return user;

}
module.exports.authUser = authUser;