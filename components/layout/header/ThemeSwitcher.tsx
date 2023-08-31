"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {Moon, SunMedium} from "lucide-react";


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }


    return (
        <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? <Moon className={"cursor-pointer w-4 h-4 mr-2 lg:mr-[.8vw] mt-[1vw] lg:w-[1vw] lg:h-[1vw]"} /> : <SunMedium color={"white"} className={"w-4 h-4  mr-2 lg:mr-[.8vw] mt-[1vw] lg:w-[1vw] lg:h-[1vw]"} />}
        </div>
    );
};
