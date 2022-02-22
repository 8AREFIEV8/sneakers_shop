
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader";
import {useContext, useState} from "react";
import AppContext from "../../context";


function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false, loading = false}) {
    const {isItemAdded} = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);

    // console.log(title, isItemAdded(id));

    const onClickPlus = () => {
        onPlus({ id, title, imageUrl, price});
    };
    const onClickFavorite = () => {
        onFavorite({id, title, imageUrl, price})
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {
                loading ?  <ContentLoader
                    speed={0}
                    width={150}
                    height={260}
                    viewBox="0 0 150 260"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"

                >
                    <rect x="550" y="227" rx="3" ry="3" width="88" height="6" />
                    <rect x="580" y="233" rx="0" ry="0" width="1" height="55" />
                    <circle cx="593" cy="243" r="20" />
                    <rect x="-85" y="-56" rx="0" ry="0" width="91" height="57" />
                    <rect x="58" y="79" rx="0" ry="0" width="1" height="0" />
                    <rect x="103" y="63" rx="0" ry="0" width="1" height="0" />
                    <rect x="106" y="63" rx="0" ry="0" width="1" height="0" />
                    <rect x="123" y="50" rx="0" ry="0" width="0" height="1" />
                    <rect x="100" y="47" rx="0" ry="0" width="2" height="0" />
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                    <rect x="35" y="86" rx="0" ry="0" width="1" height="13" />
                    <rect x="33" y="88" rx="0" ry="0" width="2" height="4" />
                    <rect x="33" y="86" rx="0" ry="0" width="2" height="6" />
                    <rect x="0" y="86" rx="5" ry="5" width="150" height="15" />
                    <rect x="0" y="108" rx="5" ry="5" width="150" height="15" />
                    <rect x="117" y="186" rx="11" ry="11" width="32" height="32" />
                    <rect x="-1" y="188" rx="5" ry="5" width="80" height="32" />
                    <rect x="0" y="136" rx="5" ry="5" width="93" height="15" />
                </ContentLoader> : <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                    <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="unliked" />
                </div>
                    <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
                    <h5 className="p-10">{title}</h5>
                    <div className="d-flex justify-between align-center" >
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} грн.</b>
                            <div>

                                <img
                                    className={styles.plus}
                                    onClick={onClickPlus}
                                    src={isItemAdded(id)? "/img/btn-checked.svg" : "/img/btn-plus.svg" }
                                    alt="Plus"
                                />

                            </div>
                        </div>
                    </div>
                </>
            }











        </div>
    )
}
export default Card;