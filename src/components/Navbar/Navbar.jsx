import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { FaCartShopping } from 'react-icons/fa6'
import logo from '../../assets/images/logo.svg'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import plane from './../../assets/images/plane.webp'
export default function Navbar({ x }) {
    const [IsOpen, setIsOPen] = useState(false)
    const handleOpen = () => {
        setIsOPen(!IsOpen);
    }
    return (
        <nav className={x ? 'NG-Navbar' : 'NG-Navbar2'}>
            {
                !x && <div className='img1'>
                    <img src={plane} alt="" />
                </div>
            }

            <div>
                <img src={logo} alt="" />
            </div>
            <div className='section-2'>
                <ul className={x ? `NG-menu ${IsOpen ? "open" : ""}` : `NG-menu ${IsOpen ? "open2" : ""}`}  >
                    <li>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            About
                        </Link>
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Pages
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        <Link to={'/contact'}>
                            Contact
                        </Link>
                    </li>
                    {
                        IsOpen &&
                        <li>
                            <FontAwesomeIcon icon={faXmark} onClick={handleOpen} />
                        </li>
                    }
                </ul>
            </div>
            <div className="section-3">
                <CiSearch />
                <FaCartShopping />
                {x && <button><Link to={'/signup'}>
                    GET A QUOTE
                </Link>
                    <FaLongArrowAltRight />
                </button>}
                <FontAwesomeIcon className='iconBars' icon={faBars} onClick={handleOpen} />
            </div>
            {!x&&<div className='tmain'>
                <div className='t1'>
                </div>
                <button><Link to={'/signup'}>
                    GET A QUOTE
                </Link>
                    <FaLongArrowAltRight />
                </button>
            </div>}
            

        </nav>
    )
}
