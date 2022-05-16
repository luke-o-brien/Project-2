
import Fish from "./Fish"
import styles from "./FishIndex.module.css"


const FishIndex = (props) => {

  return (
    <section className="section-container">
      <div className="container">

      </div>
      <div className={styles.container_size}>
        {props.data.map((fish, i) => {
          return <Fish
            key={i}
            name={fish["Species Name"]}
            fishingRate={fish["Fishing Rate"]}
            population={fish["Population"]}
            images={fish["Species Illustration Photo"]["src"] }
            summary={fish["Biology"].replace(/\s*<.*?>\s*/g, "")}
          />
        })}
      </div>

    </section>  
  )
}


export default FishIndex
