
import Fish from "./Fish"
import styles from "./FishIndex.module.css"


const FishIndex = (props) => {

  return (
    <section className="section_container">
      <div className={styles.container_size}>
        {props.data.map((fish, i) => {
          return <Fish
            key={i}
            name={fish["Species Name"]}
            fishingRate={fish["Fishing Rate"]}
            population={fish["Population"]}
            images={fish["Species Illustration Photo"]["src"] }
            summary={fish["Biology"].replace(/\s*<.*?>\s*/g, "")}
            scientificName ={fish["Scientific Name"]}
          />
        })}
      </div>

    </section>  
  )
}


export default FishIndex
