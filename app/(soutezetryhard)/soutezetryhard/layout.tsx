import {Metadata} from "next";
import React from "react";
import SideBar from "@/components/layout/soutezetryhard/SideBar";
export const metadata: Metadata = {
    title: 'Soutěže Tryhard',
    description: 'Soutěže Tryhard web',
}


export default async function Layout({
                                         children,
                                     }: {
    children: React.ReactNode
}) {


    return (
        <div>

            <div className={"w-[90%] mx-auto flex flex-col pt-8"}>


                <div className={"flex flex-row w-full"}>
                    <SideBar />

                    <div className={"w-full"}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}