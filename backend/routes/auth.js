const express = require('express')
const router = express.Router()

//logging in
router.post('/login', async (req, res) => {
    if (!req) { return res.status(400) }

    console.log('logging in')
    console.log(req.body)
    res.send('logging in')
})


module.exports = router
