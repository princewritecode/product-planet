import LOGO_URL from "../assets/images.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () =>
{
    const [btnNameReact, setBtnNameReact] = useState(true);
    useEffect(() =>
    {
        const loginElement = document.getElementById('login');
        if (loginElement)
        {
            if (btnNameReact === true)
            {
                loginElement.innerHTML = "Login";
            } else
            {
                loginElement.innerHTML = "Logout";
            }
        }
    }, [btnNameReact]);
    return (
        <>
            <div id="container-nav">
                <img src={LOGO_URL} alt="logo" id="product-image"></img>
                <ul id="nav-links">
                    <li><Link to='/'> Home</Link></li>
                    <li><Link to='/about'> About</Link></li>
                    <li><Link to='/contact'> Contact</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <button onClick={() =>
                    {
                        setBtnNameReact((preState) =>
                        {
                            return !preState;
                        });
                    }} id="login">{btnNameReact}</button>
                </ul>
            </div>
        </>
    );
};
export { Header };