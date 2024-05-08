import { useState } from "react";
import MoodCard from "./MoodCard";
import { CheckInData } from "./CheckInData";

function App() {
  const [cards, setCards] = useState([
    { title: 'Blue Zone', imagePath: "/images/blue.png", feelings: ['Sad', 'Bored', 'Tired'] },
    { title: 'Green Zone', imagePath: "/images/green.png", feelings: ['Happy', 'Focused', 'Calm'] },
    { title: 'Yellow Zone', imagePath: "/images/yellow.png", feelings: ['Excited', 'Energetic', 'Cheerful'] },
    { title: 'Red Zone', imagePath: "/images/red.png", feelings: ['Angry', 'Frustrated', 'Anxious'] }
  ]);

  return (
    <>
      <div className="formContainer">
        <CheckInData />
      </div>
      <div className="cardsContainer">
        {cards.map((card, index) => (
          <MoodCard key={index} title={card.title} imagePath={card.imagePath} feelings={card.feelings} />
        ))}
      </div>
    </>
  );
}

export default App;
