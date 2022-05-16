import React, { useEffect, useState } from "react"

// const [dailyFish, setCountry] = React.useState(undefined)
function Dailyfish() {

  // const [fishdex, setFishdex] = useState(0)
  // let [currentDate, setCurrentDate] = useState("")
  // const [currentFish, setCurrentFish] = useState("")
  const [fishDisplay, setFishDisplay] = useState([])
  let fishdex = 0
  let currentDate = "00/00/0000"
  let currentFish = ""

  useEffect(() => {
    
    function getDate() {
      currentDate = new Date().toLocaleDateString();
      console.log(currentDate)
      if (localStorage.getItem("date") === null || localStorage.getItem("current fish" === null)) {
        localStorage.setItem("date", currentDate);
        localStorage.setItem("current fish", currentFish)
        getRandom()
        console.log(currentFish)
      } else if (localStorage.getItem("date") === currentDate) {
        console.log("fish of the day is correct")
        const displayFish = localStorage.getItem("current fish")
        console.log(JSON.parse(displayFish))
      } else {
        getRandom()
      }
    } 
  
    async function getRandom () {
      let fishdex = Math.floor(Math.random() * 115);
      const res = await fetch("https://cryptic-everglades-76066.herokuapp.com/https://www.fishwatch.gov/api/species")
      const data = await res.json()
      console.log(data)
      const dailyfish = data[fishdex]
      console.log(dailyfish)
      console.log(dailyfish["Species Name"])
      localStorage.setItem("current fish", JSON.stringify(dailyfish));
    }
    
    
    
    // function getDate() {
    //   const today = new Date().toLocaleDateString();
    //   setCurrentDate(today)
    //   console.log(currentDate)
    //   if (localStorage.getItem("date") === null || localStorage.getItem("current fish" === null)) {
    //     console.log("no date in local storage")
    //     localStorage.setItem("date", currentDate);
    //     localStorage.setItem("current fish", currentFish)
    //   } else {
    //     console.log("date in local storage")
    //     const displayFish = localStorage.getItem("current fish")
    //     console.log(JSON.parse(displayFish))
    //     getRandom()
    //   }
    // }

    // async function getRandom () {
    //   const fishnumber = Math.floor(Math.random() * 115);
    //   const fishindex = fishnumber
    //   setFishdex(fishindex)
    //   console.log(fishdex)
    //   const res = await fetch("https://cryptic-everglades-76066.herokuapp.com/https://www.fishwatch.gov/api/species")
    //   const data = await res.json()
    //   console.log(data)
    //   const dailyfish = data[fishdex]
    //   console.log(dailyfish)
    //   localStorage.setItem("current fish", JSON.stringify(dailyfish));
    // }
    getDate()
  }, [])

  return (
    <>
      <h2>Fish of The Day</h2>
      <h3></h3>
      <img></img>
      <ul>
        <li>
          Key facts
        </li>
      </ul>
    </>
  )
}

export default Dailyfish