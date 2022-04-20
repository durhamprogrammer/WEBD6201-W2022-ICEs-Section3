import express, { Request, Response, NextFunction } from 'express';

import passport from 'passport';

import User from "../Models/user";
import {GenerateToken } from '../Util/index';

// Process Pages Functions

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
    passport.authenticate('local', function(err, user, info)
  {
    // are there server errors?
    if(err)
    {
      console.error(err);
      return next(err);
    }

    // are there login errors?
    if(!user)
    {
     return res.json({success: false, msg: 'ERROR: Authentication Error'});
    }

    req.login(user, function(err)
    {
      // are there db errors?
      if(err)
      {
        console.error(err);
        return next(err);
      }

      const authToken = GenerateToken(user);

      //if we had a front-end (like Angular or React or Vue)
      return res.json({success: true, msg: 'User Logged in Successfully!', user: {
        id: user._id,
        DisplayName: user.DisplayName,
        EmailAddress: user.EmailAddress,
        username: user.username
      }, token: authToken});
    });
  })(req, res, next);
}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    // instantiate a new user object
  let newUser = new User
  ({
    username: req.body.username,
    EmailAddress: req.body.emailAddress,
    DisplayName: req.body.firstName + " " + req.body.lastName
  });

  User.register(newUser, req.body.password, function(err)
  {
    if(err)
    {
      if(err.name == "UserExistsError")
      {
        console.error('Error: Inserting New User');
        console.error('Error: User Already Exists');
      }
      console.error(err.name);
      return res.json({success: false, msg: "ERROR: Registration Failed"});
    }

    return res.json({success: true, msg: "User Registered Successfully!", user: newUser});

    // automatically login the user
    /* return passport.authenticate('local')(req, res, ()=>
    {
      return res.redirect('/contact-list');
    }); */
  });
}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{
    req.logOut();

    res.json({success: true, msg: "User Logged Out Successfully!"});
}