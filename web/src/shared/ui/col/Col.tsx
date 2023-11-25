import {ReactNode} from "react";
import classnames from "classnames/bind";
import styles from './col.module.scss';

const cn = classnames.bind(styles);

type RangeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 10 | 11 | 12;
interface ColProps {
    children: ReactNode
    col: RangeType
    colSm: RangeType
}

const Col = ({ children, col, colSm }: ColProps) => {
    return (
        <div
            className={cn(
                `col-${col}`,
                `col-${colSm}-sm`
            )}
        >
            {children}
        </div>
    )
}

export default Col;