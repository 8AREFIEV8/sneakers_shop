
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header>
          <div className="headerLeft">
              <img width={40} height={40} src="/img/logo.png.png" alt=""/>
              <div className="headerInfo">
                  <h3>Sneaker World</h3>
                  <p>Магазин оригинальных кроссовок</p>
              </div>
          </div>
          <ul className="headerRight">
              <li>
                  <img width={18} height={18} src="/img/cart.svg" alt=""/>
                  <span>1205 грн</span>
              </li>
              <li>
                  <svg />
              </li>
          </ul>
      </header>
        <div className="content">
            <h1>Все кроссовки</h1>

            .....
        </div>

    </div>
  );
}

export default App;
