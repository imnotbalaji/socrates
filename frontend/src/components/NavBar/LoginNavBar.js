import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.scss';
import { logout } from '../../store/session';
import { NavLink, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import logo from "../../Assets/logo.png"

function LoginNavBar () {

    const location = useLocation();


  return (
    <div className="navbar auth">
      <div className="logo"> 
      <Link to="/">
        <img src={logo} />
         </Link>
      
      </div>


    <div className='titleHeader'>
      <div className='header'>
        <h2>Socrates</h2>
      </div>
      <div>
        <h4>The Unexamined Life is Not Worth Living</h4>
      </div>
    </div>

    {/* {location.pathname.includes("signup") 
     ? <NavLink className="link" to={'/login'}>Login</NavLink>
     : <NavLink className="link" to={'/signup'}>Signup</NavLink>} */}
    
    <div>
      <NavLink className="link" to={'/login'}>Login</NavLink>
      <NavLink className="link" to={'/signup'}>Signup</NavLink>
    </div>
    
  </div>

  );
}

export default LoginNavBar;