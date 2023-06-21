const router = require('express').Router()
const authUserToken = require('../../middlewares/authUserToken')
const { check } = require('express-validator')
const { getMyGoals, setGoal, updateGoal, deleteGoal } = require('../../controllers/goals/goalsController')


// Route to get user goals
router.get('/my', authUserToken, getMyGoals)

// Route to create goals
router.post(
    '/create',
    check('text').isLength({ max: 1000 }),
    authUserToken,
    setGoal
)

// Route to update a goal
router.put(
    '/update/:id',
    check('text').isLength({ max: 1000 }),
    authUserToken,
    updateGoal
)

// Route to delete a goal
router.delete('/delete/:id', authUserToken, deleteGoal)



module.exports = router;