import React, {ReactNode} from "react";
import classNames from "classnames";
import styles from './button.module.scss';

const cn = classNames.bind(styles);

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonColor = ''
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    variant: ButtonVariant
}

// TODO Может и доделаю, но на этом этапе уже голова не варила
const Button = ({ children }: { children: ReactNode }) => {
    return (
        <button
            className={cn(
                'button'
            )}
        >
            { children }
        </button>
    )
}

export default Button;