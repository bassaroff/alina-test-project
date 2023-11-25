import {ReactNode} from "react";
import classnames from 'classnames/bind';
import styles from './container.module.scss';

const cn = classnames.bind(styles);

const Container = ({ children }: { children: ReactNode}) => {
    return (
        <div className={cn('container')}>
            { children }
        </div>
    )
}

export default Container;