import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Fish from "./Fish"

function ShowFish () {
  const [fish, setFish] = useState(undefined)

  const { fishName } = useParams()

  useEffect(() => {
    
    async function fetchFish() {
      const res = await fetch(`https://cryptic-everglades-76066.herokuapp.com/http://www.fishwatch.gov/api/species/${fishName}`)
      const data = await res.json()
      console.log(data);
      setFish(data)
    } fetchFish()

    
  }, [])


  return <div></div>
}

export default ShowFish
