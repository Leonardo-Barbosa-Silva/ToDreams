const router = require('express').Router()
const authUserToken = require('../../middlewares/authUserToken')
const rateLimit = require('express-rate-limit')
const { check } = require('express-validator')
const { registerUser, loginUser, getMe } = require('../../controllers/users/usersController')


// Define a limit rate for requests
const limiter = rateLimit({
    windowMs: 8 * 60 * 1000,
    max: 50,
    message: "Too many requests. Please, try again later"
})


// Route to get user data and limit requests
router.get(
    '/me',
    limiter,
    authUserToken,
    getMe
)


// Route to register user, limit requests and validate POST user data
router.post(
    '/register',
    limiter,
    [
        check('name').isLength({ min: 3, max: 40 }),
        check('email').isEmail().withMessage('Please, provide a valid email'),
        check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characteres')
    ],
    registerUser
)


// Route to login user, limit requests and validate POST user data
router.post(
    '/login',
    limiter,
    [
        check('email').isEmail().withMessage('Please, provide a valid email'),
        check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characteres')       
    ],
    loginUser
)






module.exports = router;