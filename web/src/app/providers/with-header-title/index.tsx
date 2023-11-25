import React, {ReactElement, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {isMenuAccordion, isMenuLink, menu} from "@/layout/sidebar/components/menu/types";


interface WithHeaderTitleProps {
    title: string;
}

interface IUrl {
    title: string
    pathname: string
}

export function withHeaderTitle(WrappedComponent: React.ComponentType<WithHeaderTitleProps>) {
    return function WithHeaderTitle(): ReactElement {
        const { pathname } = useLocation();
        const [title, setTitle] = useState<string>('');

        const handleChangeTitle = () => {
            const urls: IUrl[] = [];

            menu.forEach(item => {
                if (isMenuAccordion(item)) {
                    item.children.forEach(child => {
                        urls.push({
                            title: child.title,
                            pathname: item.baseUrl + child.url
                        })
                    })
                }
                if (isMenuLink(item)) {
                    urls.push({
                        title: item.title,
                        pathname: item.url
                    })
                }
            })


            const str = urls.find(i => i.pathname === pathname);

            setTitle(str ? str.title : '');
        }

        useEffect(() => {
            pathname && handleChangeTitle();
        }, [pathname]);

        return <WrappedComponent title={title} />;
    };
}
