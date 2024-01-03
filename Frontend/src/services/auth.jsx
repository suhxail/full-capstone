import instance from '../services/instance'

const signup = async (credentials) => {
    try {
        console.log('Signing up user...');
        const response = await instance.authInstance.post('/users/signup', credentials);
        console.log('Signup Successful');
        console.log(response.data.message);
    } catch (error) {
        console.error('Signup failed', error);
    }
}

const signin = async (credentials) => {
    try {
        // console.log('Signing In user...');   
        const response = await instance.authInstance.post('/users/signin', credentials);
        console.log("response", response.data)
        // console.log('Signin Successful');       

        // after successful signin,store the token in the local storage
       localStorage.setItem('loggedInUser', response.data.token);
        console.log("response2",localStorage.getItem('loggedInUser'))  
        return response.data;
    } catch (error) {        
        console.error('Signin failed', error);
    }
}

export default {
    signup,
    signin,
}










