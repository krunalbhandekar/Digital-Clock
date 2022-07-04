import React,{useState} from 'react'

const Clock = () => {
    let time=new Date().toLocaleTimeString()
    const [clock, setclock] = useState(time)

    const realtime=()=>{
     time=new Date().toLocaleTimeString()
        setclock(time)
    }
    setInterval(realtime,1000)


  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month1 = month[d.getMonth()];
let date = new Date().getDate()
let year = new Date().getFullYear()





  return (
    <>
        <div style={{border:"10px solid gray", width:"30%",margin:"auto",marginTop:"100px",borderRadius:"20px",color:"red",backgroundColor:"black"}}>

            <p style={{fontFamily:"orbitron"}}>{year}  {month1}  {date}</p>
        <div>
            <h1 style={{fontFamily:"orbitron"}}>{clock}</h1>
        </div>
           
        </div>
            
    </>
  )
}

export default Clock