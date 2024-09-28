import React, { useState } from "react";
import SpongeBob from "../src/assets/spongbob.jpg";
import Patrick from "../src/assets/patric.jpg";
import Sandy from "../src/assets/sandy.jpg";
import Squidward from "../src/assets/Squidward.jpg";
import MrKrab from "../src/assets/krab.jpg";
import Plankton from "../src/assets/plankton.jpg";
import CharacterPortrait from "./CharacterPortrait";
import "./App.css";

const initialCharacters = [
  {
    id: 1,
    name: "SpongeBob SquarePants",
    description:
      "The optimistic and energetic main character who works at the Krusty Krab. He is a sea sponge who loves jellyfishing and his pet snail, Gary.",
    image: SpongeBob,
  },
  {
    id: 2,
    name: "Patrick Star",
    description:
      "SpongeBob's best friend. Patrick is a starfish known for his naivety and often oblivious, yet loyal and good-natured personality.",
    image: Patrick,
  },
  {
    id: 3,
    name: "Squidward Tentacles",
    description:
      "SpongeBob's grumpy and cynical neighbor and coworker at the Krusty Krab. Squidward is an octopus who plays the clarinet and longs for a peaceful life.",
    image: Squidward,
  },
  {
    id: 4,
    name: "Sandy Cheeks",
    description:
      "A scientist and karate expert from Texas, Sandy is a squirrel living in Bikini Bottom in an air-filled dome. She is one of SpongeBob's close friends.",
    image: Sandy,
  },
  {
    id: 5,
    name: "Mr. Krabs",
    description:
      "Eugene H. Krabs is the owner of the Krusty Krab and SpongeBob's boss. He is obsessed with money and runs the restaurant with a focus on profit.",
    image: MrKrab,
  },
  {
    id: 6,
    name: "Plankton",
    description:
      "Sheldon J. Plankton is Mr. Krabs' arch-enemy and owner of the Chum Bucket. He is always scheming to steal the Krabby Patty secret formula.",
    image: Plankton,
  },
];

function App() {
  const [characters, setCharacters] = useState(initialCharacters);

  // Function to handle deleting a character
  const handleDelete = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  // Function to handle updating a character's details
  const handleEdit = (updatedCharacter) => {
    setCharacters(
      characters.map((character) =>
        character.id === updatedCharacter.id ? updatedCharacter : character
      )
    );
  };

  return (
    <div className="dashboard">
      {characters.map((character) => (
        <CharacterPortrait
          key={character.id}
          character={character}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default App;
