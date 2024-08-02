const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
    res.send('done')
})

//adding employee
router.post('/add', async (req, res) => {
    if (!req) { return res.status(400) }

    res.send('adding employee')
})

//search employee
router.get('/search', async (req, res) => {
    if (!req) { return res.status(400) }

    res.send('searching employee')
})

//editing employee
router.put('/edit', async (req, res) => {
    if (!req) { return res.status(400) }
    console.log(req.body)

    // res.send('modifying employee')
})

//deleting employee
router.delete('/delete', async (req, res) => {
    if (!req) { return res.status(400) }

    res.send('deleting employee')
})


module.exports = router