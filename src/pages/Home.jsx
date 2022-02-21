  import Card from "../components/Card/Card";
  import {useContext} from "react";
  import AppContext from "../context";

 function Home ({items, cartItems, searchValue, setSearchValue, onChangeSearchInput, onAddFavorite, onAddToCard, isLoading}) {

     const {isItemAdded} = useContext(AppContext);

     const renderItems = () => {
         const filteredItems =  items.filter(item =>
             item.title.toLowerCase().includes(searchValue.toLowerCase())
         );
         return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
                         <Card
                             key={index}
                             onFavorite={(obj) => onAddFavorite(obj)}
                             onPlus={(obj) => onAddToCard(obj)}
                             added={isItemAdded(item && item.id)}
                             loading={isLoading}
                             {...item}

                         />
                     )
                 )
         }


     return (
         <div className="content p-40">
             <div className="d-flex align-center justify-between mb-40">
                 <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                 <div className="search-block d-flex">
                     <img src="/img/search.svg" alt="search"/>
                     {searchValue && <img
                         onClick={() => setSearchValue('')}
                         className="clear cu-p"
                         src="/img/btn-remove.svg"
                         alt="clear"/>}
                     <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..."/>

                 </div>
             </div>

             <div className="d-flex flex-wrap">
                 {renderItems()}
             </div>

         </div>
     )
 }
 export default Home;