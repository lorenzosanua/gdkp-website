const express = require('express')
const router = express.Router()
const {getUser, setUser, updateUser, deleteUser} = require('../controllers/userController')

router.route('/').post(setUser)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router