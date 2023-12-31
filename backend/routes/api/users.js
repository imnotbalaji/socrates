const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Quiz = mongoose.model('Quiz');
const passport = require('passport');
const { loginUser, restoreUser } = require('../../config/passport');
const { isProduction } = require('../../config/keys');
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

router.get('/current', restoreUser, (req, res) => {
  if (!isProduction) {
    const csrfToken = req.csrfToken();
    res.cookie("CSRF-TOKEN", csrfToken);
  }
  if (!req.user) return res.json(null);
  res.json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email
  });
});

// POST /api/users/login
router.post('/login', validateLoginInput, async (req, res, next) => {
  passport.authenticate('local', async function (err, user) {
    if (err) return next(err);
    if (!user) {
      const err = new Error('Invalid credentials');
      err.statusCode = 400;
      err.errors = { email: "Invalid credentials" };
      return next(err);
    }
    return res.json(await loginUser(user));
  })(req, res, next);
});

// POST /api/users/register
router.post('/register', validateRegisterInput,  async (req, res, next) => {
  // Check to make sure no one has already registered with the proposed email or
  // username.
  const user = await User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }]
  });

  if (user) {
    // Throw a 400 error if the email address and/or email already exists
    const err = new Error("Validation Error");
    err.statusCode = 400;
    const errors = {};
    if (user.email === req.body.email) {
      errors.email = "A user has already registered with this email";
    }
    if (user.username === req.body.username) {
      errors.username = "A user has already registered with this username";
    }
    err.errors = errors;
    return next(err);
  }

  // Otherwise create a new user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email
  });

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
      if (err) throw err;
      try {
        newUser.hashedPassword = hashedPassword;
        const user = await newUser.save();
        return res.json(await loginUser(user));
      }
      catch (err) {
        next(err);
      }
    })
  });
});

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  const userId = req.params.id

  const quizzes = await Quiz.find({ user: userId });
  
  let availBeginnerQuestions = 0;
  let availInterQuestions = 0;
  let availAdvancedQuestions = 0;
  let unansweredBeginnerQuestions = 0;
  let unansweredInterQuestions = 0;
  let unansweredAdvancedQuestions = 0;
  let correctBeginnerQuestions = 0;
  let correctInterQuestions = 0;
  let correctAdvancedQuestions = 0;
  let incorrectBeginnerQuestions = 0;
  let incorrectInterQuestions = 0;
  let incorrectAdvancedQuestions = 0;

  quizzes.forEach((quiz) => {
    let level = quiz.difficulty;

    switch (level) {
      case "beginner":
        availBeginnerQuestions += 10;
        break;
      case "intermediate":
        availInterQuestions += 10;
        break;
      case "advanced":
        availAdvancedQuestions += 10;
        break;
      default:
        break;
    }

    quiz.questionsArray.forEach((question) => {
      switch (level) {
        case "beginner":
          if (question.response === "") {
            unansweredBeginnerQuestions += 1;
          }
          if (question.response === question.answer) {
            correctBeginnerQuestions += 1;
          }
          if (question.response !== "" && question.response !== question.answer) {
            incorrectBeginnerQuestions += 1;
          }
          break;
        case "intermediate":
          if (question.response === "") {
            unansweredInterQuestions += 1;
          }
          if (question.response === question.answer) {
            correctInterQuestions += 1;
          }
          if (question.response !== "" && question.response !== question.answer) {
            incorrectInterQuestions += 1;
          }
          break;
        case "advanced":
          if (question.response === "") {
            unansweredAdvancedQuestions += 1;
          }
          if (question.response === question.answer) {
            correctAdvancedQuestions += 1;
          }
          if (question.response !== "" && question.response !== question.answer) {
            incorrectAdvancedQuestions += 1;
          }
          break;
        default:
          break;
      }
    })
  })
  
  res.json({
    availBeginnerQuestions,
    availInterQuestions,
    availAdvancedQuestions,
    unansweredBeginnerQuestions,
    unansweredInterQuestions,
    unansweredAdvancedQuestions,
    correctBeginnerQuestions,
    correctInterQuestions,
    correctAdvancedQuestions,
    incorrectBeginnerQuestions,
    incorrectInterQuestions,
    incorrectAdvancedQuestions,
  });
});

module.exports = router;
