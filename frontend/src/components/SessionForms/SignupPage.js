import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.scss';
import { signup, clearSessionErrors } from '../../store/session';
import LoginNavBar from '../NavBar/LoginNavBar';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const errors = useSelector(state => state.errors?.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = field => {
    let setState;

    switch (field) {
      case 'email':
        setState = setEmail;
        break;
      case 'username':
        setState = setUsername;
        break;
      case 'password':
        setState = setPassword;
        break;
      case 'password2':
        setState = setPassword2;
        break;
      default:
        throw Error('Unknown field in Signup Form');
    }

    return e => setState(e.currentTarget.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      username,
      password
    };

    dispatch(signup(user)); 
  }

  return (
    <>
    <LoginNavBar/>
    <form className="session-form" onSubmit={handleSubmit}>
      
      
  
        <input type="text"
          value={email}
          onChange={update('email')}
          placeholder="Email"
        />
        {errors?.email && <div className="errors">{errors?.email}</div>}
        
      

      
        <input type="text"
          value={username}
          onChange={update('username')}
          placeholder="Username"
        />

        {errors?.username &&  <div className="errors">{errors?.username}</div>}
             
      
      
      
        <input type="password"
          value={password}
          onChange={update('password')}
          placeholder="Password"
        />

        {errors?.password && <div className="errors">{errors?.password}</div>}
        
      
      
     
        <input type="password"
          value={password2}
          onChange={update('password2')}
          placeholder="Confirm Password"
        />

        {(password !== password2) &&   <div className="errors"> 'Confirm Password field must match'</div>}
      
      
      <input
        className="submitButton"
        type="submit"
        value="Sign Up"
        disabled={!email || !username || !password || password !== password2}
      />
    </form>
    </>
  );
}

export default SignupPage;