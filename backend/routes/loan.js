const express = require('express')
const router = express.Router()
const conn = require('../database')

//loan application
router.post('/apply', async (req, res) => {
    if (!req) { return res.status(400) }
    console.log(req.body)

    res.send('loan application')
})

//loan decision
router.post('/decision', async (req, res) => {
    if (!req) { return res.status(400) }

    console.log('decision application')
})

module.exports = router
