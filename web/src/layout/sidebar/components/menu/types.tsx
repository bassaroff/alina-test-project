import {FC, ReactNode, SVGProps} from "react";
import {Icons} from "@/shared/assets/icons";

export type MenuLink = {
    icon?: FC<SVGProps<SVGElement>>
    title: string
    url: string
}

export type MenuAccordion = {
    icon?: FC<SVGProps<SVGElement>>
    title: string
    baseUrl: string
    children: MenuLink[]
}

export type MenuType = (MenuAccordion | MenuLink)[]

export function isMenuAccordion(item: any): item is MenuAccordion {
    return 'children' in item;
}

export function isMenuLink(item: any): item is MenuLink {
    return 'url' in item;
}
export const menu: MenuType = [
    {
        title: 'Дашборд',
        url: '/',
        icon: Icons.Dashboard
    },
    {
        title: 'Заявки',
        icon: Icons.Card,
        baseUrl: '/applications',
        children: [
            {
                title: 'Новая заявка',
                url: '/new',
                icon: Icons.CardAdd
            },
            {
                title: 'Мои заявки',
                url: '/my',
                icon: Icons.Card
            },
            {
                title: 'Согласованные',
                url: '/agreed',
                icon: Icons.CardSuccess
            },
            {
                title: 'Отклоненные',
                url: '/rejected',
                icon: Icons.CardError
            }
        ]
    }
]