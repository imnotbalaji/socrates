import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';

import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/SessionForms/LoginPage.js';
import SignupPage from './components/SessionForms/SignupPage.js';
import Quizzes from './components/Quizzes/Quizzes.js';
import CreateQuizForm from './components/CreateQuizForm/CreateQuizForm.js';
import QuizShow from './components/QuizShow/QuizShow.js';
import Results from './components/Results/Results.js';
import Profile from './components/Profile/Profile.js';

import { getCurrentUser } from './store/session';
import AboutPage from './components/About/about.js';





function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  
  return loaded && (
    <>
      
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginPage} />
        <AuthRoute exact path="/signup" component={SignupPage} />

        <ProtectedRoute exact path="/aboutus" component={AboutPage} />
        <ProtectedRoute exact path="/quizzes/:quizId" component={QuizShow} />
        <ProtectedRoute exact path="/quizzes" component={Quizzes} />
        <ProtectedRoute exact path="/createQuiz" component={CreateQuizForm} />
        <ProtectedRoute exact path="/results/:quizId" component={Results} />
        <ProtectedRoute exact path="/profile" component={Profile} />

      </Switch>
    </>
  );
}

export default App;