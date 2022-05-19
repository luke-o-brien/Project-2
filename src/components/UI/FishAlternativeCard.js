import styles from "./FishAlternativeCard.module.css"
import React from "react"

//import { useEffect } from "react/cjs/react.production.min"

function FishAlternativeCard () {

  const [SelectedFish, setSelectedFish] = React.useState(undefined)
  const [recipes, setRecipes] = React.useState(undefined)


  function handleClick(e) {
    const selected = e.target.value 
    setSelectedFish(selected)
    console.log(selected)
    async function displayRecipes () {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${SelectedFish}&app_id=c820ed89&app_key=bc3febdffacc984b50b815c07ddcbef9`)
      const aRecipe = await res.json()
      setRecipes(aRecipe)
      console.log(aRecipe)
      console.log(aRecipe.hits[0].recipe.label)
      // recipes.map((recipe) => {
      //   return (
      //     <>
      //     <a>{recipe.hits.recipe.label}</a>
      //     </>
      //   )}
    // ),
    // })
    }
    displayRecipes()
  }

  return (
    <div>
      <div className={`fish-alternative-box" ${styles.fish_alternative_box}`}>
        <h2>Fancy Cod?</h2>
        <h3>Try Hake</h3>
        <button value="hake" onClick={handleClick} >View Recipes</button>
      </div>
      <div className={`fish-alternative-box" ${styles.fish_alternative_box}`}>
        <h2>Fancy salmon?</h2>
        <h3>Try Rainbow Trout</h3>
        <button value="trout" onClick={handleClick} >View Recipes</button>
      </div>
      <div className={`fish-alternative-box" ${styles.fish_alternative_box}`}>
        <h2>Fancy prawn?</h2>
        <h3>Try mussels</h3>
        <button value="mussels" onClick={handleClick} >View Recipes</button>
      </div>
    </div>
  )

}

export default FishAlternativeCard