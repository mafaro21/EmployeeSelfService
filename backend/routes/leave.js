const express = require('express')
const router = express.Router()

//creating leave request
router.post('/request', async (req, res) => {
    if (!req) { return res.status(400) }

    res.send('leave request')
})

//deciding whether to approve or deny
router.put('/decision', async (req, res) => {
    if (!req) { return res.status(400) }

    res.send('deciding')
})

module.exports = router
