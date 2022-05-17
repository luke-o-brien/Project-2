import React from "react"
import { Link } from "react-router-dom"
import "bulma"
import styles from "./Fish.module.css"


const SelectedFish = (props) => {

  return <div className={styles.card_styling}>
    <Link to={`/fish/${props.name}`}>
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">{props.name}</div>
        </div>
        <div className="card-image">
          <figure >
            <img src={props.images} alt={props.name} />  
          </figure>
        </div>
        <div className="card-content">
          <h5>{`Current Population Levels - ${props.population}`}</h5>
          <p>{`Summary - ${props.summary}`}</p>
          <p>{`Current Fishing Rate - ${props.fishingRate}`}</p>
        </div>
      </div>
    </Link>
  </div>
}

export default SelectedFish