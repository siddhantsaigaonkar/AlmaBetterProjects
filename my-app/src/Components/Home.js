import React from 'react'
import HomeCard from './Ui/HomeCard';
import illus1 from "./Images/1.jpg";
import illus2 from "./Images/2.png";
import illus3 from "./Images/3.jpg";
import "../App.css"

export default function Home() {

  return (
    <div>
      <div className="home-container">
        <HomeCard
          color="blue"
          heading="Create New Quiz"
          path="create-new"
          delay={0.15}
          image={illus1}
          size={"500px"}
        />
        <HomeCard
          color="blue"
          heading="My Quizzes"
          path="my-quizzes"
          delay={0.25}
          image={illus2}
          size={"700px"}
        />
        <HomeCard
          color="blue"
          heading="Play Quiz"
          path="play-quiz"
          delay={0.35}
          image={illus3}
          size={"800px"}
        />
      </div>
    </div>
  );
}
