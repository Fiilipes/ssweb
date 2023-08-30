import {Metadata} from "next";

import React from "react";

import BasicWrap from "@/components/layout/wrap/BasicWrap";

export const metadata: Metadata = {
    title: 'Notes',
    description: 'Zápisy, testy a procvičování od Survival Serveru & Dokumentů',
}

export default async function Layout({children,}: { children: React.ReactNode }) {

    return (
        <>
            {children}
        </>
    )

}