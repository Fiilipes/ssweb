const questions = {
    "fyziklanionline": {
        "series": [
            {
                id: 12,
                year: 2022,
                questions: [
                    {
                        "id": 1,
                        "name": "ujíždí mi ruka",
                        "task": "Podle informací z Wikipedie jsou nejdelší eskalátory v Praze na Náměstí Míru. Urazí zde $l = 87.1 m$ za $t = 140 s$. Také se říká, že kvůli pozornosti se pohybují madla o $\\delta v = 2.0 \\%$ rychleji než schody. O kolik se vám posune ruka oproti zbytku těla v momentě, kdy ruka dojede na konec eskalátorů (kdybyste ji měli dost dlouhou), pokud se budete celou dobu držet madla a při tom stát na stejném schodě? Karel se znovu zamýšlel nad eskalátory.",
                        "answer": 1.71,
                        "unit": "m",
                        "points": 3,
                        "authors": [
                            {"name": "Jiří Kohl", "email": "jiri.kohl@fykos.cz"},
                            {"name": "Karel Kolář", "email": "karel@fykos.cz"}
                        ]
                    },
                    {
                        "id": 2,
                        "name": "porovnání praků",
                        "task": "Lega už omrzely luky, tak si šel koupit prak. Ten aproximujeme jako pružinku s konstantní tuhostí a nulovou klidovou délkou. Legolas umí natáhnout prak silou $F = 31.4 N$ a chce, aby při takovém natažení uložil do praku co největší energii. V obchodě byly 2 praky s tuhostmi $k_1 = 159 N/m$ a $k_2 = 265 N/m$. Jaký bude rozdíl potenciálních energií uložených do těchto praků při natažení silou $F$? Uveďte kladný výsledek, pokud má více energie prak s $k_1$, a záporný, pokud naopak. Lega už omrzely luky.",
                        "answer": 1.24,
                        "unit": "J",
                        "points": 3,
                        "authors": [
                            {"name": "Šimon Pajger", "email": "legolas@fykos.cz"}
                        ]
                    },
                    {
                        "id": 3,
                        "name": "horská cyklistika",
                        "task": "Matěj jede po horské cyklostezce a míjí protijedoucí cyklisty. Na vršku kopce se vyčerpaní jezdci pohybují průměrnou rychlostí $5 \\, \\text{km} \\cdot \\text{h}^{-1}$ v obou směrech a Matěj jich zde potkává v průměru $0.02$ za sekundu. Naopak v nejnižším bodě stezky jsou cyklisti rozjetí (z obou směrů) a ženou se průměrnou rychlostí $50 \\, \\text{km} \\cdot \\text{h}^{-1}$. Kolik jich Matěj v průměru potkává zde? Cyklostezka nemá žádné odbočky a Matěj se vždy pohybuje rychlostí průměrného cyklisty.",
                        "answer": 0.02,
                        "unit": "cyklistů/s",
                        "points": 3,
                        "authors": [
                            {"name": "Matěj Mezera", "email": "m.mezera@fykos.cz"}
                        ]
                    },
                    {
                        "id": 4,
                        "name": "myslivče, střel se",
                        "task": "Jaký největší poloměr může mít planetka, aby na ní člověk mohl sám sebe střelit? Myslivec vystřelí těsně nad jejím povrchem, rovnoběžně s ním a planetka nebude mít atmosféru. Rychlost letící kulky je $v = 380 \\, \\text{m} \\cdot \\text{s}^{-1}$. Hustota planetky je $\\rho = 3,200 \\, \\text{kg} \\cdot \\text{m}^{-3}$. Uvažujte, že planetka je kulová a homogenní.",
                        "answer": 402,
                        "unit": "km",
                        "points": 3,
                        "authors": [
                            {"name": "Vojtěch David", "email": "vojtech.david@fykos.cz"}
                        ]
                    },
                    {
                        "id": 5,
                        "name": "padající rampouchy",
                        "task": "Z okraje střechy se uvolnil malý ledový rampouch a volným pádem se pohyboval podél svislé zdi domu. Kolem okna vysokého $h = 1.50 \\, m$ proletěl rampouch za dobu $t = 0.10 \\, s$. Jaká je vzdálenost mezi okrajem střechy a vrškem okna?",
                        "answer": 10.7,
                        "unit": "m",
                        "points": 3,
                        "authors": [
                            {"name": "Šimon Pajger", "email": "legolas@fykos.cz"}
                        ]
                    },
                    {
                        "id": 6,
                        "name": "ojetá pneumatika",
                        "task": "Pneumatiky našeho nového vozu mají průměr $D = 634.5 \\, \\text{mm}$ a hloubku dezénu $d_0 = 8.0 \\, \\text{mm}$. Technik nám nastavil tachometr auta tak, že měřil přesně pro původní rozměr kola. Řídíme však často, takže se dezén pneumatik po čase sjel na minimální hloubku pro použití v létě, tedy $d_{min} = 1.6 \\, \\text{mm}$. Jak se nyní odlišuje skutečná rychlost od té, které ukazuje tachometr? Odpověď udejte jako podíl rychlosti na tachometru k reálné hodnotě.",
                        "answer": 1.02,
                        "unit": "",
                        "points": 3,
                        "authors": [
                            {"name": "Karel Kolář", "email": "karel@fykos.cz"}
                        ]
                    },
                    {
                        "id": 7,
                        "name": "vyhoď tu bombu",
                        "task": "Na konci filmu Simpsonovi ve filmu jedou Homer s Bartem na motorce po vnitřní ploše skleněné kupole. Předpokládejte, že kupole má poloměr $1.00 \\, \\text{km}$. Jakou minimální rychlostí by musela motorka jet, aby ani v nejvyšším bodě kupole Homer s Bartem nespadli?",
                        "answer": 357,
                        "unit": "km/h",
                        "points": 3,
                        "authors": [
                            {"name": "Jindřich Jelínek", "email": "jjelinek@fykos.cz"}
                        ]
                    },
                    {
                        "id": 8,
                        "name": "jezdící most",
                        "task": "Silniční most mající délku $L = 8 \\, \\text{m}$ je na jedné straně pevně ukotven. Na druhé je položen na pevných válečcích o poloměru $r = 6 \\, \\text{cm}$. Ty leží na pevné rovné podložce, po které se mohou volně pohybovat ve vodorovném směru. O jaký úhel se válečky otočí mezi zimou, kdy je $T_z = -10^\\circ \\text{C}$, a létem s teplotou $T_l = 30^\\circ \\text{C}$? Koeficient délkové tepelné roztažnosti mostu je $\\alpha = 1.0 \\times 10^{-5} \\, \\text{K}^{-1}$. Válečky neprokluzují a na volné straně je mezi koncem mostu a silnicí mezera.",
                        "answer": 1.5,
                        "unit": "°",
                        "points": 3,
                        "authors": [
                            {"name": "Jaroslav Herman", "email": "jardah@fykos.cz"}
                        ]
                    },
                    {
                        "id": 9,
                        "name": "dva kvádry na kopci",
                        "task": "Mějme „kopec“ skládající se ze dvou nakloněných rovin, jejichž sklon vůči vodorovné rovině označíme $\\alpha_1$ a $\\alpha_2$. Na první rovinu se sklonem $\\alpha_1 = 25^\\circ$ položíme kvádr o hmotnosti $m_1 = 10 \\, \\text{kg}$ a na druhou se sklonem $\\alpha_2 = 35^\\circ$ položíme odlišný kvádr s hmotností $m_2 = 15 \\, \\text{kg}$. Následně oba kvádry propojíme nehmotným lanem vedeným přes nehmotnou kladku na vrcholu kopce. Lano je vždy rovnoběžně napnuté vůči dané rovině, koeficient smykového tření mezi kvádry a nakloněnými rovinami je $f = 0.15$ a koeficient statického tření je dostatečně malý na to, aby se rozjeli. Jaké bude zrychlení kvádru $m_1$, pokud na počátku jsou oba kvádry v klidu? Kladné znaménko bude značit zrychlení dolů z kopce a záporné nahoru k vrcholu.",
                        "answer": -0.46,
                        "unit": "m/s^2",
                        "points": 4,
                        "authors": [
                            {"name": "Šimon Pajger", "email": "legolas@fykos.cz"}
                        ]
                    },
                    {
                        "id": 10,
                        "name": "energetická rychlovarná úspora",
                        "task": "Když ceny rostou, je třeba šetřit. Jaká bude naše úspora v procentech, pokud budeme na čaj ohřívat méně vody a úsporněji? Původní způsob spočíval v ohřátí $V_1 = 1,00 \\, \\text{l}$ vody z původní teploty $t_0 = 18,5^\\circ\\text{C}$ (konvice i vody) na teplotu varu $t_v = 98,5^\\circ\\text{C}$. Používáme rychlovarnou konvici s tepelnou kapacitou $C = 442 \\, \\text{J}·\\text{K}^{-1}$. Nový způsob se bude lišit menším objemem ohřívané vody $V_2 = 0,800 \\, \\text{l}$ a nižší dosaženou teplotou $t_2 = 83^\\circ\\text{C}$. Cenu elektřiny pro spotřebitele uvažujte bez ohledu na aktuální vývoj cen jako konstantní $p = 4,45 \\, \\text{Kč}·\\text{kWh}^{-1}$. Předpokládejte, že teplota vody je vždy stejná v celém objemu a účinnost konvice je 95 %.",
                        "answer": 34,
                        "unit": "%",
                        "points": 4,
                        "authors": [
                            {"name": "Karel Kolář", "email": "karel@fykos.cz"}
                        ]
                    },
                    {
                        "id": 11,
                        "name": "indukované napětí reloaded",
                        "task": "Mějme oblast homogenního magnetického pole. Oblast má obdélníkový průřez se stranami $a = 3,0 \\, \\text{m}$, $b = 2,0 \\, \\text{m}$ a vektor magnetické indukce $B = 1,0 \\times 10^{-3} \\, \\text{T}$ je na ni kolmý. Rovnoběžně s úhlopříčkou obdélníku vedeme dostatečně dlouhý drát tak, že leží celý mimo oblast s magnetickým polem. Tyto konce propojíme voltmetrem. Nyní začneme drátem pohybovat rovnoměrným přímočarým pohybem rychlostí $v = 0,20 \\, \\text{m}·\\text{s}^{-1}$ kolmo na směr magnetické indukce a na úhlopříčku, s níž je rovnoběžný. Jakou nejvyšší velikost napětí bude ukazovat voltmetr během pohybu drátu?",
                        "answer": 0.72,
                        "unit": "mV",
                        "points": 3,
                        "authors": [
                            {"name": "Vojtěch David", "email": "vojtech.david@fykos.cz"}
                        ]
                    },
                    {
                        "id": 12,
                        "name": "Archimedeskugeln",
                        "task": "Mějme dvě identické nádoby s hmotností $M_n = 340,0 \\, \\text{g}$ se stejným množstvím vody o hmotnosti $M_w = 150,0 \\, \\text{g}$. Obě nádoby postupně postavíme na váhy. Do první z nich ponoříme ocelovou kuličku s hustotou $\\rho_o = 7 850 \\, \\text{kg·m}^{-3}$, jež je zavěšená na externí konstrukci, která nestojí na váze. Kulička je plně ponořená a nedotýká se dna. Ve druhé nádobě připevníme ke dnu provázkem polystyrenovou kuličku s hustotou $\\rho_p = 27,0 \\, \\text{kg·m}^{-3}$ a poloměrem $r_p = 1,5 \\, \\text{cm}$. Kulička je plně ponořená, neprotíná hladinu. Jaký musí být poloměr ocelové kuličky, aby obě váhy ukázaly stejnou hmotnost?",
                        "answer": 0.45,
                        "unit": "cm",
                        "points": 5,
                        "authors": [
                            {"name": "Jindřich Jelínek", "email": "jjelinek@fykos.cz"}
                        ]
                    },
                    {
                        "id": 13,
                        "name": "Zanedbání pohybu Země",
                        "task": "Zamýšleli jste se někdy nad tím, že zanedbáváme pohyb Země k tělesu, které volně nad ní upustíme? Tento výpočet zodpovídá Zemi o nekonečné hmotnosti. Dalo by se však alespoň teoreticky pohyb Země změřit? Dle současné fyziky obecně nedokážeme měřit vzdálenosti menší než Planckova délka, která je $l_P = \\sqrt{\\frac{\\hbar G}{c^3}} = 1,616 \\cdot 10^{-35} \\, \\text{m}$. Jakou minimální hmotnost by muselo mít těleso, aby se mezi jeho upuštěním a dopadem pohnula Země alespoň o $n = 10^4$ Planckových délek vůči své původní poloze? Těleso bylo před pádem ve výšce $h = 1,00 \\, \\text{m}$ nad povrchem. Neuvažujte rotaci Země, atmosféru a jakýkoli její jiný pohyb.",
                        "answer": 0.965,
                        "unit": "mg",
                        "points": 4,
                        "authors": [
                            {"name": "Karel Kolář", "email": "karel@fykos.cz"},
                            {"name": "Jozef Lipták", "email": "liptak.j@fykos.cz"}
                        ]
                    },
                    {
                        "id": 14,
                        "name": "Horká žárovka",
                        "task": "Danka má na stole lampu, ve které je stará žárovka s příkonem P = 60W. Ve vzdálenosti h = 40 cm pod žárovkou leží na stole počítačová myš s průřezem tvaru elipsy s hlavní poloosou délky a = 60 mm a vedlejší poloosou délky b = 30 mm. Při rozsvícení žárovky má myš pokojovou teplotu T1 = 23,0 ◦C. Jakou bude mít myš teplotu po 90 minutách svícení? Předpokládejte, že žárovka svítí izotropně do celého prostoru, η = 83 % energie dopadající na průřez myši ji ohřeje a zároveň sama myš neztrácí teplo. Tepelná kapacita myši je C = 200 J·K−1.",
                        "answer": 27,
                        "unit": "°C",
                        "points": 4,
                        "authors": [
                            {"name": "Daniela Dupkalová", "email": "daniela@fykos.cz"}
                        ]
                    },
                    {
                        "id": 15,
                        "name": "Korálek s pružinkou",
                        "task": "Korálek o hmotnosti m = 358 g jsme navlékli na rovný drát (korálek se může tedy pohybovat pouze v jednom směru). Připojíme ke korálku ideální pružinku s nulovou klidovou délkou a tuhostí k = 979 N·m−1. Druhý konec této pružinky upevníme ve vzdálenosti l = 323 mm od přímky, na které leží drát. Jaká bude perioda malých kmitů korálku okolo jeho rovnovážné polohy?",
                        "answer": 0.120,
                        "unit": "s",
                        "points": 4,
                        "authors": [
                            {"name": "Šimon Pajger", "email": "legolas@fykos.cz"}
                        ]
                    },
                    {
                        "id": 16,
                        "name": "Balada o hříšné duši",
                        "task": "Jardova FYKOSí duše se jednou zbaví svého fyzického břemene a zamíří do nebe za ptákem Fykosákem. Obtěžkána hříchy však sklouzne do pekla, kde bude uzavřena v kotli o objemu V = 666 cm3, v němž zůstane uchována za drastických podmínek T = 666 ◦C a p = 666 · 105 Pa. Zde se bude snažit zbavit molekul hříchů, aby se mohla opět vznést. Molární hmotnost hříchu je 666 g·mol−1. Kolik hříchů Jarda za své působení ve FYKOSu nabere? Hmotnost čisté duše je 21 g a její hustota se za normálních podmínek rovná 0,70 kg·m−3. Duši i hříchy považujte za ideální plyn.",
                        "answer": 2.95,
                        "unit": "kg",
                        "points": 5,
                        "authors": [
                            {"name": "Jaroslav Herman", "email": "jardah@fykos.cz"}
                        ]
                    },
                    {
                        "id": 17,
                        "name": "Takhle jste to myslel, pane Plancku?",
                        "task": "Určete Planckovo povrchové napětí. Hint: Planckovy jednotky jsou takové, které vzniknou kombinací tří základních fyzikálních konstant – gravitační konstanty G, redukované Planckovy konstanty ℏ a rychlosti světla c. Jen pro zajímavost, předpokládá se, že na Planckových škálách v mikrosvětě selhává standardní model kvantové fyziky a musí se vzít v potaz i efekty kvantové gravitace (o které zatím nic nevíme).",
                        "answer": 7.49e78,
                        "unit": "N·m⁻¹",
                        "points": 5,
                        "authors": [
                            {"name": "Jindřich Jelínek", "email": "jjelinek@fykos.cz"}
                        ]
                    },
                    {
                        "id": 18,
                        "name": "Rozžhavený odporový drát",
                        "task": "Mějme široký odporový drát, který má při teplotě T0 = 20 ◦C délku l0 = 10 m a odpor R0 = 1,23 Ω. Průchodem proudu se zahřeje na T = 100 ◦C, čímž se změní jeho rozměry i měrný odpor. Náš drát má koeficient délkové teplotní roztažnosti αl = 2,43 · 10−3 K⁻¹ a jeho teplotní součinitel měrného elektrického odporu je αR = 3,92 · 10−3 K⁻¹. Jaký bude odpor drátu při teplotě T, pokud je připojen ke zdroji tak, že se jeho rozměry mohou s teplotou měnit?",
                        "answer": 1.35,
                        "unit": "Ω",
                        "points": 5,
                        "authors": [
                            {"name": "Šimon Pajger", "email": "legolas@fykos.cz"}
                        ]
                    },
                    {
                        "id": 19,
                        "name": "Golf na kopci",
                        "task": "Hráč golfu si věřil na úder přes celé hřiště. V přímém přenosu televize se mu ale rozklepaly ruce a odpal se mu vůbec nepovedl. Míček podebral tak, že vyletěl rychlostí v = 8,0 m·s⁻¹ pod úhlem α = 80◦ vůči horizontální rovině. Odpal provedl směrem ze svahu, který má od vodorovného směru odchylku β = 10◦. Zklamaný golfista se otočil a ani se nepodíval, jak daleko od bodu odpalu míček dopadl. Spočítejte tuto vzdálenost.",
                        "answer": 2.3,
                        "unit": "m",
                        "points": 5,
                        "authors": [
                            {"name": "Jakub Smolík", "email": "jakub.smolik@fykos.cz"}
                        ]
                    },
                    {
                        "id": 20,
                        "name": "Gumička na rohu",
                        "task": "Jakou nejmenší velikost musí mít koeficient tření mezi gumičkou a tělesem, aby se nezačala stahovat, pokud se přes hrany tělesa ohýbá v bodech vzdálených a = 5,0 cm a b = 7,0 cm od rohu?",
                        "answer": 1.4,
                        "unit": "",
                        "points": 4,
                        "authors": [
                            {"name": "Jaroslav Herman", "email": "jardah@fykos.cz"}
                        ]
                    },
                    {
                        "id": 21,
                        "name": "Polohový snímač",
                        "task": "Kolikrát se zvýší vlastní frekvence tohoto oscilátoru, když jsou desky kondenzátoru ze čtvrtiny ponořeny, oproti případu, kdy je nádoba prázdná?",
                        "answer": 0.913,
                        "unit": "",
                        "points": 6,
                        "authors": [
                            {"name": "Vojtěch David", "email": "vojtech.david@fykos.cz"}
                        ]
                    },
                    {
                        "id": 22,
                        "name": "Horská cyklistika reloaded",
                        "task": "Kolik protijedoucích kol za sekundu zde Matěj v průměru potkává?",
                        "answer": 0.008,
                        "unit": "kol/s",
                        "points": 4,
                        "authors": [
                            {"name": "Matěj Mezera", "email": "m.mezera@fykos.cz"}
                        ]
                    },
                    {
                        "id": 23,
                        "name": "Jáma s kladkami",
                        "task": "Jakou velikost bude mít zrychlení, se kterým se bude pohybovat kvádr v jámě?",
                        "answer": 5.77,
                        "unit": "m/s²",
                        "points": 5,
                        "authors": [
                            {"name": "Šimon Pajger", "email": "legolas@fykos.cz"}
                        ]
                    },
                    {
                        "id": 24,
                        "name": "Efektivní lichoběžník",
                        "task": "Jakým zdrojem konstantního napětí bychom mohli původní zdroj nahradit, aby na součástce byl stejný střední výkon (určete jeho efektivní napětí)?",
                        "answer": 3.73,
                        "unit": "V",
                        "points": 5,
                        "authors": [
                            {"name": "Vojtěch David", "email": "vojtech.david@fykos.cz"}
                        ]
                    },
                    {
                        "id": 25,
                        "name": "Závod o čas",
                        "task": "Jaké mohou mít maximální zrychlení cyklisté, abyste stihli vidět posledních 30 s etapy, když vyjedete z tunelu a opět chytíte signál?",
                        "answer": 0.021,
                        "unit": "m/s^2",
                        "points": 4,
                        "authors": [
                            {"name": "Dávid Brodňanský", "email": "david.brodnansky@fykos.cz"}
                        ]
                    },
                    {
                        "id": 26,
                        "name": "Útěk přes zamrzlé jezero",
                        "task": "Jak nejméně dlouho mu bude trvat se dostat do bezpečí, pokud je koeficient tření mezi ledem a jeho botami f = 0,05 a žádné další překážky už mu nestojí v cestě?",
                        "answer": 12.4,
                        "unit": "s",
                        "points": 4,
                        "authors": [
                            {"name": "Jaroslav Herman", "email": "jardah@fykos.cz"}
                        ]
                    },
                    {
                        "id": 27,
                        "name": "Zahřejeme helium",
                        "task": "Jak velký je tento objem, pokud se dodáním tepla Q = 42 J za konstantního tlaku zvýší teplota plynu o ∆T = 2,5 K?",
                        "answer": 1.97e-2,
                        "unit": "m^3",
                        "points": 5,
                        "authors": [
                            {"name": "Šimon Pajger", "email": "legolas@fykos.cz"}
                        ]
                    },
                    {
                        "id": 28,
                        "name": "Tropické klima",
                        "task": "Na jaké hodnotě v procentech by se vlhkost v pokoji ustálila, pokud by Viktor pootevřel okno a každou minutu by se vyměnila v místnosti 3 % vzduchu?",
                        "answer": 44,
                        "unit": "%",
                        "points": 5,
                        "authors": [
                            {"name": "Daniela Dupkalová", "email": "daniela@fykos.cz"}
                        ]
                    },
                    {
                        "id": 29,
                        "name": "Jáma a kyvadlo",
                        "task": "Určete velikost rychlosti v kuličky po udělení vodorovné rychlosti.",
                        "answer": 2.4,
                        "unit": "m/s",
                        "points": 6,
                        "authors": [
                            {"name": "Jaroslav Herman", "email": "jardah@fykos.cz"}
                        ]
                    },
                    {
                        "id": 30,
                        "name": "Magnetorezistor",
                        "task": "Určete koeficient úměrnosti α magnetorezistoru.",
                        "answer": 590,
                        "unit": "Ω·T⁻¹",
                        "points": 5,
                        "authors": [
                            {"name": "Jaroslav Herman", "email": "jardah@fykos.cz"}
                        ]
                    },
                    {
                        "id": 31,
                        "name": "Kolo proti směru",
                        "task": "Jakou část z celkové doby jízdy má složka rychlosti daného bodu z nejzazšího okraje železničního kola, která je rovnoběžná se zemí, opačný směr, než jakým jede vlak?",
                        "answer": 0.10,
                        "unit": null,
                        "points": 5,
                        "authors": [
                            {"name": "Josef Knápek", "email": "josef.knapek@fykos.cz"}
                        ]
                    },
                    {
                        "id": 32,
                        "name": "Moc vysoká frekvence",
                        "task": "Ke zdroji střídavého napětí mějme do série připojený rezistor o odporu R = 11 kΩ a kondenzátor s kapacitou C = 2 μF. Pro jakou hodnotu frekvence v obvodu klesne amplituda napětí na kondenzátoru na desetinu maximální dosažitelné hodnoty?",
                        "answer": 72,
                        "unit": "Hz",
                        "points": 6,
                        "authors": [
                            {"name": "Jaroslav Herman", "email": "jardah@fykos.cz"}
                        ]
                    },
                    {
                        "id": 33,
                        "name": "Pozor, padá okno",
                        "task": "Obdélníkové okno je na své horní straně pootevřeno a jeho rovina tak svírá se svislým směrem úhel 10°. Kvůli silnému větru se ovšem uvolní pojistka, která ho držela, a okno se začne otáčet kolem spodní vodorovné osy, než narazí do zdi pod ním. Jakou úhlovou rychlostí narazí?",
                        "answer": 9.5,
                        "unit": "rad·s^(-1)",
                        "points": 7,
                        "authors": [
                            {"name": "Jaroslav Herman", "email": "jardah@fykos.cz"}
                        ]
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
                        "unit": "%",
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
                        "unit": "J",
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
                        "unit": "cyklisté za sekundu",
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
                        "unit": "m",
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
                        "unit": "J",
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
                        "unit": "cyklisté za sekundu",
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