import react from "react";

function RecipeCard() {

  const [RecipeDetails setRecipeDetail] = React.useState()
  React.useEffect(() => {
    async function fetchRecipeDetails() {
      const resp = await fetch("https://api.edamam.com/api/recipes/v2/recipe_b291cd7174178510d20e4d243052a9bd?type=public&app_id=c820ed89&app_key=bc3febdffacc984b50b815c07ddcbef9")
      const recipe = await resp.json()
      setRecipeDetail(recipe)
    }
  }, []);

    fetchRecipeDetails()

  return (
    <>
      <h3>{RecipeDetails.label}</h3>
      <h4>Ingredients</h4>
      <h4>Instructions</h4>
    </>
)

}

export default RecipeCard