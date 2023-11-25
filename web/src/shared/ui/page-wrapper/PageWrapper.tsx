import {ReactNode} from "react";
import styles from './page-wrapper.module.scss';
import classnames from "classnames/bind";

const cn = classnames.bind(styles);

const PageWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className={cn('page-wrapper')}>
            {children}
        </div>
    )
}

export default PageWrapper;