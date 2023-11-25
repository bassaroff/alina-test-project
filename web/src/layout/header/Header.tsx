import classnames from "classnames/bind";
import styles from './header.module.scss';
import {useAppDispatch, useAppSelector} from "@/app/providers/with-redux-store";
import {UserWidget} from "@/layout/header/components";
import { RxHamburgerMenu } from "react-icons/rx";
import {openSidebar} from "@/app/providers/with-redux-store/modules/sidebar";
import {withHeaderTitle} from "@/app/providers/with-header-title";

const cn = classnames.bind(styles);

const Header = ({ title = 'hello' }: { title: string }) => {
    const dispatch = useAppDispatch();

    const handleClickHamburger = () => {
        dispatch(openSidebar())
    }

    return (
        <div className={cn('header', '_wrapper')}>
            <RxHamburgerMenu
                tabIndex={0}
                role={"button"}
                onClick={handleClickHamburger}
                className={cn('header', '_menu-hamburger')}
            />
            { title }
            <UserWidget />
        </div>
    )
}

export default withHeaderTitle(Header);