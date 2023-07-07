export default function BookList() {
   let pageTitle = "Some Books I Have Loved";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/9/9b/Circe_%28novel%29_Madeline_Milller.jpeg";
   let book2 = "https://s3.amazonaws.com/ArchiveImages/SLJ/2013/11/Neverwhere.jpg";
   let book3 = "https://m.media-amazon.com/images/I/813AWm89-iL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Circe, by Madeline Miller" width="200"/>
         <img src={book2} alt="Neverwhere, by Neil Gaiman" width="200"/>
         <img src={book3} alt="The Phantom Tollbooth, by Norton Guster" width="200" />
      </div>      
   );
}