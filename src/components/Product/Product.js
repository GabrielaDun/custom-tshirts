import styles from './Product.module.scss';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';


const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentAddedPrice, setCurrentAddedPrice] = useState(0);
  console.log(currentSize);
  console.log(currentColor);
  console.log(currentAddedPrice);
  


  const getPrice = useMemo(() => {
    return (() => (props.basePrice + currentAddedPrice) )
  }, [currentAddedPrice]);
  
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
  console.log(infoPack);


  return (
    <article className={styles.product}>
      <ProductImage 
        title={props.name} 
        color={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOptions 
          action={infoPack} 
          sizes={props.sizes} 
          colors={props.colors}
          onClickSize={setCurrentSize}
          onClickPrice={setCurrentAddedPrice}
          onClickColor ={setCurrentColor}
          currentColor = {currentColor}
          />
      </div>
    </article>
  )
};

export default Product;