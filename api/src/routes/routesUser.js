const express = require('express');
const createUser = require('../controllers/user/createUser');
const updateUser = require('../controllers/user/updateUser');
const getUser = require('../controllers/user/getUsers');
const getdUser = require('../controllers/user/getdUser');
const getNameUser = require('../controllers/user/getNameUser');
const deleteUser = require('../controllers/user/deleteUser');

const router = express.Router();

router.get('/', getUser);
router.get('/:dni', getdUser);
router.get('/name/:name', getNameUser);
router.post('/create', createUser);
router.put('/:dni', updateUser);
router.delete('/delete/:dni', deleteUser);


module.exports = router;