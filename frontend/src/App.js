import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar';

import MainPage from './components/MainPage/MainPage';
import LoginForm from './components/SessionForms/LoginForm.js';
import SignupForm from './components/SessionForms/SignupForm.js';
import Quizzes from './components/Quizzes/Quizzes.js';
import CreateQuizForm from './components/CreateQuizForm/CreateQuizForm.js';
import QuizShow from './components/QuizShow/QuizShow.js';
import Results from './components/Results/Results.js';
import Profile from './components/Profile/Profile.js';

import { getCurrentUser } from './store/session';





function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  
  return loaded && (
    <>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />

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