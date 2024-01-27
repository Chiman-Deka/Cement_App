import React from 'react';
import '../Style/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                {/* <!-- <img style="width: 40px;" src="img/recycling.png" alt=""> --> */}
                <span className="logoname">Amrit Cement</span>
            </div>

            <div className="searchbox">
                <form action="">
                    <input type="text" placeholder="Search"/>
                    <i className="fa fa-search"></i>
                </form>
            </div>
        </div>
    )
}

export default Navbar;

