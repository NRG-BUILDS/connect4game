import { Link } from "react-router-dom";
import logo from './logo.svg'

const Navbar = () => {
    const closeNav = () => {
        document.querySelector('.navLinksMobile').style.width = '0%'
        document.querySelector('.navLinksMobile').style.padding = '0'
    }
    const switchLink = (e) => {
        let links = document.querySelectorAll('.navLink')
        for(let i = 0; i < links.length; i++) {
            links[i].classList.remove('border-b-white')
            links[i].classList.add('border-b-transparent')
        }
        e.target.classList.remove('border-b-transparent');
        e.target.classList.add('border-b-white');
    }
    return ( 
        <nav>
            <div className='navBar flex items-center justify-between max-w-screen-2xl 
            px-6 my-3 mx-auto text-gray-300 backdrop-blur-lg'>
                <div className="logo">
                    <img src={ logo } alt="NRG Space" />
                </div>
                <div className="navLinks">  {/*---DISPLAYS ON PC AND TABLETS--- */}
                    <Link to ='/' className='navLink border-b-transparent border-b-4 transition duration-100 py-8' onClick={switchLink}>00 HOME</Link>
                    <Link to ='/destination/Moon' className='navLink border-b-transparent border-b-4 transition duration-100 py-8' >01 DESTINATON</Link>
                    <Link to ='/crew' className='navLink border-b-transparent border-b-4 transition duration-100 py-8' onClick={switchLink}>02 CREW</Link>
                    <Link to ='/technology' className='navLink border-b-4 border-transparent transition duration-100 py-8' onClick={switchLink}>03 TECHNOLOGY</Link>
                </div>
                <div className="navBtn">
                    <button onClick={() => {
                        document.querySelector('.navLinksMobile').style.width = '100%'
                        document.querySelector('.navLinksMobile').style.padding = '1rem 1.5rem'
                    }}><span className="material-icons-outlined">menu</span></button>
                </div>
            </div>
            <div className="navLinksMobile">  {/*---DISPLAYS ON MOBILE--- */}
                <button onClick={closeNav} className="float-right block my-1">
                    <img src="../icon-close.svg" alt="" />
                </button>
                <Link onClick={closeNav} to ='/'>00 HOME</Link>
                <Link onClick={closeNav} to ='/destination/Moon'>01 DESTINATON</Link>
                <Link onClick={closeNav} to ='/crew/Douglas Hurley'>02 CREW</Link>
                <Link onClick={closeNav} to ='/technology'>03 TECHNOLOGY</Link>
            </div>
        </nav>    
     );
}
 
export default Navbar;