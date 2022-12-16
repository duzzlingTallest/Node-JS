// install -- npm i yargs

const yargs = require('yargs')
yargs.command({
    command: 'add',
    describe: 'This is Add Command',
    builder: {
        Number1: {
            describe : 'Enter Number1',
            demandOption: true,
            type: 'Number'
        },
        Number2: {
            describe : 'Enter Number2',
            demandOption: true,
            type: 'Number'
        }
    },
    handler(args){
        console.log(args.Number1 + args.Number2)
    }
})

yargs.parse()


// for code run process :-

// 1}. add folder :- cd .\Command_line
// 2}. and then :- C:\Users\Kaushal Damani\Desktop\node\Command_line>
// 3}. and then :- C:\Users\Kaushal Damani\Desktop\node\Command_line> **past here the input this code (node yargs.js add --Number1=4 --Number2=10)**