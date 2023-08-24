import {Metadata} from "next";

import React from "react";

import BasicWrap from "@/components/layout/wrap/BasicWrap";

export const metadata: Metadata = {
    title: 'Váš Status | Soutěže Tryhard',
    description: 'Váš status na Soutěže Tryhard',
}

export default async function Layout({children,}: { children: React.ReactNode }) {

    return (
        <>
            {children}
        </>
    )

}