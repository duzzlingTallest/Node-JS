const mongoose = require('./connect')
const User = require('./Model/Users')


// // AllUser
// const AllUser = async () => {
//     const result = await User.find()
//     console.log(result);
// }
// AllUser()

//SaveUser

const SaveUser = async () => {
    const data = { name: 'max', email: 'MAx@gmail.com', address: 'US' }
    const User = await new User(data)
    User.save()
    console.log('Inserted Success...')
}
SaveUser()

//Delete

// const DeleteUser = async ()=>{
//     id = "63a179ceec34bd27f8fb4988"
//     const user = await User.findByIdAndDelete(id)
//     console.log("Deleted...");

// }
// DeleteUser()
