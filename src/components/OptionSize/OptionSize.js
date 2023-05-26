import styles from './OptionSize.module.scss'

const OptionSize = props => {
    return (
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
    )

}

export default OptionSize;