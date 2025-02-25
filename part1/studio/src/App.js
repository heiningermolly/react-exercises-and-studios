import logo from './logo.svg';
import './App.css';
// import Description from './components/Description.js';
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/Photos';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
      <RecipePhoto />
      {/* <div> */}
      <div className="recipePhotoBlock">
        <RecipeDescription />
        <RecipeIngredients />
      </div>
      </div>
    </div>
  );
}

export default App;
