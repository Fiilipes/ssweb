const questions = {
    "Fyziklání Online": {
        "series": [
            {
                id: 12,
                year: 2022,
                questions: [
                    {
                        "id": 1,
                        "name": "nešťastný trolejbus",
                        "task": "Trolejbus o celkové hmotnosti $M_t = 15$ tun (bez pasažérů) a objemu $V_t = 90 m^3$ vjíždí na most přes řeku. Na mostě ale probíhá rekonstrukce a neopatrní dělníci tam zapomněli zakázat vjezd, takže trolejbus spadne do řeky. Kolik maximálně procent objemu trolejbusu mohou tvořit pasažéři, aby po pádu vyplaval k hladině, pokud uvažujeme hustotu lidského těla stejnou jako hustotu vody? Trolejbus považujte za hermeticky uzavřený.\nVerča zaslechla, že je zájem o úlohu s trolejbusem.",
                        "process": "Označme si hledaný poměr jako $x$. Výslednou hmotnost trolejbusu i s pasažéry pak můžeme zapsat jako $M_t + x\\rho_vV_t$. Pokud má trolejbus vyplavat k hladině, musí být vztlaková síla na ponořený trolejbus alespoň tak velká jako tíhová, dostáváme tedy rovnici\n$$(M_t + x\\rho_vV_t) g = V_t\\rho_vg$$. Z ní už snadno vyjádříme poměr\n$$x = \\frac{V_t\\rho_v - M_t}{V_t\\rho_v} = 1 - \\frac{M_t}{V_t\\rho_v}.$$ Po dosazení hodnot dostaneme $x = 83,3\\%$.",
                        "answer": 83.3,
                        "metric": "%",
                        "points": 3,
                        "authors": [
                            {
                                "name": "Veronika Hendrychová",
                                "email": "vercah@fykos.cz"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "porovnání praků",
                        "task": "Lega už omrzely luky, tak si šel koupit prak. Ten aproximujeme jako pružinku s konstantní tuhostí a nulovou klidovou délkou. Legolas umí natáhnout prak silou $F = 31.4 N$ a chce, aby při takovém natažení uložil do praku co největší energii. V obchodě byly 2 praky s tuhostmi $k_1 = 159 N/m$ a $k_2 = 265 N/m$. Jaký bude rozdíl potenciálních energií uložených do těchto praků při natažení silou $F$? Uveďte kladný výsledek, pokud má více energie prak s $k_1$, a záporný, pokud naopak. Lega už omrzely luky.",
                        "process": "Potenciální energie pružinky je daná vzorcem $Ep = \\frac{1}{2} ky^2$, kde $k$ je tuhost pružinky a $y$ je její prodloužení. Pokud natáhneme pružinku tuhosti $k_1$ silou $F$, její délka se zvětší o $y_1 = \\frac{F}{k_1}$. Poté pro potenciální energii první pružinky dostáváme $Ep_1 = \\frac{F^2}{2k_1}$. Analogicky vyjádříme i potenciální energii druhé pružinky při stejném natáhnutí. Nakonec spočítáme rozdíl těchto dvou energií a dostaneme $Ep_1 - Ep_2 = \\frac{F^2}{2} \\left(\\frac{1}{k_1} - \\frac{1}{k_2}\\right) = 1.24 J$, což je hledaný výsledek.",
                        "answer": 1.24,
                        "metric": "J",
                        "points": 3,
                        "authors": [
                            {
                                "name": "Šimon Pajger",
                                "email": "legolas@fykos.cz"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "name": "horská cyklistika",
                        "task": "Matěj jede po horské cyklostezce a míjí protijedoucí cyklisty. Na vršku kopce se vyčerpaní jezdci pohybují průměrnou rychlostí $5 km\\cdot h^{-1}$ v obou směrech a Matěj jich zde potkává v průměru $0.02$ za sekundu. Naopak v nejnižším bodě stezky jsou cyklisti rozjetí (z obou směrů) a ženou se průměrnou rychlostí $50 km\\cdot h^{-1}$. Kolik jich Matěj v průměru potkává zde? Cyklostezka nemá žádné odbočky a Matěj se vždy pohybuje rychlostí průměrného cyklisty.",
                        "process": "Úloha je triková a má triviální řešení. Předpokládáme-li, že se nikdo nevyboural, tak kvůli zachování počtu cyklistů musí každým bodem cyklostezky projet stejný počet jezdců za sekundu. Díky tomu, že se Matěj pohybuje stejně velkou rychlostí jako protijedoucí cyklisti, je tak počet jezdců potkaných za sekundu dvojnásobný (vůči statickému pozorovateli), ale pořád zůstává konstantní. Řešením je tedy $0.02$ cyklistů za sekundu.",
                        "answer": 0.02,
                        "metric": "cyklisté za sekundu",
                        "points": 3,
                        "authors": [
                            {
                                "name": "Matěj Mezera",
                                "email": "m.mezera@fykos.cz"
                            }
                        ]
                    },
                    {
                        id: 57,
                        name: "Matějova černá teplá krabička",
                        task: "Určete počet fotonů v uzavřené krabičce o objemu přesně 1 litr, která je v místnosti o teplotě $25.0 K$ v tepelné rovnováze.",
                        process: "Na určenie počtu fotónov v našej krabičke musíme najprv určiť časticovú hustotu. Mohlo by sa zdať, že úloha je pomerne jednoduchý príklad na použitie Stefanovho-Boltzmannovho zákona na určenie hustoty energie elektromagnetického žiarenia, ale na prevedenie hustoty energie na počet fotónov by sme museli deliť akousi strednou energiou fotónu, ktorú nepoznáme. Musíme preto vyjsť z prvých princípov – z Planckovho zákona $B(T, ν) = \\frac{hν^2}{2ν^2c^2} \\frac{1}{e^{\\frac{hν}{k_BT}} - 1}$, kde $ν$ je frekvencia žiarenia, $T$ je termodynamická teplota čierneho telesa, $h$ je Planckova konštanta, $c$ je rýchlosť svetla a $k_B$ je Boltzmannova konštanta. Veličina $B$ udáva energiu $dE$, ktorá je z plochy $dS$ vyžiarená do priestorového uhla $dΩ$ za čas $dt$, v intervale frekvencií $[ν, ν + dν]$. Pre hustotu energie žiarenia by sme potom mali $u = \\frac{4π}{c} \\int_{0}^{∞} B(T, ν) dν$. Výsledkom integrácie by sme dostali Stefanov-Boltzmannov zákon. My však chceme určiť hustotu častíc, v integrande preto musíme deliť $B(T, ν)$ energiou častice o danej frekvencii $hν$: $n = \\frac{4π}{c} \\int_{0}^{∞} B(T, ν) \\frac{hν}{dν} = \\frac{4π}{c} \\int_{0}^{∞} \\frac{2ν^2}{c^2} \\frac{1}{e^{\\frac{hν}{k_BT}} - 1} dν$. Nasledujúcim krokom je previesť integrál obsahujúci fyzikálne veličiny na integrál matematický (prevedieme použitím substitúcie na bezrozmerný integrand – často používaná úprava, ktorá prevádza výpočetný fyzikálny problém na matematický.) Najdôležitejšie je mať peknú veličinu v argumente exponenciály, volíme preto $\\frac{hν}{k_BT} = x ⇒ ν = x\\frac{k_BT}{h}$. Po substitúcii dostávame $n = \\frac{8π}{(k_BT)^3} \\int_{0}^{∞} x^2 e^{x - 1} dx = 8π \\left(\\frac{k_BT}{hc}\\right)^3 \\int_{0}^{∞} x^2 e^{x - 1} dx = 8π \\left(\\frac{k_BT}{hc}\\right)^3 2.404$. Zhrnutím máme finálny vzťah do ktorého môžeme dosadiť: $N = Vn = V 3.17 × 10^8$.",
                        answer: 3.17e8,
                        metric: "",
                        points: 7,
                        authors: [{name: "Jozef Lipták", email: "liptak.j@fykos.cz"}]
                    }
                ]
            }
        ]
    },
    "Fyziklání": {
        "series": [
            {
                id: 15,
                year: 2022,
                questions: [
                    {
                        "id": 1,
                        "name": "nešťastný trolejbus",
                        "task": "Trolejbus o celkové hmotnosti $M_t = 15$ tun (bez pasažérů) a objemu $V_t = 90$ m$^3$ vjíždí na most přes řeku. Na mostě ale probíhá rekonstrukce a neopatrní dělníci tam zapomněli zakázat vjezd, takže trolejbus spadne do řeky. Kolik maximálně procent objemu trolejbusu mohou tvořit pasažéři, aby po pádu vyplaval k hladině, pokud uvažujeme hustotu lidského těla stejnou jako hustotu vody? Trolejbus považujte za hermeticky uzavřený.\nVerča zaslechla, že je zájem o úlohu s trolejbusem.",
                        "process": "Označme si hledaný poměr jako $x$. Výslednou hmotnost trolejbusu i s pasažéry pak můžeme zapsat jako $M_t + x\rho_vV_t$. Pokud má trolejbus vyplavat k hladině, musí být vztlaková síla na ponořený trolejbus alespoň tak velká jako tíhová, dostáváme tedy rovnici\n$$(M_t + x\rho_vV_t) g = V_t\rho_vg$$. Z ní už snadno vyjádříme poměr\n$$x = \frac{V_t\rho_v - M_t}{V_t\rho_v} = 1 - \frac{M_t}{V_t\rho_v}.$$ Po dosazení hodnot dostaneme $x = 83.3\%$.",
                        "answer": 83.3,
                        "metric": "%",
                        "points": 3,
                        "authors": [
                            {
                                "name": "Veronika Hendrychová",
                                "email": "vercah@fykos.cz"
                            }
                        ]
                    }
,
                    {
                        "id": 2,
                        "name": "porovnání praků",
                        "task": "Lega už omrzely luky, tak si šel koupit prak. Ten aproximujeme jako pružinku s konstantní tuhostí a nulovou klidovou délkou. Legolas umí natáhnout prak silou $F = 31.4 N$ a chce, aby při takovém natažení uložil do praku co největší energii. V obchodě byly 2 praky s tuhostmi $k_1 = 159 N/m$ a $k_2 = 265 N/m$. Jaký bude rozdíl potenciálních energií uložených do těchto praků při natažení silou $F$? Uveďte kladný výsledek, pokud má více energie prak s $k_1$, a záporný, pokud naopak. Lega už omrzely luky.",
                        "process": "Potenciální energie pružinky je daná vzorcem $Ep = \\frac{1}{2} ky^2$, kde $k$ je tuhost pružinky a $y$ je její prodloužení. Pokud natáhneme pružinku tuhosti $k_1$ silou $F$, její délka se zvětší o $y_1 = \\frac{F}{k_1}$. Poté pro potenciální energii první pružinky dostáváme $Ep_1 = \\frac{F^2}{2k_1}$. Analogicky vyjádříme i potenciální energii druhé pružinky při stejném natáhnutí. Nakonec spočítáme rozdíl těchto dvou energií a dostaneme $Ep_1 - Ep_2 = \\frac{F^2}{2} \\left(\\frac{1}{k_1} - \\frac{1}{k_2}\\right) = 1.24 J$, což je hledaný výsledek.",
                        "answer": 1.24,
                        "metric": "J",
                        "points": 3,
                        "authors": [
                            {
                                "name": "Šimon Pajger",
                                "email": "legolas@fykos.cz"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "name": "horská cyklistika",
                        "task": "Matěj jede po horské cyklostezce a míjí protijedoucí cyklisty. Na vršku kopce se vyčerpaní jezdci pohybují průměrnou rychlostí $5 km\\cdot h^{-1}$ v obou směrech a Matěj jich zde potkává v průměru $0.02$ za sekundu. Naopak v nejnižším bodě stezky jsou cyklisti rozjetí (z obou směrů) a ženou se průměrnou rychlostí $50 km\\cdot h^{-1}$. Kolik jich Matěj v průměru potkává zde? Cyklostezka nemá žádné odbočky a Matěj se vždy pohybuje rychlostí průměrného cyklisty.",
                        "process": "Úloha je triková a má triviální řešení. Předpokládáme-li, že se nikdo nevyboural, tak kvůli zachování počtu cyklistů musí každým bodem cyklostezky projet stejný počet jezdců za sekundu. Díky tomu, že se Matěj pohybuje stejně velkou rychlostí jako protijedoucí cyklisti, je tak počet jezdců potkaných za sekundu dvojnásobný (vůči statickému pozorovateli), ale pořád zůstává konstantní. Řešením je tedy $0.02$ cyklistů za sekundu.",
                        "answer": 0.02,
                        "metric": "cyklisté za sekundu",
                        "points": 3,
                        "authors": [
                            {
                                "name": "Matěj Mezera",
                                "email": "m.mezera@fykos.cz"
                            }
                        ]
                    },
                ]
            },
            {
                id: 2,
                year: 2020,
                questions: [
                    {
                        "id": 1,
                        "name": "ujíždí mi ruka",
                        "task": "Podle informací z Wikipedie jsou nejdelší eskalátory v Praze na Náměstí Míru. Urazí zde $l = 87.1 m$ za $t = 140 s$. Také se říká, že kvůli pozornosti se pohybují madla o $\\delta v = 2.0 \\%$ rychleji než schody. O kolik se vám posune ruka oproti zbytku těla v momentě, kdy ruka dojede na konec eskalátorů (kdybyste ji měli dost dlouhou), pokud se budete celou dobu držet madla a při tom stát na stejném schodě? Karel se znovu zamýšlel nad eskalátory.",
                        "process": "Madla se pohybují rychlostí $u = v \\cdot (1 + \\delta v)$,<br/> proto se ruka dostane na konec eskalátorů za čas <br/> $\\tau = \\frac{l}{u} = \\frac{l}{v} \\cdot \\frac{1}{1 + \\delta v}$.<br/> Zbytek těla se mezitím urazí vzdálenost <br/> $l_0 = v \\cdot \\tau = l_0 \\cdot \\frac{1}{1 + \\delta v}$,<br/> z čehož zjistíme, že se ruka oproti zbytku těla posunula o <br/> $\\Delta l = l - l_0 = \\frac{\\delta v}{1 + \\delta v} \\cdot l$, <br/>$\\Delta l = 1.71m$. <br/>Ruka by vám popojela o 1,71 m oproti nohám. Proto není u většiny lidí reálné, aby se vydrželi držet celou dobu na jednom místě. Je otázkou, jak přesně jsou nastavené které eskalátory. Ale to, že se musíte občas přechytit (a děláte to nejspíše i podvědomě), není obvykle chybou eskalátorů, jedná se naopak o chtěný prvek.",
                        "answer": 1.71,
                        "metric": "m",
                        "points": 3,
                        "authors": [
                            {
                                "name": "Jiří Kohl",
                                "email": "jiri.kohl@fykos.cz"
                            },
                            {
                                "name": "Karel Kolář",
                                "email": "karel@fykos.cz"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "porovnání praků",
                        "task": "Lega už omrzely luky, tak si šel koupit prak. Ten aproximujeme jako pružinku s konstantní tuhostí a nulovou klidovou délkou. Legolas umí natáhnout prak silou $F = 31.4 N$ a chce, aby při takovém natažení uložil do praku co největší energii. V obchodě byly 2 praky s tuhostmi $k_1 = 159 N/m$ a $k_2 = 265 N/m$. Jaký bude rozdíl potenciálních energií uložených do těchto praků při natažení silou $F$? Uveďte kladný výsledek, pokud má více energie prak s $k_1$, a záporný, pokud naopak. Lega už omrzely luky.",
                        "process": "Potenciální energie pružinky je daná vzorcem $Ep = \\frac{1}{2} ky^2$, kde $k$ je tuhost pružinky a $y$ je její prodloužení. Pokud natáhneme pružinku tuhosti $k_1$ silou $F$, její délka se zvětší o $y_1 = \\frac{F}{k_1}$. Poté pro potenciální energii první pružinky dostáváme $Ep_1 = \\frac{F^2}{2k_1}$. Analogicky vyjádříme i potenciální energii druhé pružinky při stejném natáhnutí. Nakonec spočítáme rozdíl těchto dvou energií a dostaneme $Ep_1 - Ep_2 = \\frac{F^2}{2} \\left(\\frac{1}{k_1} - \\frac{1}{k_2}\\right) = 1.24 J$, což je hledaný výsledek.",
                        "answer": 1.24,
                        "metric": "J",
                        "points": 3,
                        "authors": [
                            {
                                "name": "Šimon Pajger",
                                "email": "legolas@fykos.cz"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "name": "horská cyklistika",
                        "task": "Matěj jede po horské cyklostezce a míjí protijedoucí cyklisty. Na vršku kopce se vyčerpaní jezdci pohybují průměrnou rychlostí $5 km\\cdot h^{-1}$ v obou směrech a Matěj jich zde potkává v průměru $0.02$ za sekundu. Naopak v nejnižším bodě stezky jsou cyklisti rozjetí (z obou směrů) a ženou se průměrnou rychlostí $50 km\\cdot h^{-1}$. Kolik jich Matěj v průměru potkává zde? Cyklostezka nemá žádné odbočky a Matěj se vždy pohybuje rychlostí průměrného cyklisty.",
                        "process": "Úloha je triková a má triviální řešení. Předpokládáme-li, že se nikdo nevyboural, tak kvůli zachování počtu cyklistů musí každým bodem cyklostezky projet stejný počet jezdců za sekundu. Díky tomu, že se Matěj pohybuje stejně velkou rychlostí jako protijedoucí cyklisti, je tak počet jezdců potkaných za sekundu dvojnásobný (vůči statickému pozorovateli), ale pořád zůstává konstantní. Řešením je tedy $0.02$ cyklistů za sekundu.",
                        "answer": 0.02,
                        "metric": "cyklisté za sekundu",
                        "points": 3,
                        "authors": [
                            {
                                "name": "Matěj Mezera",
                                "email": "m.mezera@fykos.cz"
                            }
                        ]
                    },
                ]
            }
        ]
    }

}

export default questions