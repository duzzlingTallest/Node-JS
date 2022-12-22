const SaveUser = async () => {
    const data = { name: 'max', email: 'MAx@gmail.com', address: 'US' }
    const user = await new User(data)
    user.save()
    console.log('Inserted Success...')
}
SaveUser()