import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import classnames from "classnames/bind";
import {Images} from "@/shared/assets/images";
import styles from './user-widget.module.scss';
import {Typography} from "@/shared/ui";
import {useOutsideClick} from "@/shared/lib/hooks";

const cn = classnames.bind(styles);

const UserWidget = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const ref = useRef(null);
    useOutsideClick(ref, () => setOpen(false));

    return (
        <div
            ref={ref}
            className={cn('user-widget', '_wrapper')}
        >
            <div
                onClick={() => setOpen(!open)}
                role={"button"}
                tabIndex={0}
                className={cn('user-widget', '_profile-wrapper')}
            >
                <div className={cn('user-widget', '_avatar')}>
                    <img alt="default-avatar" src={Images.DefaultAvatar} />
                </div>
                <Typography variant={'text-m'} color={'primary'}>
                    Басаров Алмат
                </Typography>
            </div>
            <ul
                className={cn('user-widget', '_menu', { _open: open })}
            >
                <li
                    tabIndex={0}
                    role="button"
                    onClick={() => navigate('/profile')}
                    className={cn('user-widget', '_menu-item')}
                >
                    <Typography variant={'text-m'} color={"primary"}>
                        Профиль
                    </Typography>
                </li>
                <li
                    tabIndex={0}
                    role="button"
                    onClick={() => {
                        // TODO logout redux event
                        navigate('/profile')
                    }}
                    className={cn('user-widget', '_menu-item', '_error')}
                >
                    <Typography variant={'text-m'} color={"error"}>
                        Выйти
                    </Typography>
                </li>
            </ul>
        </div>
    )
}

export default UserWidget;