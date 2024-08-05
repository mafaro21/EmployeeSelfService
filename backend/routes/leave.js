const express = require('express')
const router = express.Router()
const conn = require('../database')

//creating leave request
router.post('/request', async (req, res) => {
    if (!req) { return res.status(400) }

    const { leave_type, start_date, end_date } = req.body

    conn.query('INSERT INTO loan (leave_type, start_date, end_date) VALUES (?,?,?)', [leave_type, start_date, end_date], (error, results, fields) => {
        console.log('working')
        if (error) {
            res.send('Error executing query:', error.stack);
            return;
        }
        res.send(results)
    })
})

//deciding whether to approve or deny
router.put('/decision', async (req, res) => {
    if (!req) { return res.status(400) }

    res.send('deciding')
})

module.exports = router
