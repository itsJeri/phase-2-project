import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
function ReactionTime(){
    const[color,setColor]=useState()
    const[startTime,setStartTime]=useState(0)
    const[stopTime,setStopTime]=useState(0)
    const[speed,setSpeed]=useState(0)
    const[score,setScore]=useState(0)
    const [start, setStart] = useState(false);
 function handleStart(){	
        setStart(true)
        fetchScore()
    const colorArray=["lightBlue","yellow","orange","pink"]
    const index= Math.floor((Math.random()*4))
    setTimeout(()=> {
        setColor( colorArray[index]!==color? colorArray[index]:"#CAB8FF")
     setStartTime(Date.now())
    setSpeed(stopTime-startTime)
    setScore((speed<600)?score+10:score)
},3000)
fetchScore()
}
function fetchScore(){
    fetch("http://localhost:3000/tests/1",{
    method:"PATCH",
    headers:{
        "Content-Type":
        "application/json"
     },
    body:JSON.stringify({score:score})
})
}
    function handleClick(){
    setStopTime(Date.now())
}
    return <div style={{backgroundColor:"#FFEFEF"}}>
    <div class="instructions" style={{}} >
		<h1>Test your reactions</h1>
		<h5>Click Start & Click On The Div When Color Changes</h5>
	</div>
	<div class="scoreBoard" style={{ }}>
        {/*  <p><span id="highScore" >{score}</span>points</p>*/}
        <Button variant="success" onClick={handleStart}>{start?"Try Again":"START"}</Button>
	</div>
	<div id="box"  onClick={handleClick} style={{backgroundColor:color,height: "500px",width: "800px",left:"50%" ,margin: "auto"}}>
    </div>
    <h4><span id="time">{speed}</span>ms</h4>
    </div>
}
export default ReactionTime;