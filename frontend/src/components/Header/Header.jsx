import { useEffect, useRef, useContext } from "react";
import logo from "../../assets/images/logo.png";
import userImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from "react-router-dom";
import {BiMenu} from 'react-icons/bi';
import {authContext} from '../../context/AuthContext'


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {

const headerRef = useRef(null);
const menuRef = useRef(null);
const {user, role, token} = useContext(authContext)


const HandleStickyHeader = () => {
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    headerRef.current.classList.add('sticky_header')
  }else{
    headerRef.current.classList.remove('sticky_header')
  } 
}

useEffect(() => {
  HandleStickyHeader();
  return () => window.removeEventListener('score', HandleStickyHeader)
},[])

const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
      <header className="header flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* ==========Logo Section Star ======== */}
            <div>
              <img src={logo} />
            </div>
            {/* ==========Logo Section Eenndd ======== */}
          
            {/* ==========Menu Section Star ======== */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary text-[16px] leading-7 font-bold"
                          : "text-text text-[16px] leading-7 font-semibold hover:text-primary"
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ==========Menu Section Ennd ======== */}
            {/* ==========Nav right start======== */}
            <div className="flex items-center gap-4">

                {
                  token && user ? (
                  <div>
                    <Link to={`${role === 'doctor' ? '/doctor/profile/me' : '/users/profile/me'}`}>
                    <figure>
                      <img src={user.photo} className="w-full rounded-full cursor-pointer"/>
                    </figure>
                    {user?.name}
                    </Link>
                  </div> 
                  ): (
                <Link to='/login'>
                <button className="bg-primary py-4 px-8 text-white font-[600px] h-[60] flex items-center rounded-[50px]">Login</button>
                </Link>)
                }

                 

                <span className="md:hidden" onClick={toggleMenu}>
                  <BiMenu className="w-6 h-6 cursor-pointer"/>
                </span>
            </div>
            {/* ==========Nav right Eennd======== */}


        </div>    
        </div>
      </header>
   
  );
};

export default Header;
