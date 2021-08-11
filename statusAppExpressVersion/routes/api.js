//importing core modules
const express = require('express');
const os = require('os');
const ds = require('diskspace');

const router = express.Router();

router.get('/arch', (req, res, next) => {
    res.send(`<h1>Your operating system arch is: ${os.arch}</h1>`);
});

router.get('/cpus', (req, res, next) => {
    let cpu = os.cpus();
    res.send(`<h1>Your operating system cpu is: ${cpu[0].model}</h1>`);
});

router.get('/ram', (req, res, next) => {
    res.send(`<h1>Your operating system ram memory is: ${os.totalmem}</h1>`);
});

router.get('/diskspace', (req, res, next) => {
    ds.check('D', (err, result) => {
        res.send(`<h1>Your operating system disk space is: ${result.total} bytes</h1>`);
    });
});

router.get('/hostname', (req, res, next) => {
    res.send(`<h1>Your operating system host name is: ${os.hostname}</h1>`);
});

router.get('/ipaddress', (req, res, next) => {
    let ip = os.networkInterfaces();
    res.send(`<h1>Your operating system ip is: ${ip.Ethernet[1].address}</h1>`);
});

module.exports = router;