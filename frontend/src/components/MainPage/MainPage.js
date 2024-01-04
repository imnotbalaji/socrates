import LoginNavBar from '../NavBar/LoginNavBar';
import LoginForm from '../SessionForms/LoginForm';
import LinkedIn from "../../Assets/linkedinicon.png"
import GitHub from "../../Assets/github-logo.png"

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
          <div className='line'>
            <p>Welcome to Socrates!  A learning aid that allows you to create a quiz on any topic, at either a beginner, intermediate or advanced level.</p>  
          </div>
          <div className='line'>
            <p>Login or signup to take your quiz!</p>
          </div>
        </div>
      </div>
      {/* <LoginForm/> */}
      {/* </div> */}
      <div className='footer'>
        <p>This App was Made Using | Open AI API | MongoDB | Render | Node.js | Express.js | React | Redux</p>
        <div className='teamListing'>
          <div className='teamMember'>
            <div className='teamName'>
                <p>Frontend Lead: Vincent Shan</p>
            </div>
            <div className='teamLinks'>
                <a href="https://github.com/vshan0816" target="_blank"><img src={GitHub} className="link" alt="github"></img></a>
                <a href="https://www.linkedin.com/in/vincent-shan-9121366b/" target="_blank"><img src={LinkedIn} alt="linkedin" className="link"></img></a>
            </div>
          </div>
            <div className='teamMember'>
              <div className='teamName'>
                <p> Backend Lead/Flex: Omar Hammad </p>
              </div>
              <div className='teamLinks'>
                <a href="https://github.com/o-hammad" target="_blank"><img src={GitHub} className="link" alt="github"></img></a>
                <a href="https://www.linkedin.com/in/omar-hammad-93810413b/" target="_blank"><img src={LinkedIn} alt="linkedin" className='link'></img></a>
              </div>
            </div>
            <div className='teamMember'>
              <div className='teamName'>
                <p> Team Lead: Balaji V</p>
              </div>
              <div className='teamLinks'>
                <a href="https://github.com/imnobalaji" target="_blank"><img src={GitHub} className="link" alt="github"></img></a>
                <a href="https://www.linkedin.com/in/omar-hammad-93810413b/" target="_blank"><img src={LinkedIn} alt="linkedin" className='link'></img></a>
              </div>
            </div>
        </div>
      </div>
      
      </>
      
     
    );
  }
  
  export default MainPage;