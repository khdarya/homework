import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './Navlink.module.css'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <nav className={style.mainNav}>
            <div onClick={()=> setIsVisible(!isVisible)}>CLICK ME</div>
            {
                isVisible ?  <div className={style.list}>
                    <div>
                        <NavLink className={style.navlink} to="/prejunior">PreJunior</NavLink>
                    </div>
                    <div>
                        <NavLink className={style.navlink} to="/junior">Junior</NavLink>
                    </div>
                    <div>
                        <NavLink className={style.navlink} to="/juniorplus">JuniorPlus</NavLink>
                    </div>
                </div> : <div></div>
            }

        </nav>
    )
}

export default Navbar;