
import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";



function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        fetch(`https://6201422bfdf5090017249939.mockapi.io/items`)
            .then((res) =>{
                return  res.json();
            })
            .then(json => {
                setItems(json)
            },);
    },[])

    const onAddToCard = (obj) => {
       setCartItems([...cartItems, obj]);
    };

    const onChangeSearchInput = (event) => {
        console.log(event.target.value);
    }


  return (
    <div className="wrapper clear">

        { cartOpened &&  <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)} />

        <div className="content p-40">
           <div className="d-flex align-center justify-between mb-40">
               <h1>Все кроссовки</h1>
               <div className="search-block d-flex">
                   <img src="/img/search.svg" alt="search"/>
                   <input onChange={onChangeSearchInput} placeholder="Поиск ..."/>

               </div>
           </div>

            <div className="d-flex flex-wrap">
                {items.map((item,index) => (
                    <Card
                        key={index}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        onFavorite={() => console.log('Добавили в закладки')}
                        onPlus={(obj) => onAddToCard(item)}

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


