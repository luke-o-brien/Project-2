import styles from "./FishAlternativeCard.module.css"
import React from "react"

//import { useEffect } from "react/cjs/react.production.min"

function FishAlternativeCard () {

  const [SelectedFish, setSelectedFish] = React.useState(undefined)
  const [recipes, setRecipes] = React.useState(undefined)
  const [fetched, setFetched] = React.useState(false)



  function handleClick(e) {
    const selected = e.target.value 
    setSelectedFish(selected)
    console.log(selected)
    async function displayRecipes () {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${SelectedFish}&app_id=c820ed89&app_key=bc3febdffacc984b50b815c07ddcbef9`)
      const data = await res.json()
      const recipesa = data.hits.map((hit) =>{
        return (hit.recipe)
      })
      
      const sources = recipesa.map((recipe) =>{
        return (recipe.source);
      });
      
      // to be stylish you could write the above as
      //   const sources = recipes.map((recipe) => recipe.source)
      console.log(recipesa);
      console.log(sources); 
      setRecipes(recipesa)
      //console.log(data)
      //console.log(data.hits[0].recipe.label)
      setFetched(!fetched)
      
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
        {fetched && recipes.map((recipe) =>{
          return  <>
            <p key={recipe.label}>{recipe.label}</p>
            <a href={recipe.url}>view full recipe</a>
          </>
        })}
      </div>
      <div className={`fish-alternative-box" ${styles.fish_alternative_box}`}>
        <h2>Fancy salmon?</h2>
        <h3>Try Rainbow Trout</h3>
        <button value="trout" onClick={handleClick} >View Recipes</button>
        {fetched && recipes.map((recipe) =>{
          return <p key={recipe.label}>{recipe.label}</p>
        })}
      </div>
      <div className={`fish-alternative-box" ${styles.fish_alternative_box}`}>
        <h2>Fancy prawn?</h2>
        <h3>Try mussels</h3>
        <button value="mussels" onClick={handleClick} >View Recipes</button>
        {fetched && recipes.map((recipe) =>{
          return <p key={recipe.label}>{recipe.label}</p>
        })}
      </div>
    </div> 
  )

}


export default FishAlternativeCard