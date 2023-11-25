import classnames from "classnames/bind";
import styles from './sidebar.module.scss';
import Logotype from '@/shared/assets/images/logotype.png';
import {Typography, VerticalDivider} from "@/shared/ui";
import {Menu} from "@/layout/sidebar/components";
import {useAppDispatch, useAppSelector} from "@/app/providers/with-redux-store";
import { AiOutlineArrowLeft } from "react-icons/ai"
import {closeSidebar} from "@/app/providers/with-redux-store/modules/sidebar";

const cn = classnames.bind(styles);

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const { sidebarOpen } = useAppSelector(state => state.sidebar);

    const handleCloseSidebar = () => {
        dispatch(closeSidebar());
    }

    return (
        <>
            <div className={cn('sidebar', '_wrapper', { '_mobile-open': sidebarOpen })}>
                <div className={cn('sidebar', '_logo-wrapper')}>
                    <img className={cn('sidebar', '_logo')} alt="logo" src={Logotype} />
                    <VerticalDivider />
                    <Typography
                        className={cn('sidebar', '_heading')}
                        variant='subtitle-1'
                        color={'primary'}
                    >
                        CMS
                    </Typography>
                    <AiOutlineArrowLeft
                        tabIndex={0}
                        role={"button"}
                        onClick={handleCloseSidebar}
                        className={cn('sidebar', '_close')}
                    />
                </div>
                <Menu />
            </div>
            <div className={cn('sidebar', '_bg', { '_mobile-open': sidebarOpen })} />
        </>
    )
}

export default Sidebar;