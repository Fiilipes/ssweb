"use client"

import React from 'react'
import {ScrollArea} from "@/components/ui/scroll-area";
import Link from "next/link";
import SignInButton from "@/components/reusable/auth/SignInButton";
import {Button} from "@/components/ui/button";
import {UserCircle2} from "lucide-react";
import {usePathname} from "next/navigation";

const SmallDevices = ({session}:{session:any}) => {

    const [open, setOpen] = React.useState(false)
    const hamburger = React.useRef(null)

    // check if path changed and if yes close hamburger menu
    React.useEffect(() => {
        setOpen(false)
        // @ts-ignore
        hamburger.current.classList.remove("open")
        document.body.style.overflow = "auto"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[usePathname()] )

    return (
        <div className={"flex lg:hidden"}>
            <div className={"z-50 flex lg:hidden"} onClick={() => {
                setOpen(!open)
                // @ts-ignore
                hamburger.current.classList.toggle("open")
                // body
                if (open) {
                    document.body.style.overflow = "auto"
                } else {
                    document.body.style.overflow = "hidden"
                }
            }}>
                <div id="nav-icon1" ref={hamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={"z-10"}>
                {open && (
                    <div className={"z-10 fixed top-0 left-0 pt-[20px] px-[20px] w-[100vw] h-[100vh] bg-white"}>
                        <div className={"w-full h-[8vh]"}>
                            <Link href={"/"} className={"font-bold 2xl:text-[1.1vw] pb-[8px]"} style={{letterSpacing: "-1px"}}>
                                Survival Server
                            </Link>
                        </div>
                        <ScrollArea className={"flex flex-col"}>
                            <div className={"flex flex-col px-2"}>
                                {
                                    !session ?
                                        <SignInButton>
                                            <Button variant={"outline"}  className={"2xl:mx-[.4vw] w-full font-bold text-[#444] 2xl:text-[.9vw]"}>
                                                <UserCircle2 className={"h-4 w-4 2xl:h-[1vw] 2xl:w-[1vw] mr-2 2xl:mr-[.8vw]"} />
                                                Staňte se členem
                                            </Button>
                                        </SignInButton>
                                        :
                                        <Link href={"/profil"}>
                                            <Button variant={"outline"} className={"2xl:px-[1vw] 2xl:py-[1.2vw] 2xl:mx-[.4vw] w-full font-bold text-[#444] 2xl:text-[.9vw]"}>
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={session?.user?.image ? session?.user?.image : ""} alt={"userImage"} className={"h-4 w-4 2xl:h-[1vw] 2xl:w-[1vw] mr-2 2xl:mr-[.6vw] rounded-full"} />
                                                Profil
                                            </Button>
                                        </Link>
                                }
                            </div>
                        </ScrollArea>
                    </div>
                )}
            </div>
        </div>
    )
}
export default SmallDevices
