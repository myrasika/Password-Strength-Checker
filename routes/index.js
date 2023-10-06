const express = require('express');
const passport = require('passport');

const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express', user: req.user });
});

// login
router.get('/login', (req, res, next) => {
    res.render('login', { title: 'Login', message: req.flash('loginMessage') });
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

// signup
router.get('/signup', (req, res, next) => {
    res.render('signup', { title: 'Sign up', message: req.flash('signupMessage') });
});


router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));


// Profile
router.get('/profile', isLoggedIn, (req, res, next) => {
    res.render('profile', { title: 'Profile', user: req.user });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});


function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
};

module.exports = router;
