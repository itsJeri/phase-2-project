import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

// GLOBAL VARIABLES
const seconds = 3
const time = seconds*10

function Countdown({ changePage }) {
    const [countDown, setCountDown] = useState(time);
    const now = (countDown/time)*100

    useEffect(() => {
        const timer = setTimeout(() => {
            return setCountDown(countDown - 1)}, 100)
        if (countDown < 0) {
            clearTimeout(timer)
            changePage()
        }
    })

    return (
        <ProgressBar now={now} />
    )
}

export default Countdown;