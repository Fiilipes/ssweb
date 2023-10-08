import {Metadata} from "next";

import React from "react";

// @ts-ignore
import BasicWrap from "@/components/layout/wrap/BasicWrap";


export const metadata: Metadata = {
    title: 'Piškvorky | Survival Server',
    description: 'Survival Server Piškvorky',
}

export default async function Layout({children,}: { children: React.ReactNode }) {

    return (
        <BasicWrap>
            {children}
        </BasicWrap>
    )

}