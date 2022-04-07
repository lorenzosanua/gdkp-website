const express = require('express')
const router = express.Router()
const {getCharacter, setCharacter, updateCharacter, deleteCharacter} = require('../controllers/characterController')

router.route('/').post(setCharacter)
router.route('/:id').get(getCharacter).put(updateCharacter).delete(deleteCharacter)

module.exports = router