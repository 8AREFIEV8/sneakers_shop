
import './App.css';

function App() {
  return (
    <div className="wrapper clear">
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Корзина <img className="cu-p"  src="img/btn-remove.svg"
                                 alt="remove"/> </h2>


                <div className="items mb-20" >
                    <div className="cartItem d-flex align-center">


                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/1jpg.jpg)' }}
                            className="cartItemImg">

                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>2 999</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
                    </div>

                    <div className="cartItem d-flex align-center">


                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/1jpg.jpg)' }}
                            className="cartItemImg">

                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>2 999</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
                    </div>

                    <div className="cartItem d-flex align-center">


                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/1jpg.jpg)' }}
                            className="cartItemImg">

                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>2 999</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
                    </div>



                </div>

                <div className="cartTotalBlock">

                <ul>
                    <li>
                        <span>Итого</span>
                        <div></div>
                        <b>5 998 грн.</b>
                    </li>
                    <li>
                        <span>Налог 5%</span>
                        <div></div>
                        <b>300 грн.</b>
                    </li>
                </ul>
                <button
                    className="greenButton">
                    Оформить заказ
                    <img src="/img/arrow.svg"
                         alt="arrow"/>
                </button>

                </div>
            </div>
        </div>

      <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
              <img width={40} height={40} src="/img/logo.png.png" alt=""/>
              <div className="headerInfo">
                  <h3>Sneaker World</h3>
                  <p className="opacity-5">Магазин оригинальных кроссовок</p>
              </div>
          </div>
          <ul className="d-flex">
              <li className="mr-30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                       className="bi bi-cart3" viewBox="0 0 16 16">
                      <path
                          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>


                  <span>1205 грн</span>
              </li>
              <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                       className="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
              </li>
          </ul>

      </header>

        <div className="content p-40">
           <div className="d-flex align-center justify-between mb-40">
               <h1>Все кроссовки</h1>
               <div className="search-block d-flex">
                   <img src="/img/search.svg" alt="search"/>
                   <input placeholder="Поиск ..."/>

               </div>
           </div>

            <div className="d-flex">
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/1jpg.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>2 999 грн.</b>
                            <div>
                                <button className="button">
                                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                   <div className="favorite">
                       <img src="/img/heard-unliked.svg" alt="unliked"/>
                   </div>
                    <img width={133} height={112} src="/img/sneakers/4jpg.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>2 999 грн.</b>
                            <div>
                                <button className="button">
                                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/3jpg.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>2 999 грн.</b>
                            <div>
                                <button className="button">
                                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/4jpg.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>2 999 грн.</b>
                            <div>
                                <button className="button">
                                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  );
}

export default App;
