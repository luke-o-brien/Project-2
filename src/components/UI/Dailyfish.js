import React, { useEffect, useState } from "react"

function Dailyfish() {

  
  let fishdex = 0
  let currentDate = "00/00/0000"
  let currentFish = ""
  const [displayFish, setDisplayFish] = useState(undefined);

  useEffect(() => {
    
    function getDate() {
      currentDate = new Date().toLocaleDateString();
      console.log(currentDate)
      if (localStorage.getItem("date") === null || localStorage.getItem("current fish" === null)) {
        localStorage.setItem("date", currentDate);
        localStorage.setItem("current fish", currentFish)
        getRandom()
      } else if (localStorage.getItem("date") === currentDate) {
        const getFish = localStorage.getItem("current fish")
        const storageFish = JSON.parse(getFish)
        setDisplayFish(storageFish)
        console.log("fish of the day is correct")
        console.log(storageFish)
        console.dir(storageFish)
      } else {
        getRandom()
      }
    } 
  
    async function getRandom () {
      const fishdex = Math.floor(Math.random() * 115);
      const res = await fetch("https://cryptic-everglades-76066.herokuapp.com/https://www.fishwatch.gov/api/species")
      const data = await res.json()
      console.log(data)
      const dailyfish = data[fishdex]
      console.log(dailyfish)
      setDisplayFish(dailyfish)
      console.log(dailyfish["Species Name"])
      localStorage.setItem("current fish", JSON.stringify(dailyfish));
      
    }
    getDate()
  }, [])

  return displayFish ?
    <>
      <h2>Fish of The Day</h2>
      <h3>{displayFish["Species Name"]}</h3>
      <img src={displayFish["Species Illustration Photo"].src}/>    
      <p>{displayFish.Population}</p> 
      <ul>
        <li>
          Key facts
        </li>
      </ul>
    </> : <p>Waiting for information</p>

}

export default Dailyfish