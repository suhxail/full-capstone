import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import userServices from '../services/users'
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar";


function Dashboard() {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);
    const [userName, setUserName] = useState(null)
    const [userEmail, setUserEmail] = useState(null)

    // console.log(userData.user.token)
    let Tooken = localStorage.getItem('loggedInUser')
    
    const viewProfile = async () => {
        const userInfo = await userServices.getProfile(Tooken);
        console.log(userInfo)
        setUserName(userInfo.name)
        setUserEmail(userInfo.email)
    }

    const handleDeleteProfile = async () => {
        alert("are you sure?, Do you want to delete your profile?")
        const deleteProfile = await userServices.deleteProfile(Tooken)
        console.log("user deleted successfully")
        // navigate('/')
        // handleSignOut()
        window.location.href = "/"
    }

    const handleSignOut = () => {
        alert("signout?")
        localStorage.clear()
        dispatch({
            type: 'SIGNOUT_SUCCESS',
            payload: null
        })
        window.location.href = "/"
    }

    useEffect(() => {
        // window.location.reload(true);   
        viewProfile();
    }, [])
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/editprofile?name=${userName}&email=${userEmail}`)
    }
    
    return (
        <>
        <Navbar />

            <div className="viewProfile-container">
                <div className="auth-form-container">
                    <h1>Welcome "{userName}"</h1>
                    <br></br>
                    <form className="signin-form">
                        <label className="signin-label"  >Name</label>
                        <input className="signin-input" disabled value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <br></br>
                        <label className="signin-label">Email</label>
                        <input className="signin-input" disabled value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        <br></br>
                        <button className='signin-btn' type='submit' onClick={handleClick} >Edit Profile</button>
                        <br></br>
                    </form>
                    <button className='signin-btn' onClick={handleDeleteProfile}>Delete Profile</button>
                </div>
            </div>
        </>


    )
}

export default Dashboard

