import LoginNavBar from '../NavBar/LoginNavBar';
import LoginForm from '../SessionForms/LoginForm';

import './MainPage.scss'

function MainPage() {
    return (
      <>
      <LoginNavBar/>
      <div className = "main-container">
       {/* <div className="main"> */}
        {/* <div className = "main-image">
        </div> */}
        <div className = "main-text"> 
          <p>Welcome to Socrates!  A learning aid that allows you to create a quiz on any topic, at either a beginner, intermediate or advanced level.</p>  
          <p>Login or signup to take your quiz!</p>
        </div>
      </div>
      {/* <LoginForm/> */}
      {/* </div> */}
      <div className='footer'>
        <p>This App was Made Using | Open AI API | MongoDB | Render | Node.js | Express.js | React | Redux</p>
        <p>Frontend Lead: Vincent Shan | Backend Lead/Flex: Omar Hammad | Team Lead: Balaji V</p>
      </div>
      
      </>
      
     
    );
  }
  
  export default MainPage;