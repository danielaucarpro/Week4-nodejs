const process = require('process');
var os = require('os');
var ds = require('diskspace');
const { stringify } = require('querystring');
const cpu = os.cpus();
const ip = os.networkInterfaces();

//process.argv returns the cmd-line argument
// console.log(process.argv);

const cmsLineArguments = process.argv[2];
switch (cmsLineArguments) {
    case '-h':
        console.log('Here is some help!');
        console.log('These are the argumetns you can try on you command line');
        console.log('"-arch" shows the architecture of your operating system');
        console.log('"-cpu" shows cpu of your operating systems');
        console.log('"-ram" shows free and total memore usage');
        console.log('"-hdd" shows your total and free disk space');
        console.log('"-hostname" shows operating system name');
        console.log('"-ip" shows the ip address');
        console.log('"-os" shows more about your operating system');
        console.log('"-calc" + "add/sub/div/mul" + "num1" + "num2" command to get specs about your operating systems!');
        break;
    case "-arch":
        console.log('Arch: ' + os.arch());
        break;
    case '-cpu':
        console.log('CPU: ' + cpu[0].model);
        break;
    case "-ram":
        console.log('Free memory: ' + os.freemem());
        console.log('Total memory: ' + os.totalmem());
        break;
    case '-hdd':
        ds.check('D', (err, result) => {
            console.log('Total disk space: ' + result.total)
            console.log('Used disk space: ' + result.used)
        })
        break;
    case "-hostname":
        console.log('Host name: ' + os.hostname());
        break;
    case '-ip':
        console.log('Ip address: ' + ip.Ethernet[1].address)
        break;
    case "-os":
        console.log('Platform: ' + os.platform());
        console.log('Os released date: ' + os.release());
        console.log('Directory for temporary files: ' + os.tmpdir());
        console.log('Type: ' + os.type());
        console.log('Uptime: ' + os.uptime());
        console.log('User info: ' + stringify(os.userInfo()));
        break;
    case '-calc':
        if (process.argv[3] === 'add') {
            console.log(eval(parseInt(process.argv[4]) + parseInt(process.argv[5])));
        }
        if (process.argv[3] === 'sub') {
            console.log(eval(parseInt(process.argv[4]) - parseInt(process.argv[5])));
        }
        if (process.argv[3] === 'div') {
            console.log(eval(parseInt(process.argv[4]) / parseInt(process.argv[5])));
        }
        if (process.argv[3] === 'mul') {
            console.log(eval(parseInt(process.argv[4]) * parseInt(process.argv[5])));
        }
        break;
}

process.on('exit', (code) => {
    // console.log(`${code}`);
    console.log('Good bye!')
});

// process.stdin.resume();


// if (process.stdin === 'exit') {
//     process.exit();
// }

// function handle(signal){
//     console.log(`${signal}`);   
// }

//i think sigint (intellegence signal) is related to commands with ctrl key input
// process.on('SIGINT', handle);

// process.on('SIGINT', () => {
//     // console.log(process.stdin);
//     console.log('Good bye!')
// })

//couldnt figured out. Seems to be related with kill and killall
// process.on('SIGTERM', () => {
//     // console.log(process.stdin);
//     console.log('Good bye!')
// })