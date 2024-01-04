<h1>Socrates Production README</h1>

[Live Site](https://socrates-quiz-app.onrender.com/)

<h2>App Description</h2>

<p>Socrates is a web application that allows users to create quizzes on a topic and difficulty level of their choosing</p>

<p>When the user creates a quiz, a request is sent from Socrates' backend to OpenAI which returns a ten question quiz with a difficulty level of the users choosing.  Further, another request is sent to OpenAI in order to provide a cover photo for each quiz relevant to the quizzes subject matter.</p>

<p>The user's generated quizzes are saved on their page where they can take, or retake a quiz.  Once a quiz is taken, the user instantaneously gets the results which are added to their analytics page.</p>

<p>A user's analytics page is a dashboard where the number of correct, incorrect and unanswered questions are presented in pie charts for each respective difficulty level, and one pie chart for the user's combined stats.</p>

<h2>Instructions</h2>

<p>Firstly, when you get to the splash page, you can login or signup in the upper right hand corner</p>

<p>Once logged in, you will be taken to the quiz index page. If you are using the Demo Login, there will be a directory of quizzes already generated.  Simply click on the quiz in order to take it.</p>

<p>If you wish to create a new quiz, simply click the "Create a New Quiz" button at the top of the page.  Select your topic and your difficulty level and Socrates will generate a quiz for you to take.</p>

<p>Also on the quiz index page, to the upper left, you can click on "Profile" which will show you your analytics, like how many questions you answered, how many were correct, etc.</p>

<p>Finally, you can logout to the upper right as well as view the "About Us" page which has links for the team's GitHub and LinkedIn.</p>

<h2>Technologies Utilized</h2>

1. React
2. Redux
3. MongoDB
4. AWS S3
5. OpenAI API
6. Mongoose
7. Express.js
8. Node.js

<h2>Noteworthy Features</h2>

<h3>Quizzes</h3>

<p>Quizzes are a full CRUD feature where you can create, read, update and delete a quiz.</p>

<p>For the creation of the quiz, once the user selects a topic and a difficulty level, we send a request to OpenAI's API to generate a ten question quiz and return it in JSON format.  Please referene the below code snippet for the request that is sent to OpenAI</p>

![Alt text](frontend/src/Assets/openairequest.png)

<p>Following the creation of the quiz, the user can take the quiz and their responses are updated in the quiz instance.  Their responses are compared to the correct answers which were provided by Open AI and in the user's profile, they can see their analytics which tracks unanswered questions, correct answers and incorrect answers.  Below is a snapshot of the analytics dashboard.</p>

![Alt text](frontend/src/Assets/snap%20-%20user%20dashboard.png)

<p>For the final CRUD feature, users can delete a quiz they created.  Below is a photo of the "Delete Quiz" button on the quiz directory.</p>

![Alt text](frontend/src/Assets/delete_quiz_button.png)

