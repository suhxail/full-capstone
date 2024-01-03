import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch,useSelector} from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar'
import JewelData from '../JewelData/JewelData';


function ProductList({jewelData}) { 

    const productList = jewelData.map((jewel) =>
        <JewelData jewel={jewel} key={jewel.id} />  
    )

    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);

    const navigate = useNavigate();

    const handleChange = () => {
        navigate('/calculator')
    }

    return (
        <>
        <NavBar />
        <div className='App2'>
            {userData.user && <Navigate to="/productlist" replace={true} />}
            
            <div className='product-listing-container'>
                {productList}
            </div>
            <div>
                <button className='product-btn' onClick={handleChange}>Calculate gold rate</button>
                
            </div>
        </div>
        </>

    )
}
export default ProductList;








