import React, { useState, useEffect } from 'react'



const FishIndex = (props) => {

  return (
    <section>
      <div className="container">

      </div>
      <div>
        {props.data.map((fish, i) => {
          return <Fish 
            key={i}
            name={fish["Species Name"]}
            fishingRate={fish["Fishing Rate"]}

             />
        })}
      </div>

    </section>
  
  )
}


export default FishIndex
