import styles from './ProductOptions.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';


const ProductOptions = props => {

    const capitalLetterColors = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    }
    
    console.log(props);
    
    return (
        <form onSubmit={props.action}>
            <div className={styles.sizes}>
                <h3 className={styles.optionLabel}>Sizes</h3>
                <ul className={styles.choices}>
                {props.sizes.map(size =>
                    <li key={size.name}>
                    <button 
                        type="button"
                        onClick={() => {props.onClickSize(size); props.onClickPrice(size.additionalPrice)}}>
                        {size.name}
                    </button>
                    </li>
                    )}
                </ul>
            </div>
            <div className={styles.colors}>
                <h3 className={styles.optionLabel}>Colors</h3>
                <ul className={styles.choices}>
                {props.colors.map(item =>
                    <li key={item}>
                    <button 
                        onClick={() => props.onClickColor(item)}
                        type="button" 
                        className={clsx(capitalLetterColors(item), 
                        item === props.currentColor && styles.active)} 
                    /> 
                    </li>
                )}
                </ul>
            </div>
            <Button className={styles.button} >
                <span className="fa fa-shopping-cart" />
            </Button>
            </form>
    )
}

export default ProductOptions;
