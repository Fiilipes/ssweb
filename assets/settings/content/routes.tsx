import {Calculator, Calendar, CreditCard, Settings, Smile, Store, Swords, Target, Trophy, User} from "lucide-react";
import * as React from "react";


export const routes = [
    {
        category: "Obsah",
        items: [
            {
                icon: <Store className="mr-2 h-4 w-4"/>,
                title: "Obchod",
                link: "/obchod",
            },
            {
                icon: <Trophy className="mr-2 h-4 w-4"/>,
                title: "Leaderboard",
                link: "/leaderboard",
            },
            {
                icon: <Swords className="mr-2 h-4 w-4"/>,
                title: "Eventy",
                link: "/eventy",
            },
        ],
    },
    {
        category: "Soutěže Tryhard",
        items: [
            {
                icon: <Target className="mr-2 h-4 w-4"/>,
                title: "Přehled",
                link: "/soutezetryhard",
            },

        ],
    },
] as  { category: string, items: { icon: React.ReactNode, title: string, link: string, shortcut?: string}[]}[]