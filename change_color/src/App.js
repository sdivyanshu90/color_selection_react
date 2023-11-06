import React, { useState } from 'react';

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h2>Select a color:</h2>
      <button onClick={() => handleColorClick("Red")}>Red</button>
      <button onClick={() => handleColorClick("Green")}>Green</button>
      <button onClick={() => handleColorClick("Blue")}>Blue</button>
      <button onClick={() => handleColorClick("Yellow")}>Yellow</button>
      {selectedColor && <p>You have selected {selectedColor}.</p>}
    </div>
  );
}

export default App;
