import React, { useState, useEffect, useRef } from "react";
import randomWords from "random-words";
//useRef automatically puts the cursor in the text input field

// Global variables for keeping track of stats
// Timer is at 10 for testing purposes, would be set at 60
const numberOfWords = 150;
const seconds = 20;

function TypingSpeed({ test, updateScore }) {
  const [words, setWords] = useState([]);
  const [countdown, setCountdown] = useState(seconds);
  const [currentInput, setCurrentInput] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [status, setStatus] = useState("waiting");
  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [currentChar, setCurrentChar] = useState("");
  // const [seconds, setSeconds] = useState(20);
  const textInput = useRef(null);

  const id = test.id;

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
          if (prevCountdown === 0) {
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

  // Moves on to next character after current character is typed
  // All current char state tracks current character being typed
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

  // if/else for stats
  function checkMatch() {
    const compareWord = words[currentWordIndex];
    const doesItMatch = compareWord === currentInput.trim();
    if (doesItMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  }

  // Function for calculation of WPM
  const wordsPerMinute = Math.round(correct / 5 / 0.045);
  const WPM = `${wordsPerMinute} WPM`
  

  // Highlights letters as they are typed
  function highlightLetters(wordIdx, charIdx, char) {
    if (
      wordIdx === currentWordIndex &&
      charIdx === currentCharIndex &&
      currentChar &&
      status !== "finished"
    ) {
      if (char === currentChar) {
        return "green";
      } else {
        return "red";
      }
    } else {
      return "";
    }
  }

  // Handlers for score submit
  function handleSubmit() {
    scoreSubmit();
    alert("Score Submitted");
  }

  function scoreSubmit() {
    fetch(`http://localhost:3000/tests/2`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ score: WPM }),
    });
    updateScore(id, WPM);
  }

  // Handlers for changing amount of seconds for test
  // function sixtySeconds() {
  //   setSeconds(60);
  // }

  // function fifteenSeconds() {
  //   setSeconds(15);
  // }

  return (
    <div className="typing-test-container">
      {/* <div>
        <button className="change-time-button" onClick={sixtySeconds}>Sixty Second Timer</button>
        <button className="change-time-button" onClick={fifteenSeconds}>Fifteen Second Timer</button>
      </div> */}
      <h1 className="title">Typing Test</h1>
      <h3 className="challenge">How fast can you type?</h3>
      <p className="challenge">
        Score is calculated from total words typed correctly. Lose a point for
        an incorrect word.
      </p>
      {/* Hides words until start button is pressed */}
      <div className="typing-test">
        {status === "started" && (
          <div className="section">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  {words.map((word, i) => (
                    <span key={i} className="random-words">
                      <span>
                        {word.split("").map((char, idx) => (
                          <span
                            className={highlightLetters(i, idx, char)}
                            key={idx}
                          >
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
      </div>
      <div className="section">
        <div className="timer">
          <h2 className="countdown">{countdown}</h2>
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
        <div className="buttons">
          <button className="button" onClick={startButton}>
            START
          </button>
          <button className="submit-button" onClick={() => handleSubmit()}>
            Submit Your Score
          </button>
        </div>
      </div>
      {/* Displays results when timer runs out */}
      <div className="results">
        {status === "finished" && (
          <div className="section">
            <div className="columns">
              <div className="column has-text-centered">
                <p className="words-per-minute">Words Per Minute:</p>
                <p className="words-correct">{wordsPerMinute}</p>
              </div>
              <div className="column has-text-centered">
                <div className="accuracy">Accuracy: </div>
                <p className="accuracy-calculated">
                  {Math.round((correct / (correct + incorrect)) * 100) || 0}%
                </p>
                <div className="score">Score: </div>
                <p className="score">{correct - incorrect}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TypingSpeed;
