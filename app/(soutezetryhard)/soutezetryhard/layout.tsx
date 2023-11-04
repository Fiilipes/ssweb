import {Metadata} from "next";
import React from "react";
import SideBar from "@/components/layout/soutezetryhard/SideBar";
import BasicWrap from "@/components/layout/wrap/BasicWrap";
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
            <BasicWrap>

                <div className={"flex flex-row w-full "}>
                    <SideBar />

                    <div className={"w-full transition-all duration-500"}>
                        {children}
                    </div>
                </div>

            </BasicWrap>
        </div>
    )
}