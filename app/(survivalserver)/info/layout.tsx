import {Metadata} from "next";

import React from "react";

import BasicWrap from "@/components/layout/wrap/BasicWrap";

export const metadata: Metadata = {
    title: 'Informace | Survival Server',
    description: 'Survival Server Info',
}

export default async function Layout({children,}: { children: React.ReactNode }) {

    return (
        <BasicWrap>
            {children}
        </BasicWrap>
    )

}