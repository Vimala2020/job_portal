const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//check is user is authenticated

exports.isAuthenticated = async(req, res, next) =>{
    const {token} = req.cookies;

    //make sure token exists
    if(!token) {
        return next(new ErrorResponse('Not Authorised to access this route'))
    }
}