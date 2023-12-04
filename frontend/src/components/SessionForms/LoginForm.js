import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.scss';
import { login, clearSessionErrors } from '../../store/session';
const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector(state => state.errors?.session);
    const dispatch = useDispatch();
  
    useEffect(() => {
      return () => {
        dispatch(clearSessionErrors());
      };
    }, [dispatch]);
  
    const update = (field) => {
      const setState = field === 'email' ? setEmail : setPassword;
      return e => setState(e.currentTarget.value);
    }
  
    const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(login({ email, password })); 
    }
    const demoLogin = (e) => {
      e.preventDefault();
        dispatch(login({ email:"balaji@user.io", password: "password" })); 
      }

    return (
        <form className="session-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
          <input type="text"
            value={email}
            onChange={update('email')}
            placeholder="Email"
          />
          <input type="password"
            value={password}
            onChange={update('password')}
            placeholder="Password"
          />
          {errors && <div className="errors">{errors?.email}</div> }
          
        <input
          className="submitButton"
          type="submit"
          id = "login-button"
          value="Log In"
          disabled={!email || !password}
        />
         <button
          className="demo-login"
          id = "demo-login"
          type="button"
          
          onClick = {demoLogin}
        >Demo Login</button>
      
      
      </form>
    )

}
export default LoginForm;