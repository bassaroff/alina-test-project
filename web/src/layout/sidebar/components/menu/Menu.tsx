import Accordion from "../accordion/Accordion";
import classnames from "classnames/bind";
import { v4 as uuid } from 'uuid';
import styles from './menu.module.scss';
import {isMenuAccordion, isMenuLink, menu} from "@/layout/sidebar/components/menu/types";
import {Link} from "@/layout/sidebar/components/link";

const cn = classnames.bind(styles);

const Menu = () => {
    return (
        <div className={cn('menu', '_wrapper')}>
            {menu.map((item) => {
                if (isMenuAccordion(item)) {
                    return (
                        <Accordion
                            key={uuid()}
                            Icon={item.icon}
                            title={item.title}
                            links={item.children}
                            baseUrl={item.baseUrl}
                        />
                    )
                }
                if (isMenuLink(item)) {
                    return (
                        <Link
                            key={uuid()}
                            Icon={item.icon}
                            title={item.title}
                            to={item.url}
                        />
                    )
                }
            })}
        </div>
    )
}

export default Menu;