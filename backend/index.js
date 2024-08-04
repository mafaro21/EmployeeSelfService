const express = require('express')
const cors = require('cors');
const app = express()
const port = 8888

app.use(express.json());
app.use(cors())

const employeeRoute = require('./routes/employee.js')
const leaveRoute = require('./routes/leave.js')
const loanRoute = require('./routes/loan.js')
const authRoute = require('./routes/auth.js')
const requestRoute = require('./routes/request.js')

app.use('/auth', authRoute)
app.use('/employee', employeeRoute)
app.use('/leave', leaveRoute)
app.use('/loan', loanRoute)
app.use('/request', requestRoute)

app.get('/', (req, res) => {
    res.send('its working')
    console.log('home')
})

app.listen(port, () => {
    console.log(`live on port ${port}`)
})