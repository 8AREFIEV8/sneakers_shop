

 import Card from "../components/Card/Card";
 import {useContext} from "react";
 import AppContext from "../context";

  function Favorites ({onAddFavorite}) {

       const {favorites} = useContext(AppContext);



     return (
         <div className="content p-40">
             <div className="d-flex align-center justify-between mb-40">
                 <h1>Мои закладки</h1>

             </div>

             <div className="d-flex flex-wrap">

                 {favorites.map((item, index) => (
                             <Card
                                 key={index}
                                 favorited={true}
                                 onFavorite={onAddFavorite}
                                 {...item}
                                 // onFavorite={(obj) => onAddFavorite(obj)}
                                 // onPlus={(obj) => onAddToCard(obj)}

                             />
                         )
                     )
                 }


             </div>

         </div>
     )
 }
 export default Favorites;