import LoginNavBar from '../NavBar/LoginNavBar';
import LoginForm from '../SessionForms/LoginForm';

import './MainPage.scss'

function MainPage() {
    return (
      <>
      <LoginNavBar/>
      <div className = "main-container">
       <div className="main">
        <div className = "main-image">
        </div>
        <div className = "main-text"> 
          <h1>Socrates</h1>
          <p>The Unexamined Life is Not Worth Living</p>
          <p>Welcome to Socrates!  A learning aid that allows you to create a quiz on any topic, at either a beginner, intermediate or advanced level.  Login or signup to take your quiz!</p>
        </div>
      </div>
      <LoginForm/>
      </div>
      <div className='footer'>
        <p>This App was Made Using | Open AI API | MongoDB | Render | Node.js | Express.js | React | Redux</p>
        <p>Frontend Lead: Vincent Shan | Backend Lead: Omar Hammad | Team Lead: Balaji V</p>
      </div>
      
      </>
      
     
    );
  }
  
  export default MainPage;