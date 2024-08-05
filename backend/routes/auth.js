const express = require('express')
const router = express.Router()
const conn = require('../database')

//logging in
router.post('/login', async (req, res) => {
    if (!req) { return res.status(400) }

    const { staffId, nationalId } = req.body

    conn.query('SELECT * FROM employee WHERE (id, national_id) = (?,?)', [staffId, nationalId], (error, results, fields) => {
        // console.log('working')
        if (error) {
            res.send('Error executing query:', error.stack);
            return;
        } else if (results.length >= 1) {
            res.send(results)
        } else {
            res.sendStatus(404)
        }

    })
})


module.exports = router
