

function Drawer({onClose, onRemove, items = []}) {
    return (
        <div className="overlay">
          <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
                Корзина <img onClick={onClose} className="cu-p"  src="img/btn-remove.svg"
                             alt="close"/>
            </h2>

              {
                  items.length > 0 ? <div>
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
                                  className="greenButton">
                                  Оформить заказ
                                  <img src="/img/arrow.svg"
                                       alt="arrow"/>
                              </button>

                          </div>
                      </div>
                      : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                      <img className="mb-20"  width="120px" height="120px"   src="/img/empty-cart.jpg" alt="cart"/>
                      <h2>Корзина пуста</h2>
                      <p className="opacity-6">Добавьте хотя бы одну пару кроссовок чтобы сделать заказ</p>
                      <button onClick={onClose} className="greenButton">
                          <img src="/img/arrow.svg" alt="arrow"/>
                          Вернуться назад
                      </button>
                  </div>
              }






          </div>
        </div>
    )
}
export default Drawer;