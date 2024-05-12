import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import CreateNew from './Components/CreateNew/CreateNew';
import MyQuizzes from './Components/MyQuizzes/MyQuizzes';
import PlayQuiz from './Components/PlayQuiz/PlayQuiz';
import Quiz from './Components/PlayQuiz/Quiz';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-new" element={<CreateNew />} />
        <Route path="/my-quizzes" element={<MyQuizzes />} />
        <Route path="/play-quiz" element={<PlayQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}
