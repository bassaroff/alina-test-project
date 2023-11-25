import {FC, ReactNode, SVGProps, useEffect, useState} from "react";
import classnames from 'classnames/bind';
import styles from './accordion.module.scss';
import {Typography} from "@/shared/ui";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {MenuLink} from "@/layout/sidebar/components/menu/types";
import {Link} from "@/layout/sidebar/components/link";
import {v4 as uuid} from "uuid";
import {useLocation, useMatch} from "react-router-dom";

const cn = classnames.bind(styles);

interface AccordionProps {
    title: string
    Icon?: FC<SVGProps<SVGElement>>
    links: MenuLink[]
    baseUrl: string
}

const Accordion = ({ title, Icon, links, baseUrl }: AccordionProps) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open);
    }

    useEffect(() => {
        if (location) {
            if (location.pathname.includes(baseUrl)) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        }
    }, [location]);

    return (
        <div className={cn('accordion', '_wrapper')}>
            <div
                tabIndex={0}
                role={"button"}
                onClick={onClick}
                className={cn('accordion', '_title')}
            >
                <div className={cn('accordion', '_heading')}>
                    {Icon && <Icon width={20} height={20} />}
                    <Typography variant="text-l" color={"primary"}>
                        {title}
                    </Typography>
                </div>
                { open ? <IoIosArrowUp /> : <IoIosArrowDown /> }
            </div>
            <div className={cn('accordion', '_content', { _open: open })}>
                {links.map((item) => {
                    return (
                        <Link
                            key={uuid()}
                            Icon={item.icon}
                            title={item.title}
                            to={`${baseUrl + item.url}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Accordion;