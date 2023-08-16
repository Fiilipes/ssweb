const navigation = {
    gettingStarted: {
        title: 'Začít',
        components: {
            widget: {
                title: "Survival Server",
                content: "Webová stránka sloužící jako komunitní portál pro uživatele Survival Serveru.",
                link: "/"
            },
            routes: [
                {
                    title: "Obsah",
                    content: "Seznam všeho co Vám web může nabídnout.",
                    link: "/#content"
                },
                {
                    title: "Představení",
                    content: "Základní informace o webu a serveru.",
                    link: "/#introduction"
                },
                {
                    title: "Rozcestník",
                    content: "Chytře navržený rozcestník pro snadnou navigaci.",
                    link: "/#navigation"
                }
            ]
        }
    },
    content: {
        title: 'Obsah',
        components: {
            routes: [
                {
                    title: "Obchod",
                    link: "/obchod",
                    content: "Místo plné Survival Server itemů",
                },
                {
                    title: "Leaderboard",
                    link: "/leaderboard",
                    content: "Žebříček aktivních členů serveru",
                },
                {
                    title: "Eventy",
                    link: "/events",
                    content: "Informace o všech eventech na serveru",
                },
                {
                    title: "Pravidla",
                    link: "/pravidla",
                    content: "Každý člen serveru je povinný znát pravidla",
                },
                {
                    title: "Informace",
                    link: "/info",
                    content: "Novinky a důležité zprávy ze serveru",
                },
                {
                    title: "Zdroje",
                    link: "/zdroje",
                    content: "Odkazy na důležité stránky spojené se serverem",
                }
            ]
        }
    },
    soutěžeTryhard: {
        title: 'Soutěže Tryhard',
        link: "/soutezetryhard"
    }
}

export default navigation;