let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe() {
  const GiveRating = () => {
    props.rating < 1 || props.rating > 5 ? return null : return <h3>{stars[props.rating - 1]}</h3>;
  }
  return stars;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
