const express = require('express')
const router = express.Router()

//loan application
router.post('/apply', async (req, res) => {
    if (!req) { return res.status(400) }

    console.log('loan application')
})

//loan decision
router.post('/decision', async (req, res) => {
    if (!req) { return res.status(400) }

    console.log('decision application')
})

module.exports = router