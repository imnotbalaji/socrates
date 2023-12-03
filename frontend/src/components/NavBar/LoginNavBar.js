import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.scss';
import { logout } from '../../store/session';
import { NavLink, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function LoginNavBar () {

    const location = useLocation();


  return (
    <div className="navbar auth">
      <div className="logo"> 
      <Link to="/">Logo </Link>
      
      </div>

    {location.pathname.includes("signup") 
     ? <NavLink className="link" to={'/Login'}>Login</NavLink>
     : <NavLink className="link" to={'/signup'}>Signup</NavLink>}
    
    
  </div>

  );
}

export default LoginNavBar;