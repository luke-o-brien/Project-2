import styles from "./FishAlternativeCard.module.css"
import React from "react"

//import { useEffect } from "react/cjs/react.production.min"

function FishAlternativeCard () {

  // const [SelectedFish, setSelectedFish] = React.useState(undefined)
  const [recipes, setRecipes] = React.useState(undefined)
  // const [recipeID, setRecipeID] = React.useState(undefined)
  const [fetched, setFetched] = React.useState(false)
  const [hake, setHake] = React.useState(false)
  const [trout, setTrout] = React.useState(false)
  const [mussels, setmussels] = React.useState(false)
  const [arrow, setArrow] = React.useState(false)

 
  function handleClick(e) {
    const selected = e.target.value 
    // setSelectedFish(selected)
    const uri = "https://www.edamam.com/ontologies/edamam.owl#recipe_5008eb6dc11fe3eeab1e378d9dca806c"
    const recipeID = uri.substring(45);
    console.log(recipeID)
    if (selected === "hake") {
      setHake(!hake)
    } else if (selected === "trout") {
      setTrout(!trout)
    } else if (selected === "mussels") {
      setmussels(!mussels)
    }
    console.log(selected)
    async function displayRecipes () {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${selected}&app_id=c820ed89&app_key=bc3febdffacc984b50b815c07ddcbef9&random=true`)
      const data = await res.json()
      const recipesa = data.hits.map((hit) =>{
        return (hit.recipe)
      })
      
      const sources = recipesa.map((recipe) =>{
        return (recipe.source);
      });
      console.log(recipesa);
      console.log(sources); 
      setRecipes(recipesa)

      setFetched(!fetched)
      setArrow(!arrow)
    }
    displayRecipes()
  }

  return (
    <div>
      <div className={`fish-alternative-box" ${styles.fish_alternative_box}`}>
        <div>
          <h2>Fancy Cod?</h2>
          <h3>Why not try Hake?</h3>
          <button className={`fish-alternative-button" ${styles.fish_alternative_button}`} value="hake" onClick={handleClick} >View Recipes<i className={arrow === false ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"}></i></button>
        </div>
        <div className={`fish-alternative-container" ${styles.fish_alternative_container}`}>
          {fetched && hake && recipes.map((recipe) =>{
            return <div className={`fish-alternative-div" ${styles.fish_alternative_div}`} key={recipe.label}>
              <div className={`fish-alternative-content" ${styles.fish_alternative_content}`} >
                <h4 className={`fish-alternative-header" ${styles.fish_alternative_header}`}>{recipe.label}</h4>
                <img src={recipe.image} ></img>
                <a className={`fish-alternative-button" ${styles.fish_alternative_link}`} href={recipe.url} >Click here to view full recipe!</a>
              </div>
            </div>
          })}
        </div>
      </div>
      <div className={`fish-alternative-box" ${styles.fish_alternative_box}`}>
        <h2>Fancy salmon?</h2>
        <h3>Why not try Rainbow Trout?</h3>
        <button className={`fish-alternative-button" ${styles.fish_alternative_button}`} value="trout" onClick={handleClick} >View Recipes<i className={arrow === false ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"}></i></button>
        {fetched && trout && recipes.map((recipe) =>{
          return <div className={`fish-alternative-div" ${styles.fish_alternative_div}`} key={recipe.label}>
            <div className={`fish-alternative-content" ${styles.fish_alternative_content}`} >
              <h4 className={`fish-alternative-header" ${styles.fish_alternative_header}`}>{recipe.label}</h4>
              <img src={recipe.image} ></img>
              <a className={`fish-alternative-button" ${styles.fish_alternative_link}`} href={recipe.url} >Click here to view full recipe!</a>
            </div>
          </div>
        })}
      </div>
      <div className={`fish-alternative-box" ${styles.fish_alternative_box}`}>
        <h2>Fancy prawn?</h2>
        <h3>Why not try mussels?</h3>
        <button className={`fish-alternative-button" ${styles.fish_alternative_button}`} value="mussels" onClick={handleClick} >View Recipes<i className={arrow === false ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"}></i></button>
        {fetched && mussels && recipes.map((recipe) =>{
          return <div className={`fish-alternative-div" ${styles.fish_alternative_div}`} key={recipe.label}>
            <div className={`fish-alternative-content" ${styles.fish_alternative_content}`} >
              <h4 className={`fish-alternative-header" ${styles.fish_alternative_header}`}>{recipe.label}</h4>
              <img src={recipe.image} ></img>
              <a className={`fish-alternative-button" ${styles.fish_alternative_link}`} href={recipe.url} >Click here to view full recipe!</a>
            </div>
          </div>
        })}
      </div>
    </div> 
  )
}


export default FishAlternativeCard