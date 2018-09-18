function pwd() {
    // process.stdout.write('prompt > ')
    // process.stdin.on('data', (data) => {
    //     const cmd = data.toString().trim()

    //     if (cmd === 'pwd') {
    //         process.stdout.write(process.env.PWD)
    //         process.stdout.write('\nprompt > ')
    //     }


    // })
    process.stdout.write(process.env.PWD);
    process.stdout.write('\nprompt > ');
}

module.exports = pwd;
