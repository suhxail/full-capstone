const getToken = () => {
    const userToken = localStorage.getItem('loggedInUser')
   console.log("usertoken",userToken)
    return userToken
}

export default getToken;