import React from 'react'

function JewelData({jewel}) {
    return (
        <div className='product-card'>

            <img className='product-img' src={jewel.img} alt="..." />

            <div className='product-content'>
                <p >Product Name: {jewel.productName}</p>
                <p >Weight in gms: {jewel.productWeight}</p>
                <p >Wastage in %: {jewel.wastage}</p>

            </div>
        </div>
    )
}

export default JewelData