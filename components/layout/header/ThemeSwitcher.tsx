"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {Moon, SunMedium} from "lucide-react";
import { Button } from "@/components/ui/button";


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
        <Button variant={"outline"} className={"fixed right-[60px] w-[40px] p-0 top-[20px]"} style={{
            zIndex: "100000000000"
        }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? <Moon className={"w-6 h-6 opacity-80"} /> : <SunMedium color={"white"} className={"w-6 h-6 opacity-80"} />}
        </Button>
    );
};
