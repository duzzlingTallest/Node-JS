const fs = require('fs')
const loadNote = () => {
    try{
        const dataBuffer = fs.readFileSync('./note.json')
        return JSON.parse(data)
    } 
    catch(e) {
        return[]
    }
}

const AddNote = (name) => {
    const notes = loadNote()
    const duplicatData = notes.filter((note)=> note.name == name)
    if (duplicatData.length == 0){

        note.push({name: name})
    } else {
        console.log('Record Already Exist....')
    }
    saveNote(notes)

}
const sevaNote = (data) => {
    const filterData = JSON.stringify(data)
    // console.log(filterData);
    fs.writeFileSync('note.json',filterData)
}

module.exports = {
    AddNote
}