import React from "react";
//import BetterChoiceFish from "../UI/BetterChoiceFish";



function SustainableEating () {
  const [recipes, setRecipes] = React.useState(undefined)
  React.useEffect(() => {
    async function getRecipe () {
      const res = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=c820ed89&app_key=bc3febdffacc984b50b815c07ddcbef9")
      const aRecipe = await res.json()
      setRecipes(aRecipe)
      console.log(aRecipe.hits[0].recipe.label)
    }
    getRecipe()
  }, [])
  return <div>
    {recipes ?
      <div>
        <h1>{recipes.hits[0].recipe.label}</h1>
      </div>
      : <p>Loading data please wait...</p>
    }
  </div>
}

export default SustainableEating