import React from "react";
import FishAlternativeCard from "../UI/FishAlternativeCard";
import "bulma"
import styles from "./SustainableEating.module.css"
//import BetterChoiceFish from "../UI/BetterChoiceFish";



function SustainableEating () {
  const [recipes, setRecipes] = React.useState(undefined)
  React.useEffect(() => {
    async function getRecipe () {
      const res = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=hake&app_id=c820ed89&app_key=bc3febdffacc984b50b815c07ddcbef9")
      const aRecipe = await res.json()
      setRecipes(aRecipe)
      console.log(aRecipe.hits[0].recipe.label)
    }
    getRecipe()
  }, [])
  return <div>
    <h2 className={`${styles.sustainable_eating_title}`}>Sustainable Eating</h2>
    <h4 className={`${styles.sustainable_eating_tagline}`}>Today more than ever it is important to make Sustainable eating choices.</h4>
    <p className={`${styles.sustainable_eating_description}`}>If you would like to make more enviromently concious decisions regarding what you eat take a look below at our more sustainable alternatives to popular fish and get inspiration by checking out some recipes</p>
    <div>
      <FishAlternativeCard />
    </div>
    {recipes ?
      <div>
        <h1>{recipes.hits[0].recipe.label}</h1>
      </div>
      : <p>Loading data please wait...</p>
    }
  </div>
}

export default SustainableEating