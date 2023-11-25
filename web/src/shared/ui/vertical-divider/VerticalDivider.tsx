import classNames from "classnames/bind";
import styles from './vertical-divider.module.scss';

const cn = classNames.bind(styles);

const VerticalDivider = () => {
    return (
        <div className={cn('vertical-divider')} />
    )
}

export default VerticalDivider;