import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SelectedFish from "./SelectedFish"

function ShowFish () {

  const [fish, setFish] = useState()

  const { fishName } = useParams()

  useEffect(() => {
    
    async function fetchFish() {
      const res = await fetch(`https://cryptic-everglades-76066.herokuapp.com/https://www.fishwatch.gov/api/species/${fishName}`)
      const data = await res.json()
      setFish(data[0])
    } fetchFish()
    
    
  }, [])


  return fish ? <section className="section">
    <div className="container">
      <SelectedFish
        name={fish["Species Name"]}
        fishingRate={fish["Fishing Rate"]}
        population={fish["Population"]}
        images={fish["Species Illustration Photo"]["src"]}
        summary={fish["Biology"].replace(/\s*<.*?>\s*/g, "")} />
      <Link to="/fish-index">{"⬅ Back to all Fish Index"}</Link>
    </div>
  </section> : <p>Waiting for information</p>
        
}

export default ShowFish
