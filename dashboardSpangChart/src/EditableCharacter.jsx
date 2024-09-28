import React, { useState } from "react";

const EditableCharacter = ({ character, onSave, onCancel }) => {
  const [name, setName] = useState(character.name);
  const [description, setDescription] = useState(character.description);
  const [image, setImage] = useState(character.image);

  // Save the changes
  const handleSave = () => {
    const updatedCharacter = { ...character, name, description, image };
    onSave(updatedCharacter);
  };

  return (
    <div className="editable-character">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <button onClick={handleSave}>Save Changes</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditableCharacter;
