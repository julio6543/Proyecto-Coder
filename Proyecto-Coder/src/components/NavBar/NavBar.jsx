import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css" 

export const NavBar = () => {
    return (
    <div className='NavBar'>
        <span className='nav-logo'>Dix<span>Gamer</span></span>
        <div className='nav-items'>
            <a href='/categoria/procesadores'>Consolas</a>
            <a href='/categoria/motherboard'>Play Station 5</a>
            <a href='/categoria/tarjeta-de-video'>Xbox Series X</a>
            <a href='/categoria/ram'>Nintendo SWICH</a>
            <a href='/categoria/almacenamiento'>Tolueno</a>
            <span><CartWidget/></span>
        </div>
        </div>
        )
}


export default NavBar
