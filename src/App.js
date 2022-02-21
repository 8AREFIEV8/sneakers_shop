
import './App.css';
import React, {createContext} from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";









function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       async function fetchData() {
          const cartResponse = await axios.get(`https://6201422bfdf5090017249939.mockapi.io/cart`);
          const favoritesResponse = await axios.get(`https://6201422bfdf5090017249939.mockapi.io/fovorites`);
          const itemsResponse = await axios.get(`https://6201422bfdf5090017249939.mockapi.io/items`);

           setIsLoading(false);
           setCartItems(cartResponse.data);
           setFavorites(favoritesResponse.data);
           setItems(itemsResponse.data);
       }
       fetchData();
       },[]);



    const onAddToCard = (obj) => {
        console.log(obj);
        if (cartItems.find(item => Number( item.id) === Number(obj.id))) {
            axios.delete(`https://6201422bfdf5090017249939.mockapi.io/cart/${obj.id}`);
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(item.id)))
        }else {
            axios.post(`https://6201422bfdf5090017249939.mockapi.io/cart`, obj);
       setCartItems((prev) => [...prev, obj]);
        }
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://6201422bfdf5090017249939.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id));
    };

    const onAddFavorite = async (obj) => {
       try {
           if (favorites.find(favObj => favObj.id === obj.id)) {
               axios.delete(`https://6201422bfdf5090017249939.mockapi.io/fovorites/${obj.id}`);
               // setFavorites((prev) => prev.filter(item => item.id !== obj.id));
           }else {
               const {data} = await axios.post(`https://6201422bfdf5090017249939.mockapi.io/fovorites`, obj);
               setFavorites((prev) => [...prev, data]);

           }
       }catch (error) {
           alert('Не удалось добавить в фавориты')
       }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) === Number(id));
    }


  return (

         <AppContext.Provider value={{items, cartItems, favorites, isItemAdded}}>
             <div className="wrapper clear">

                 {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
                 <Header onClickCart={() => setCartOpened(true)}/>


                 <Route path="/" exact>
                     <Home
                         items={items}
                         cartItems={cartItems}
                         searchValue={searchValue}
                         setSearchValue={setSearchValue}
                         onChangeSearchInput={onChangeSearchInput}
                         onAddFavorite={onAddFavorite}
                         onAddToCard={onAddToCard}
                         isLoading={isLoading}
                     />
                 </Route>

                 <Route path="/favorites" exact>
                     <Favorites
                         items={favorites}
                         onAddFavorite={onAddFavorite}

                     />
                 </Route>

             </div>
         </AppContext.Provider>

  );
}

export default App;








{/*<Home*/}
{/*    items={items}*/}
{/*    searchValue={searchValue}*/}
{/*    setSearchValue={setSearchValue}*/}
{/*    onChangeSearchInput={onChangeSearchInput}*/}
{/*    onAddFavorite={onAddFavorite}*/}
{/*    onAddToCard={onAddToCard}*/}
{/*/>*/}

