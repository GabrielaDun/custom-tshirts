import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize'
import OptionColor from '../OptionColor/OptionColor';


const ProductOptions = props => {

    
    console.log(props);
    
    return (
        <form onSubmit={props.action}>
            <OptionSize 
                sizes={props.sizes} 
                onClickSize={props.onClickSize}
                onClickPrice={props.onClickPrice}
            />
            <OptionColor 
                colors={props.colors}
                onClickColor ={props.onClickColor}
                currentColor = {props.currentColor}
            />
            <Button className={styles.button} >
                <span className="fa fa-shopping-cart" />
            </Button>
            </form>
    )
}

export default ProductOptions;
