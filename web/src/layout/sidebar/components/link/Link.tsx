import {Link as RouterLink, useMatch} from 'react-router-dom';
import classNames from "classnames/bind";
import styles from './link.module.scss';
import React, {FC, ReactNode, SVGProps} from "react";
import {Typography} from "@/shared/ui";

const cn = classNames.bind(styles);

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    title: string
    to: string
    Icon?: FC<SVGProps<SVGElement>>
}

const Link = ({ title, to, className, Icon, ...rest}: LinkProps) => {
    const match = useMatch(to);

    return (
        <RouterLink className={cn('link', className, { _active: !!match })} {...rest} to={to}>
            {Icon && <Icon color={match ? 'white': 'black'} width={20} height={20} />}
            <Typography
                className={cn('link-title')}
                variant={"text-l"}
                color={match ? 'secondary' : 'primary'}
            >
                {title}
            </Typography>
        </RouterLink>
    )
}

export default Link;