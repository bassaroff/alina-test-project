import React, {ReactNode} from "react";
import classnames from "classnames/bind";
import styles from './typography.module.scss';

const cn = classnames.bind(styles);

type TypographyVariant = 'h1' |
    'h2' |
    'h3' |
    'subtitle-1' |
    'subtitle-2' |
    'text-l-bold' |
    'text-l' |
    'text-m-bold' |
    'text-m' |
    'text-s-bold' |
    'text-s'

type TypographyColor = 'primary' |
    'secondary' |
    'success' |
    'error' |
    'warning'

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement>{
    children: ReactNode
    variant: TypographyVariant
    color: TypographyColor
}

const Typography = ({ children, variant, color, className, ...rest }: TypographyProps) => {
    return (
        <p
            className={cn(
                className,
                { [variant]: variant },
                { [color]: color }
            )}
            {...rest}
        >
            { children }
        </p>
    )
}

export default Typography;