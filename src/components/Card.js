function Card() {
    return (
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
    )
}
export default Card;