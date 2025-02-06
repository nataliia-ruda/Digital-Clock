import { useState, useEffect } from "react"

const Clock = () => {
    const [time, setTime] = useState(new Date); 

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date), 1000)
        return () => {
            clearInterval(intervalId); 
        }
    }, []); 

    

    function formatTime () {
        let hours = time.getHours(); 
        let minutes = time.getMinutes(); 
        let seconds = time.getSeconds(); 
        let meridiem = hours >= 12 ? "PM" : "AM"; 

        hours = hours % 12 || 12; 

        return `${hours}:${minutes}:${seconds} ${meridiem}`; 
    }

  return (
    <section className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
    </section>
  )
}

export default Clock