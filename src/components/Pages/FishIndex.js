
import Fish from "./Fish"

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
