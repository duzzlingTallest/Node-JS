// All Logic

const fs = require('fs');
const loadNote =()=>{
    try {
        const dataBuffer = fs.readFileSync('./note.json')
        const data = dataBuffer.stringify()
        return JSON.parse(data)
    } catch (e) {
        return[]
    }
}

const AddNote = (name) => {
    const notes = loadNote() // what is this ???
    const duplicateData = notes.filter((note) => note.name == name)
    if (duplicateData.length == 0) {
        
        notes.push({ name:name })
    }else{
        console.log('Record Already Exist....!!')
    }

    SaveNote(notes)
}

    const SaveNote = (data) =>{
        const filterData = JSON.stringify(data)
        // console.log(filterData)
        fs.writeFileSync('note.json',filterData)
    }

    module.exports = {
        AddNote
    }