import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import userServices from '../services/users'
import { useNavigate, useSearchParams } from "react-router-dom";
import editProfile from "../Pages/Dashboard"
import auth from "../services/auth";
import Navbar from "../Components/NavBar";

function Dashboard({ name, email }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let [state] = useSearchParams()
    const userData = useSelector(state => state.user);
    console.log(userData)
    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")

    useEffect(() => {
        setNewName(state.get("name"))
        setNewEmail(state.get("email"))
    }, [name,email])

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        const userInfo = await userServices.editProfile({ name: newName, email: newEmail });
        window.location.href = "/dashboard"
        console.log(userInfo)
    }
    return (
        <div>
            <Navbar />
            <div className="editProfile-container">
                <div className="auth-form-container">
                    <h1>Edit Your Profile</h1>
                    <br></br>
                    <form className="signin-form">
                        <label className="signin-label">Name</label>
                        <input className="signin-input" type="text" required value={newName} onChange={(e) => setNewName(e.target.value)} />

                        <br></br>
                        <label className="signin-label">Email</label>
                        <input className="signin-input" required value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

                        <br></br>
                        <button className='signin-btn' onClick={handleUpdateProfile}  >Save and Update</button>

                    </form>
                </div>
            </div>
        </div>


    )
}

export default Dashboard