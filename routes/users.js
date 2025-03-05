const express = require('express');
const router = express.Router();
const userKontrola = require('../controllers/users');

router.get('/', userKontrola.getIndex);
router.get('/user', userKontrola.getUserPage);
router.post('/user', userKontrola.createItem);
/* router.get('', userKontrola.dohvatiSveKorisnike) */

// do this via controller
module.exports = router;