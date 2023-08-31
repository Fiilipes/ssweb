import {
    Activity,
    Calculator,
    Calendar,
    CreditCard,
    Megaphone,
    Settings,
    Smile,
    Store,
    Swords,
    Target,
    Trophy,
    User
} from "lucide-react";
import * as React from "react";


const iconClass = "mr-2 h-4 w-4"

export const routes = [
    {
        category: "Obsah",
        items: [
            {
                icon: <Store className={iconClass}/>,
                title: "Obchod",
                link: "/obchod",
            },
            {
                icon: <Trophy className={iconClass}/>,
                title: "Leaderboard",
                link: "/leaderboard",
            },
            {
                icon: <Swords className={iconClass}/>,
                title: "Eventy",
                link: "/eventy",
            },
            {
                icon: <Megaphone className={iconClass}/>,
                title: "Informace",
                link: "/info",
            },

        ],
    },
    {
        category: "Soutěže Tryhard",
        items: [
            {
                icon: <Target className={iconClass}/>,
                title: "Přehled",
                link: "/soutezetryhard",
            },
            {
                icon: <Megaphone className={iconClass}/>,
                title: "Informace",
                link: "/soutezetryhard/info",
            },
            {
                icon: <Trophy className={iconClass}/>,
                title: "Události",
                link: "/soutezetryhard/udalosti",
            },
            {
                icon: <Activity className={iconClass}/>,
                title: "Váš Status",
                link: "/soutezetryhard/status",
            },


        ],
    },
] as  { category: string, items: { icon: React.ReactNode, title: string, link: string, shortcut?: string}[]}[]