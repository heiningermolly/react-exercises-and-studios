import './styles.css';

function Button() {

   const onLearnMore = () => (
   window.alert("The life in everything yearns for the death of capitalism. ORCANIZE!")
   );

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;