import styles from './OptionColor.module.scss'
import clsx from 'clsx';

const OptionColor = props => {

    const capitalLetterColors = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    }
    return (
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
    )
}

export default OptionColor;