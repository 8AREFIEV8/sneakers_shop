
import Info from "./Info";
import {useContext, useState} from "react";
import AppContext from "../context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));

function Drawer({onClose, onRemove, items = []}) {
    const {cartItems, setCartItems} = useContext(AppContext);
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () => {
      try {
          setIsLoading(true)
          const {data} = await  axios.post(`https://6201422bfdf5090017249939.mockapi.io/orders`, {
              items: cartItems
          });
          // await axios.put(`https://6201422bfdf5090017249939.mockapi.io/cart`,[]);
          setOrderId(data.id);
          setIsOrderComplete(true);
          setCartItems([]);

          for (let i = 0; i < cartItems.length; i++) {
              const item = cartItems[i];
              await axios.delete(`https://6201422bfdf5090017249939.mockapi.io/cart/` + item.id);
              await delay(1000);
          }
      }catch (error) {
          alert("Ошибка при создании заказа!")
      }
      setIsLoading(false);
    }


    return (
        <div className="overlay">
          <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
                Корзина <img onClick={onClose} className="cu-p"  src="img/btn-remove.svg"
                             alt="close"/>
            </h2>

              {
                  items.length > 0 ? <div className="d-flex flex-column flex">
                          <div className="items mb-20">

                              {
                                  items.map((obj) => (
                                      <div key={obj.id} className="cartItem d-flex align-center">

                                          <div
                                              style={{backgroundImage: `url(${obj.imageUrl})`}}
                                              className="cartItemImg">

                                          </div>
                                          <div className="mr-20 flex">
                                              <p className="mb-5">{obj.title}</p>
                                              <b>{obj.price}</b>
                                          </div>
                                          <img
                                              onClick={() => onRemove(obj.id)}
                                              className="removeBtn"
                                              src="/img/btn-remove.svg"
                                              alt="remove"
                                          />
                                      </div>
                                  ))
                              }

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
                                  disabled={isLoading}
                                  onClick={onClickOrder}
                                  className="greenButton">
                                  Оформить заказ
                                  <img src="/img/arrow.svg"
                                       alt="arrow"/>
                              </button>

                          </div>
                      </div>
                      : (
                          <Info
                          title={isOrderComplete
                                 ? "Ваш заказ оформлен!"
                                 : "Корзина пуста"}
                          description={ isOrderComplete
                                 ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке`
                                 : "Добавьте хотя бы одну пару кроссовок чтобы сделать заказ"}
                          image={isOrderComplete
                                 ? "/img/complete-order.jpg"
                                 : "/img/empty-cart.jpg"}
                          />

                      ) }
          </div>
        </div>
    )
}
export default Drawer;




