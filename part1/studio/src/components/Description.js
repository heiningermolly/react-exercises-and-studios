import React from 'react';
import styles from './Description.css';

function RecipeAuthor() {
    let authorLink = "https://allthehealthythings.com/"
    let authorPhoto = "https://allthehealthythings.com/wp-content/uploads/2020/04/footer2.png"
    let authorName = "Ashlea Carver";

    return (


    <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt ="Photo of a smiling woman measuring out flour" className={styles.imageUpdates} /> 
        <div>
           <h3>{authorName}</h3>
           <a href={authorLink}>All the Healthy Things</a>
           </div>
           </div>
  )
}

class RecipeDescription extends React.Component {
    render() {
       return(
          <div>
            <div>
             <h1>Monster Cookie Energy Balls</h1>
             <p>packed with gluten free oats, shredded coconut, honey, pumpkin seeds, and all natural creamy peanut butter. These energy balls are perfect for a quick snack or an after dinner treat. They are gluten free, vegan, and so easy to make!</p>
          </div>
          <RecipeAuthor />
          </div>
       );
    }
 }

 export default RecipeDescription;