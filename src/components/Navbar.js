import React, { useState }  from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuToggle = () => setShowMenu(!showMenu);

  console.log('Here is commit for checking...');

  console.log('I add some changes...');

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn" onClick={showMenuToggle}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={[showMenu ? 'nav-links show-links' : 'nav-links'].join(' ')}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            home
          </Link>
          <Link to="/recipes" className="nav-link" activeClassName="active-link">
            recipes
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to='/contact' className='btn'>contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
