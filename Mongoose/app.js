const mongoose = require('./connect')
const User = require('./Model/Users')

// AllUser...

// const AllUser = async () => {
//     const result = await User.find()
//     console.log(result)
// }
// AllUser()

//Save

// const SaveUser = async () => {
//     const data = { name: 'krupali', email: 'krupali@gmail.com', address: 'baroda' }
//     const user = await new User(data)
//     user.save()
//     console.log('Inserted Success...')
// }
// SaveUser()

//Delete

// const DeleteUser = async ()=>{
//     id = "63a48364543f1e7be8907f4a"
//     const user = await User.findByIdAndDelete(id)
//     console.log("Deleted...");

// }
// DeleteUser()

const UpdateUser = async () =>{
    const id = "63a56102eb04c3d9c9636e25"
    const data = {name:'Ram',email:'Ram@gmail.com'}
    const user = await User.findByIdAndUpdate(id,data)
    console.log("Updated.....");
  }
  
  UpdateUser()
  