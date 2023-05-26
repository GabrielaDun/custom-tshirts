import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';


const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentAddedPrice, setCurrentAddedPrice] = useState(0);
  console.log(currentSize);
  console.log(currentColor);
  console.log(currentAddedPrice);
  

  const capitalLetterColors = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
      return (props.basePrice + currentAddedPrice );
  }

  const priceOfTheItem = currentAddedPrice + props.basePrice;

  const infoPack = event => {
    console.log(event);
    event.preventDefault();
    return console.log (
      "Summery",
      "=========",
      "Name: ", props.title,
      "Price: ", priceOfTheItem,
      "Size: ", currentSize,
      "Color: ", currentColor,
    )
  }


  return (
    <article className={styles.product}>
      <ProductImage title={props.name} color={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={infoPack}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size =>
                <li key={size.name}>
                  <button 
                    type="button"
                    onClick={() => {setCurrentSize(size); setCurrentAddedPrice(size.additionalPrice)}}>
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
                    onClick={() => setCurrentColor(item)}
                    type="button" 
                    className={clsx(capitalLetterColors(item), 
                    item === currentColor && styles.active)} 
                  /> 
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button} >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;