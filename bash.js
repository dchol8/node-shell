const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    let args = data.toString().split(' ');
    const cmd = args[0].trim();
    let param;
    if (args.length > 1) {
        param = args[1].trim();
    }

    switch (cmd) {
        case 'pwd':
            return pwd();
        case 'ls':
            return ls();
        case 'cat':
            return cat(param);
    }

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});

