import React, { useState, useEffect, useRef } from "react";
import randomWords from "random-words";
//useRef allows to automatically put the cursor in the text input field

// Variables for keeping track of stats
// Timer is at 10 for testing purposes, would be set at 60
const numberOfWords = 200;
const seconds = 10;

function TypingTest() {
  // Various states set for creation of game
  const [words, setWords] = useState([]);
  const [countdown, setCountdown] = useState(seconds);
  const [currentInput, setCurrentInput] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [status, setStatus] = useState("waiting");
  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [currentChar, setCurrentChar] = useState("");
  const textInput = useRef(null);

  // Renders the random words
  useEffect(() => {
    setWords(createWords());
  }, []);

  // focus() method autofocuses cursor in text input field
  useEffect(() => {
    if (status === "started") {
      textInput.current.focus();
    }
  }, [status]);

  function createWords() {
    return new Array(numberOfWords).fill(null).map(() => randomWords());
  }

  // Start button for timer
  // If game hasn't started, words and stats are hidden
  // If game is over, start button resets timer, accuracy, and wpm and generates new words
  function startButton() {
    if (status === "finished") {
      setWords(createWords());
      setCurrentWordIndex(0);
      setCorrect(0);
      setIncorrect(0);
      setCurrentCharIndex(-1);
      setCurrentChar("");
    }

    if (status !== "started") {
      setStatus("started");
      let interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown == 0) {
            clearInterval(interval);
            setStatus("finished");
            setCurrentInput("");
            return seconds;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    }
  }

  // Moves on to next word after current word is typed
  // Should I add enter as a button?
  // All current char state highlights current letter being typed
  function handleKeyDown({ keyCode, key }) {
    // kc32 = spacebar
    if (keyCode === 32) {
      checkMatch();
      setCurrentInput("");
      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentCharIndex(-1);
      // kc8 = backspace
    } else if (keyCode === 8) {
      setCurrentCharIndex(currentCharIndex - 1);
      setCurrentChar("");
    } else {
      setCurrentCharIndex(currentCharIndex + 1);
      setCurrentChar(key);
    }
  }

  // checks to see if what is typed matches current word on screen
  // if/else for words per minute and accuracy
  function checkMatch() {
    const compareWord = words[currentWordIndex];
    const doesItMatch = compareWord === currentInput.trim();
    if (doesItMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  }

  // Highlights letters as they are typed
  function getCharClass(wordIdx, charIdx, char) {
    if (
      wordIdx === currentWordIndex &&
      charIdx === currentCharIndex &&
      currentChar &&
      status !== "finished"
    ) {
      if (char === currentChar) {
        return "has-background-success";
      } else {
        return "has-background-danger";
      }
    } else if (
      wordIdx === currentWordIndex &&
      currentCharIndex >= words[currentWordIndex].length
    ) {
      return "has-background-danger";
    } else {
      return "";
    }
  }

  return (
    <div className="TypingTest">
      {/* Hides words until start button is pressed */}
      {status === "started" && (
        <div className="section">
          <div className="card">
            <div className="card-content">
              <div className="content">
                {words.map((word, i) => (
                  <span key={i}>
                    <span>
                      {word.split("").map((char, idx) => (
                        <span className={getCharClass(i, idx, char)} key={idx}>
                          {char}
                        </span>
                      ))}
                    </span>
                    <span> </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="section">
        <div className="is-size-1 has-text-centered has-text-primary">
          <h2>{countdown}</h2>
        </div>
        <div className="control is-expanded section">
          <input
            ref={textInput}
            disabled={status !== "started"}
            type="text"
            className="input"
            onKeyDown={handleKeyDown}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
          />
        </div>
        <div className="section">
          <button className="button is-info is-fullwidth" onClick={startButton}>
            START
          </button>
        </div>
      </div>
      {/* Displays results when timer runs out */}
      {status === "finished" && (
        <div className="section">
          <div className="columns">
            <div className="column has-text-centered">
              <p className="is-size-10">Words Per Minute</p>
              <p className="has-text-primary is-size-3">{correct}</p>
            </div>
            <div className="column has-text-centered">
              <div className="is-size-10">Accuracy: </div>
              <p className="has-text-info is-size-3">
                {Math.round((correct / (correct + incorrect)) * 100)}%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TypingTest;