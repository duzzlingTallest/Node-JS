// all Functioin & mathode

const yargs = require('yargs')
const note = require('./note')

yargs.command({
    command:'add',
    describe:'This is add Command',
    builder :{
        name:{
            describe:'Enter Your Name',
            demandOption:'true',
            type:'string'
        },

    },
    handler(args){
        note.AddNote(args.note)
    }
})
yargs.parse()