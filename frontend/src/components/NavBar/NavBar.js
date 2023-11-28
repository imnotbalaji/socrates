import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';

function NavBar () {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  
  const logoutUser = e => {
      e.preventDefault();
      dispatch(logout());
  }

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className="links-nav">
          <Link className="link" to={'/createQuiz'}>Create Quiz</Link>
          <Link className="link" to={'/profile'}>Profile</Link>
          <Link className="link" to={'/takeQuiz'}>Take a Quiz</Link>
          <Link className="link" onClick={logoutUser}>Logout</Link>
        </div>
      );
    } else {
      return (
        <div className="links-auth">
          <Link className="link" to={'/signup'}>Signup</Link>
          <Link className="link" to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  return (
    <>
      <div className="navbar">
        { getLinks() }
      </div>
    </>
  );
}

export default NavBar;