import classnames from 'classnames/bind';
import {Header, Sidebar, Main} from "@/layout";
import styles from './layout.module.scss';

const cn = classnames.bind(styles);

const Layout = () => {
    return (
        <div className={cn('layout', '_wrapper')}>
            <Sidebar />
            <Header />
            <Main />
        </div>
    )
}

export default Layout;