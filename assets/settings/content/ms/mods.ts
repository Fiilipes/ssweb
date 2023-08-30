const modsArray = [
    {
        name: "Alex's Mobs",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/alexs-mobs",
        description: "Přidává 80+ nových mobů"
    },
    {
        name: "AutoRegLib",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/autoreglib",
        description: "Zrychluje běh ostatních módů"
    },
    {
        name: "Blueprint",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/blueprint",
        description: "Zrychluje běh ostatních módů"
    },
    {
        name: "Bookshelf",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/bookshelf",
        description: "Zrychluje běh ostatních módů"
    },
    {
        name: "Canary",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/canary",
        description: "Výrazně zlepšuje běh serveru"
    },
    {
        name: "Citadel",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/citadel",
        description: "Zrychluje běh ostatních módů"
    },
    {
        name: "CorgiLib",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/corgilib",
        description: "Zrychluje běh ostatních módů"
    },
    {
        name: "Create",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/create",
        description: "Přidává nástroje a bloky na stavbu a dekoraci"
    },
    {
        name: "Deeper and Darker",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/deeperdarker",
        description: "Nová dimenze založená na téma Wardena a deep dark biomu"
    },
    {
        name: "Enchantment Descriptions",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions",
        description: "Přidává popis k enchantům na nástrojích / armoru"
    },
    {
        name: "Farmer's Delight",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/farmers-delight",
        description: "Rozšiřuje obzory ve farmaření a vaření"
    },
    {
        name: "Galosphere",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/galosphere",
        description: "Upravuje jeskyně novými biomy, itemy atd."
    },
    {
        name: "GeckoLib",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/geckolib",
        description: "Vylepšuje animace ostatních módů"
    },
    {
        name: "Just Enough Items (JEI)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/jei",
        description: "Seznam všech itemů a jejich receptů"
    },
    {
        name: "Moonlight Lib",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/selene",
        description: "Vylepšuje animace ostatních módů"
    },
    {
        name: "Oh The Biomes You'll Go",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go",
        description: "Přidává 80 nových biomů"
    },
    {
        name: "Quark",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/quark",
        description: "Spoustu menších doplňků do hry"
    },
    {
        name: "Savage & Ravage",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/savage-and-ravage",
        description: "Vylepšuje vše spojené s pillagery"
    },
    {
        name: "Smarter Farmers (farmers replant)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/smarter-farmers-farmers-replant",
        description: "Dělá farmáře (villagery) o něco méně hloupé"
    },
    {
        name: "Stalwart Dungeons",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/stalwart-dungeons",
        description: "Přidává nové dungeony a bossy"
    },
    {
        name: "Storage Drawers",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/storage-drawers",
        description: "Nová možnost uskladnění itemů"
    },
    {
        name: "Structure Gel API",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/structure-gel-api",
        description: "Usnadňuje chod ostatních módů"
    },
    {
        name: "TerraBlender (Forge)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/terrablender",
        description: "Usnadňuje chod ostatních módů"
    },
    {
        name: "The Conjurer",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/the-conjurer",
        description: "Přidává kouzelníka"
    },
    {
        name: "YUNG's API (Forge)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/yungs-api",
        description: "Usnadňuje chod ostatních yungs módů"
    },
    {
        name: "YUNG's Better Desert Temples (Forge)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-desert-temples",
        description: "Vylepšuje pyramidy"
    },
    {
        name: "YUNG's Better Dungeons (Forge)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-dungeons",
        description: "Vylepšuje dungeony"
    },
    {
        name: "YUNG's Better Mineshafts (Forge)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-mineshafts-forge",
        description: "Vylepšuje mineshafty"
    },
    {
        name: "YUNG's Better Ocean Monuments (Forge)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-ocean-monuments",
        description: "Vylepšuje ocean monumenty"
    },
    {
        name: "YUNG's Better Strongholds (Forge)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-strongholds",
        description: "Vylepšuje strongholdy"
    },
    {
        name: "YUNG's Better Witch Huts (Forge)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-witch-huts",
        description: "Vylepšuje witch hutky"
    },
    {
        name: "YUNG's Bridges (Forge)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/yungs-bridges",
        description: "Přidává mosty"
    },
    {
        name: "Wildfire's Female Gender Mod (Forge)",
        modLink: "https://www.curseforge.com/minecraft/mc-mods/female-gender-forge",
        description: "Přidává ženy ❤️"
    }
];
export default modsArray;