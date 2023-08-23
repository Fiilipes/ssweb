import {Metadata} from "next";

import React from "react";

import BasicWrap from "@/components/layout/wrap/BasicWrap";
import SideBar from "@/components/layout/ms/SideBar";

export const metadata: Metadata = {
    title: 'Módovaný Survival',
    description: 'Minecraft server s módy',
}

export default async function Layout({children,}: { children: React.ReactNode }) {

    return (
        <BasicWrap>

            <div className={"flex flex-row w-full"}>
                <SideBar />

                <div className={"w-full"}>
                    {children}
                </div>
            </div>

        </BasicWrap>
    )

}