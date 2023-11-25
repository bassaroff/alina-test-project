import {Outlet} from "react-router-dom";
import classNames from "classnames/bind";
import styles from './main.module.scss';
import {Container} from "@/shared/ui";

const cn = classNames.bind(styles);

const Main = () => {
    return (
        <div className={cn('main')}>
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}

export default Main;