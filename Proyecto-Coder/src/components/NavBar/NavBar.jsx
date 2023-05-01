import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css" ;

export const NavBar = () => {
    return (
    <div className='NavBar'>
        <Link to='/' className='nav-logo'>Dix<span>Gamer</span></Link>
        <div className='nav-items'>
            <Link to='/'>Consolas</Link>
            <Link to='/categoria/PlayStation'>Play Station </Link>
            <Link to='/categoria/Xbox'>Xbox </Link>
            <Link to='/categoria/Nintendo'>Nintendo </Link>
            <Link to='/categoria/Family'>Family</Link>
            <span><CartWidget/></span>
        </div>
    </div>
    )
}

export default NavBar;

