import React from 'react';
import "../App.css";

const Nav = (props)=> {

    return(
        <div className="navBar">
            <h2 className="brandName">SOUNDP</h2>
            <button className="enroll-btn">Enroll</button>
            <span className="userAddress">Your address: <span className="address">{props.userAccount} </span></span>    
        </div>
    )
}

export default Nav;