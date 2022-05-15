import React, { useState , useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//Pages Imports
import Home from "./components/Pages/Home";
import Navbar from "./components/UI/Navbar";
import FishIndex from "./components/Pages/FishIndex"
import ShowFish from "./components/Pages/ShowFish"

function App() {

  const [fishData, setFishData] = useState([])
  
  useEffect(() => {
    async function getData () {
      const res = await fetch("https://cryptic-everglades-76066.herokuapp.com/https://www.fishwatch.gov/api/species")
      const data = await res.json()
      setFishData(data)
    } 
    getData()
  }, [])

  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={fishData}/>} />
        <Route path="/fish-index" element={<FishIndex data={fishData} />} />
        <Route path="/fish/:fishName" element={<ShowFish />} />
      </Routes>
    </Router>
  );
}

export default App
