import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.scss';
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
          <div>
          {/* <Link className="link" to={'/createQuiz'}>Create Quiz</Link> */}
            <Link className="link" to={'/quizzes'}>Quiz Index</Link>
            <Link className="link" to={'/profile'}>Profile</Link>
          </div>
          <div className='titleHeader'>
            <div className='header'>
              <h2>Socrates</h2>
            </div>
            <div>
              <h4>The Unexamined Life is Not Worth Living</h4>
            </div>
          </div>
          <div className = "profile-links">
            <Link className="link" onClick={logoutUser}>Logout</Link>
            <Link className="link" to={'/aboutus'}>About Us</Link>
          </div>
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