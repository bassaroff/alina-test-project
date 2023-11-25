import {ReactNode} from "react";
import classnames from "classnames/bind";
import styles from './row.module.scss';

const cn = classnames.bind(styles);

const Row = ({ children }: { children: ReactNode}) => {
    return (
        <div className={cn('row')}>
            {children}
        </div>
    )
}

export default Row;