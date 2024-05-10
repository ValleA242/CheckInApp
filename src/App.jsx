import { useState } from "react";
import MoodCard from "./MoodCard";
import { CheckInData } from "./CheckInData";

function App() {
  const [cards, setCards] = useState([
    { title: 'Blue Zone', imagePath: "public/images/blue.png", feelings: ['Sad', 'Bored', 'Tired'] },
    { title: 'Green Zone', imagePath: "public/images/joy.png", feelings: ['Happy', 'Focused', 'Calm'] },
    { title: 'Yellow Zone', imagePath: "public/images/fear.png", feelings: ['Excited', 'Energetic', 'Cheerful'] },
    { title: 'Red Zone', imagePath: "public/images/anger.png", feelings: ['Angry', 'Frustrated', 'Anxious'] }
  ]);

  const [selectedCard, setSelectedCard] = useState(null);

  const toggleSelection = (cardTitle) => {
    selectedCard === cardTitle ? setSelectedCard(null) : setSelectedCard(cardTitle);
    console.log(cardTitle)
  }

  return (
    <>
      <div className="formContainer">
        <CheckInData />
      </div>
      <div>
        <h1 className="mainHeading">What Zone are you in?</h1>
      </div>
      <div className="cardsContainer">
        {cards.map((card, index) => (
          <MoodCard key={index}
            title={card.title}
            imagePath={card.imagePath}
            feelings={card.feelings}
            onClick={toggleSelection(card.title)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
