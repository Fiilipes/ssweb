"use client"

import React from 'react'
import {useSession} from "next-auth/react";
import {getSS} from "@/assets/settings/firebase";
import PageTitle from "@/components/reusable/composition/PageTitle";
import pages from "@/assets/settings/content/pages";
import PageContentWrap from "@/components/layout/wrap/PageContentWrap";
import discordServers from "@/assets/settings/content/discordServers";
import ShopItems from "@/components/layout/shop/ShopItems";
import UnderConstruction from "@/components/reusable/composition/UnderConstruction";
import functions from "@/assets/settings/functions";
import { Button } from '@/components/ui/button';

import piskvorkyX from "@/assets/img/piskvorkyX.svg"
import piskvorkyO from "@/assets/img/piskvorkyO.svg"
import Image from "next/image";

const boardSize = 16
const Page = () => {

    const {data:session} = useSession()

    const [verified, setVerified] = React.useState(null)
    const [board, setBoard] = React.useState([[]])

    React.useEffect(
        () => {
            if (session) {
                getSS(["users"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Survival Server").then(verified => setVerified(verified))



                })
            }
        }, [session]
    )

    React.useEffect(
        () => {
            let myNewBoard = []
            for (let i = 0; i < boardSize; i++) {
                myNewBoard[i] = []
                for (let j = 0; j < boardSize; j++) {
                    // @ts-ignore
                    myNewBoard[i][j] = null
                }
            }
            setBoard(myNewBoard)
        }, []
    )

    return (
        <>
            <div className=" flex-col flex">

                <div className="flex-1 space-y-4 p-8 pt-6">
                    <PageTitle status={verified} title={"Piškvorky"} description={"Piškvorky hra"} buttons={[]} />
                    <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>
                        {
                            /*16 x 16 square table*/
                        }

                        <table>
                            <tbody>
                                {
                                    board.map((row, i) =>
                                        <tr key={i}>
                                            {
                                                row.map((cell, j) =>
                                                    <td onClick={(e) => {
                                                        if (!cell) {
                                                            setBoard((prevBoard) => {
                                                                let newBoard = [...prevBoard]
                                                                // @ts-ignore
                                                                newBoard[i][j] = Math.random() > 0.5 ? "red" : "blue"
                                                                return newBoard
                                                            })
                                                        }
                                                    }} key={j} className={"m-0  transition-all duration-50 transform hover:scale-[1.5] bg-transparent zindexchanger relative hover:shadow-[0_20px_20px_20px_rgba(0,0,0,1)]"} >
                                                        <div className="w-8 max-w-8 min-w-8 max-h-8 min-h-8 overflow-hidden flex flex-row items-center justify-center rounded-sm h-8 border border-black  bg-white " >


                                                            {
                                                                cell ?
                                                                    cell === "red" ?
                                                                    <Image src={piskvorkyX} alt="X"  className={"w-[80%] h-[80%]"} />
                                                                    :
                                                                    <Image src={piskvorkyO} alt="O"  className={"w-[80%] h-[80%]"} />
                                                                :
                                                                null
                                                            }


                                                        </div>
                                                    </td>
                                                )
                                            }
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        {/*<Image src={piskvorkyX} alt="X"  className={"w-[80%] h-[80%]"} />*/}
                        {/*<Image src={piskvorkyO} alt="O"  className={"w-[80%] h-[80%]"} />*/}
                    </PageContentWrap>

                </div>
            </div>
        </>
    )
}
export default Page
