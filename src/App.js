
import './App.css';
import React from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";



function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
       async function fetchData() {
          const itemsResponse = await axios.get(`https://6201422bfdf5090017249939.mockapi.io/items`);
           axios.get(`https://6201422bfdf5090017249939.mockapi.io/cart`).then(res => {
           });
           axios.get(`https://6201422bfdf5090017249939.mockapi.io/fovorites`).then(res => {
           });
           setItems(res.data);
           setCartItems(res.data);
           setFavorites(res.data);
       }

    },[])



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


  return (

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
                  />
              </Route>

              <Route path="/favorites" exact>
                  <Favorites
                      items={favorites}
                      onAddFavorite={onAddFavorite}

                  />
              </Route>

          </div>

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

