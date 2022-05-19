
import Fish from "./Fish"
import styles from "./FishIndex.module.css"
import React from "react"


const FishIndex = (props) => {

  const [search, setSearch] = React.useState("")

  function filterFish() {
    return props.data.filter((fish) => {
      return (fish["Species Name"].toLowerCase().includes(search.toLowerCase())
      )
    })
  }


  return (
    <section className={styles.index_section}>
      <input className={styles.search_input}
        value={search} 
        placeholder={"SEARCH FISH"}
        onChange={(e) => setSearch(e.target.value)} 
      />

      <div className={styles.container_size}>
        {props.data ? filterFish().map((fish, i) => {
          return <Fish
            key={i}
            name={fish["Species Name"]}
            fishingRate={fish["Fishing Rate"]}
            population={fish["Population"]}
            images={fish["Species Illustration Photo"]["src"] }
            summary={fish["Biology"].replace(/\s*<.*?>\s*/g, "")}
            scientificName ={fish["Scientific Name"]}
          />
        })
          : <p>Loading Fish Data</p>
        }
      </div>
    </section>  
  )
}


export default FishIndex
