const logOut = async () => {
  try {
    // TODO: handle logout
    console.log('logout')
    return { error: false, msg: 'logout' }
  } catch (error) {
    console.log(error)
    return { error: true }
  }
}

const authApi = {
  logOut
}

export default authApi
