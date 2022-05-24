import React, { useState , useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Pages/Home";
import Navbar from "./components/UI/Navbar";
import FishIndex from "./components/Pages/FishIndex"
import ShowFish from "./components/Pages/ShowFish"
import SustainableEating from "./components/Pages/SustainableEating";
import RecipeCard from "./components/UI/RecipeCard";
import Footer from "./components/UI/Footer"

function App() {

  const [fishData, setFishData] = useState([])


  useEffect(() => {
    async function getData () {
      const res = await fetch("https://cryptic-everglades-76066.herokuapp.com/https://www.fishwatch.gov/api/species")
      const data = await res.json()
      const filteredFish = data.filter((fish) => {
        return fish["Species Name"] !== "Hard Clam/Northern Quahog"
      })
      console.log(data[18]["Species Name"]);
      setFishData(filteredFish)
    } 
    getData()
  }, [])

  
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={fishData}/>} />
        <Route path="/fish-index" element={<FishIndex data={fishData} />} />
        <Route path="/fish/:fishName" element={<ShowFish />} />
        {/* <Route path="recipes/:recipeName" element={<RecipeCard />} /> */}
        <Route path="/sustainable-eating" element={<SustainableEating />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
