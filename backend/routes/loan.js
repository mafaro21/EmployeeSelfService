const express = require('express')
const router = express.Router()
const conn = require('../database')

//loan application
router.post('/apply', async (req, res) => {
    if (!req) { return res.status(400) }
    console.log(req.body)

    // const { } = req.body

    // conn.query('INSERT INTO loan () VALUES ()', [], (error, results, fields) => {
    //     if (error) {
    //         res.send('Error executing query:', error.stack);
    //         return;
    //     }
    //     res.send(results)
    // })

    // reason
    // currency
    // loanAmount
    // loanInstallment
    // gross
    // net
    // accName
    // bank
    // accNum
    // branchName
    // branchCode 
})

//loan decision
router.post('/decision', async (req, res) => {
    if (!req) { return res.status(400) }

    console.log('decision application')
})

module.exports = router
