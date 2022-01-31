
import styles from './Card.module.scss';
import {useState} from "react";


function Card(props) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }
    console.log(isAdded)
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img src="/img/heard-unliked.svg" alt="unliked"/>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
            <h5 className="p-10">{props.title}</h5>
            <div className="d-flex justify-between align-center" >
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} грн.</b>
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