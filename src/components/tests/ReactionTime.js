import React,{useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';

function ReactionTime({ test,updateScore }){
    const[color,setColor]=useState()
    const[score,setScore]=useState(0)
    const [start, setStart] = useState(false);
    const [seconds, setSeconds] = useState(10);
    const [click, setClick]=useState(false)
    
    const id = test.id;
    const pacman = {
        width: '0px',
        height:'0px',
        borderRight: '200px solid transparent',
        borderTop: '200px solid ',
        borderTopColor:color,
        borderLeft: '200px solid',
        borderLeftColor:color,
        borderBottom: '200px solid',
        borderBottomColor:color,
        borderTopLeftRadius: '200px',
        borderTopRightRadius:'200px',
        borderBottomLeftRadius: '200px',
        borderBottomRightRadius: '200px',
        left:'50%' ,margin: 'auto',
        marginBottom:'50px'
      }
    function toggle() {
        setStart(!start);
        setSeconds(start?seconds:10)
      }
      useEffect(() => {
        const colorArray=["#845EC2","#FF6F91","#FF9671","#F9F871"]
        const index= Math.floor((Math.random()*4))
        let interval = null;
        if (start) {
        setColor(colorArray[index]!==color?colorArray[index]:'#845EC2')
         if (click && color === '#F9F871'){
             setScore(score+10)
         }
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);
          if (seconds < 0 ){
              setStart(false)
            clearInterval(interval);
            fetchScore()
            setSeconds("Time Out")}
        }
        else if (!start) {
          clearInterval(interval);
          fetchScore()
        }
        return () => clearInterval(interval);
      }, [start,seconds]);
function handleClick(){
    setClick(true)
    setTimeout(()=>{setClick(false)},1000)
}
function fetchScore(){
    fetch('http://localhost:3000/tests/1',{
    method:'PATCH',
    headers:{
        'Content-Type':
        'application/json'
     },
    body:JSON.stringify({score:score})

})
updateScore(id,score)
}
    return <div> 
    <div>
        <h1>Test your reactions</h1>
        <h5>Click Start & Click On The <span  style={{textShadow: "2px 2px 2px yellow"}}> Pacman</span> When It's <span style={{textShadow: "2px 2px 2px yellow"}}>Yellow</span></h5>
    </div>
    <div style={{marginBottom:"30px"}}>
        <h2><span id="highScore" style={{color:color}} >{score}</span>  points</h2>
        <p></p>
        <Button variant="success" onClick={toggle}>{start?"Add My Score":"START"}</Button>
    </div>
    <div style={pacman} onClick ={handleClick}> </div>
    <h4><span id="time">{seconds}</span></h4>
    </div>
}
export default ReactionTime;