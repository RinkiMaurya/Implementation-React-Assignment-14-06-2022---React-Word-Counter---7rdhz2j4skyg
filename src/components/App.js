import React from "react";
import "../styles/App.css";
import { useState } from "react";
const App = () => {
  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    const text = e.target.value;

    // check if blow char limit , if not ten stop taking more charaters
    // if(charCount >= charLimit){

    //   return;

    // }
    // set word count

    let w_count = 0;
    if (text.length > 0) w_count = text.trim().split(" ").length;
    setWordCount(w_count);

    // set char count
    setCharCount(text.length);
  };

  const onCharLimitChangeHandler = (e) => {
    setCharLimit(parseInt(e.target.value));
  };

  const onFontSizeChangeHandler = (e) => {};
  return (
    <div id="main">
      <textarea
        style={{ fontSize: fontSize + "px" }}
        onChange={onChangeHandler}
        maxLength={charLimit}
      ></textarea>

      <input
        type="number"
        id="char-limit-input"
        value={charLimit}
        onChange={onCharLimitChangeHandler}
      />

      <div id="word-counter">Total no of word written {wordCount}:</div>
      <div id="char-counter">Total no of characters used {charCount}:</div>
      <input
        type="range"
        id="fontSize-input"
        min="16px"
        max="32px"
        value={fontSize}
        onChange={(e) => {
          setFontSize(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
