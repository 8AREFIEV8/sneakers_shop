
import styles from './Card.module.scss';
import {useState} from "react";


function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false}) {
    const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, title, imageUrl, price});
        setIsAdded(!isAdded);
    }
    const onClickFavorite = () => {
        onFavorite({id, title, imageUrl, price})
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
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
                            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" }
                            alt="Plus"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;