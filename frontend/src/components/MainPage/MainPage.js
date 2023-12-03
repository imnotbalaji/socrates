import LoginNavBar from '../NavBar/LoginNavBar';
import LoginForm from '../SessionForms/LoginForm';

import './MainPage.scss'

function MainPage() {
    return (
      <>
      <LoginNavBar/>
      <div className = "main-container">
       <div className="main">
        <h1>Socrates</h1>
        <p>The Unexamined Life is Not Worth Living</p>
      </div>
      <LoginForm/>
      </div>
      
      </>
      
     
    );
  }
  
  export default MainPage;