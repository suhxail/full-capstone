import protectedInstance from '../services/instance'
import getToken from '../utils/authUtils';
// import userToken from '../utils/authUtils'
import axios from 'axios';

const userToken = localStorage.getItem('loggedInUser')

const getProfile = async () => {
    
    try {       
           console.log("usertoken",userToken)                

        // const Token = getToken(userToken)   
        const config = {
            headers : { authorization: userToken}
        }        
        // const response = await protectedInstance.get('/users/profile')
       const response = await axios.get('http://localhost:3002/api/users/profile',config)         
        return response.data
    } catch (error) {
        console.error('Fetching user profile failed', error);
    }
}

const editProfile = async ({name,email}) => {    
    try {            
          console.log("usertoken",userToken)   
        
        const config = {            
            headers : { authorization: userToken},            
        }
        console.log('Fetching user profile...');
        console.log("user.jsx19", name, email);
       const response = await axios.put('http://localhost:3002/api/users/profile/:id',{name,email},config)
        
        return response.data
    } catch (error) {
        alert("Name and Email cannot be empty")
        console.error('Updating user profile failed', error);
    }
}

const deleteProfile = async () => {
    try{
        const config = {
            headers : { authorization: userToken}            
        }
        const response = await axios.delete('http://localhost:3002/api/users/profile/:id',config)
        console.log(response)

    } catch (error) {
        console.error('Deleting user profile failed', error);
    }
}

export default {
    getProfile,
    editProfile,
    deleteProfile
}