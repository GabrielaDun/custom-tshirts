import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';


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

  const infoPack = (event) => {
    event.preventDefault;
    return console.log (
      "Summery",
      "=========",
      "Name: ", props.name,
      "Price: " ,
      "Size: " ,
      "Color: "
    )
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
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
                    item === props.color && styles.active)} 
                  /> 
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button} onClick={infoPack()}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;