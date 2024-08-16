const express = require('express');
const router = express.router();

router.post("/regester", registerUser);
route.post("/login", loginUser);
router.post("/current", currentUser);

module.exports = router;