const express = require('express')
const router = express.Router()

//hardware request
router.post('/hardware', async (req, res) => {
    if (!req) { return res.status(400) }
    console.log(req.body)
    res.send('hardware request')
})

//email request
router.post('/email', async (req, res) => {
    if (!req) { return res.status(400) }
    console.log(req.body)
    // res.send('email request')
})

module.exports = router
