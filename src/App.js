
import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    { title: 'Мужские Кроссовки Nike Air Max 270', price: 2999, imgUrl: '/img/sneakers/1jpg.jpg'},
    { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 3500,imgUrl: '/img/sneakers/11jpg.jpg'},
    { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 3500,imgUrl: '/img/sneakers/3jpg.jpg'},
    { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 2700,imgUrl: '/img/sneakers/2jpg.jpg'},
];

function App() {
  return (
    <div className="wrapper clear">

        <Drawer/>
        <Header/>

        <div className="content p-40">
           <div className="d-flex align-center justify-between mb-40">
               <h1>Все кроссовки</h1>
               <div className="search-block d-flex">
                   <img src="/img/search.svg" alt="search"/>
                   <input placeholder="Поиск ..."/>

               </div>
           </div>

            <div className="d-flex">
                {arr.map((obj) => (
                    <Card
                        title={obj.title}
                        price={obj.price}
                        imageUrl={obj.imgUrl}
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


