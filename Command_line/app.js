const yargs = require('yargs')
const note = require('./note')

yargs.command({
    command: 'add',
    describe: 'This is Add Command',
    builder: {
        name:{
            describe:'Enter Your Name',
            demandOption: true,
            type: 'String'
        },
    },
    handler(args) {
        NodeIterator.AddNote(args.name)
    }
})
yargs.parse()