
import './App.css';
import React from "react";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import {Route, Switch} from "react-router-dom";



function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        axios.get(`https://6201422bfdf5090017249939.mockapi.io/items`).then(res => {
            setItems(res.data);
        });
        axios.get(`https://6201422bfdf5090017249939.mockapi.io/cart`).then(res => {
            setCartItems(res.data);
        });

    },[])



    const onAddToCard = (obj) => {
        axios.post(`https://6201422bfdf5090017249939.mockapi.io/cart`, obj);
       setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://6201422bfdf5090017249939.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => item.id !== id));
    };

    const onAddFavorite = (obj) => {
        axios.post(`https://6201422bfdf5090017249939.mockapi.io/fovorites`, obj);
        setFavorites((prev) => [...prev, obj]);
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };


  return (

          <div className="wrapper clear">

              {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
              <Header onClickCart={() => setCartOpened(true)}/>


                  {/*<Route path="/test">*/}
                  {/*    testttttttttttttt*/}
                  {/*</Route>*/}
                  {/* ЕТО ТЕСТОВЫЙ РОУТ, КОТОРЫЙ НЕ РАБОТАЕТ. НЕ МОГУ НАЙТИ ПРИЧИНУ*/}


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
                      {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                          .map((item, index) => (
                                  <Card
                                      key={index}
                                      title={item.title}
                                      price={item.price}
                                      imageUrl={item.imageUrl}
                                      onFavorite={(obj) => onAddFavorite(obj)}
                                      onPlus={(obj) => onAddToCard(obj)}

                                  />
                              )
                          )
                      }
                  </div>

              </div>









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

