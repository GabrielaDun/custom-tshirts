import styles from './ProductImage.module.scss';

const ProductImage = props => (
<div className={styles.imageContainer}>
    <img 
    className={styles.image}
    alt="Kodilla shirt"
    src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.title}--${props.color}.jpg`} />
</div>
);

export default ProductImage;
