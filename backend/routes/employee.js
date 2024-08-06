const express = require('express')
const router = express.Router()
const conn = require('../database')


//adding employee
router.post('/add', async (req, res) => {
    if (!req) { return res.status(400) }

    const { firstname, lastname, gender, address, email, dateofbirth, nationalid, phonenumber, maritalstatus } = req.body

    const joindate = new Date()

    const employmentStatus = 'active'

    conn.query('INSERT INTO employee (first_name, last_name, gender, address, email, date_of_birth, national_id, join_date, phone_number, status_of_employment, marital_status ) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [firstname, lastname, gender, address, email, dateofbirth, nationalid, joindate, phonenumber, employmentStatus, maritalstatus], (error, results, fields) => {
        console.log('working')
        if (error) {
            res.send('Error executing query:', error.stack);
            return;
        }
        res.send(results)
    })
})

//search employee
router.post('/search', async (req, res) => {
    if (!req) { return res.status(400) }

    const { search } = req.body

    conn.query('SELECT * FROM employee WHERE first_name LIKE (?) OR last_name LIKE (?)', [`%${search}%`, `%${search}%`], (error, results, fields) => {
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