import { useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import Countdown from './Countdown';

function NumberMemory({ test, updateScore }) {
    const [start, setStart] = useState(false);
    const [answerPage, setAnswerPage] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [correctNum, setCorrectNum] = useState(null);
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [multiplier, setMultiplier] = useState(10);

    // GLOBAL VARIABLES
    const randNum = Math.floor(Math.random() * multiplier)
    const id = test.id
  
    useEffect(() => {
        setCorrectNum(randNum);
        setScore(0);
    }, [])

    // PAGES TO DISPLAY
    function startPage() {
        return (
            <>
                <h1>Number Memory</h1>
                <h3>How many digits can you remember?</h3>
                <Button onClick={() => setStart(true)}>Start</Button>
            </>
        )
    }
    function gamePage() {
        if (gameOver) {
            return (
                <>
                    <h1> GAME OVER</h1>
                    <h3>Score: {score}</h3>
                </>
            )
        } else if (answerPage) {
            return (
                <>
                    <h2>Do you remember the number?</h2> 
                    <form onSubmit={handleSubmit}>
                    <input autoFocus type='number' onChange={(e) => setAnswer(e.target.value)} value={answer}/> 
                    <Button type='submit'>Submit</Button>
                    </form>
                </>
            )
        } else {
            return (
                <>
                    <h2>Memorize:</h2>
                    <h1>{correctNum}</h1>
                    <br></br>
                    <Countdown
                        changePage={changePage}
                    />
                </>
            )
        }
    }

    // HANDLERS
    function changePage() {
        setAnswerPage(true)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (answer == correctNum) {
            setScore(score + 1)
            setAnswerPage(false)
            setMultiplier(multiplier * 10)
            setCorrectNum(randNum * 10)
            setAnswer('')
        } else {
            setGameOver(true);
            uploadScore()
        }
    }
    function uploadScore() {
        fetch('http://localhost:3000/tests/3', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                score: score,
            }),
        })
        updateScore(id, score)
    }

    return (
        <div className='Number Memory' style={{width: 'flex'}}>
            {start 
            ? gamePage()
            : startPage()}
        </div>
    )
}

export default NumberMemory;