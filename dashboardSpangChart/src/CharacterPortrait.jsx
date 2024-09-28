import React, { useState } from "react";
import EditableCharacter from "./EditableCharacter";

const CharacterPortrait = ({ character, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Toggle the details visibility
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Handle the edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle saving the changes
  const handleSave = (updatedCharacter) => {
    onEdit(updatedCharacter);
    setIsEditing(false);
  };

  return (
    <div className="character-box">
      <img
        src={character.image}
        alt={character.name}
        className="character-image"
        onClick={toggleDetails}
      />
      {showDetails && (
        <div className="character-details">
          {isEditing ? (
            <EditableCharacter
              character={character}
              onSave={handleSave}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <>
              <h3>{character.name}</h3>
              <p>{character.description}</p>
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={() => onDelete(character.id)}>Delete</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CharacterPortrait;
