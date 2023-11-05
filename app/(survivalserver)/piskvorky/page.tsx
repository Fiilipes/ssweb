"use client"

import React, {useEffect} from 'react'
import {useSession} from "next-auth/react";
import db, {getSS} from "@/assets/settings/firebase";
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
import searchingForPlayerImg from "@/assets/img/searchingForPlayer.svg"
import reaction__omg from "@/assets/img/reactions/omg.svg"


import Image from "next/image";
import {onSnapshot, setDoc} from 'firebase/firestore';
import {doc} from "@firebase/firestore";
import {Hourglass, MinusCircle, PlusCircle, Radio, Sticker} from 'lucide-react';
import {Card} from "@/components/ui/card";
import UserMention from "@/components/reusable/profil/UserMention";
import {Separator} from "@/components/ui/separator";
import {ScrollArea} from "@/components/ui/scroll-area";
import SideBar from "@/components/layout/piskvorky/SideBar";


let timeout: any = null
const boardSize = 16
const Page = () => {
    useEffect(
        () => {
            (
                async () => {
                    // @ts-ignore
                    const LocomotiveScroll = (await import('locomotive-scroll')).default
                    const locomotiveScroll = new LocomotiveScroll();
                }
            )()
        },[]
    )
    const {data:session} = useSession()

    const [verified, setVerified] = React.useState(null)
    const [board, setBoard] = React.useState([[]])
    const [currentUser, setCurrentUser] = React.useState(null)
    const [currentGame, setCurrentGame] = React.useState(null)
    const [piskvorky, setPiskvorky] = React.useState(null)
    const [gameState, setGameState] = React.useState("none")

    React.useEffect(
        () => {
            if (session) {
                getSS(["users", "piskvorky"]).then((res: any) => {

                    // @ts-ignore
                    functions.verifyUserById(res["users"],session.id,"Survival Server").then(verified => setVerified(verified))

                    // @ts-ignore
                    setCurrentUser(res["users"].list.find(user => user.discordID === session.id))
                    setPiskvorky(res["piskvorky"])
                    // check if player is in queue or game or none and set the state
                    // @ts-ignore
                    const queue = res["piskvorky"]["queue"]
                    // @ts-ignore
                    const games = res["piskvorky"]["games"]
                    // @ts-ignore
                    if (queue.find(user => user.discordID === session.id)) {
                        setGameState("waiting")
                        // @ts-ignore
                    } else if (games.find(game => game?.player1?.user.discordID === session.id || game?.player2?.user.discordID === session.id)) {
                        setGameState("playing")
                    } else {
                        setGameState("none")
                    }

                })
            }
        }, [session]
    )

    React.useEffect(
        () => {
            let myNewBoard = {}
            for (let i = 0; i < boardSize; i++) {
                // @ts-ignore
                myNewBoard[`${i}`] = {}
                for (let j = 0; j < boardSize; j++) {
                    // @ts-ignore
                    myNewBoard[`${i}`][`${j}`] = null
                }
            }
            console.log(myNewBoard)
            // @ts-ignore
            setBoard(myNewBoard)

            onSnapshot(doc(db, "ssbot", "piskvorky"), (doc) => {
                // check if the current user is in the queue or in the game and set the state
                // @ts-ignore
                const queue = doc.data()["queue"]
                // @ts-ignore
                const games = doc.data()["games"]
                // @ts-ignore
                setPiskvorky(doc.data())
                if (currentUser) {
                    // @ts-ignore
                    if (queue.find(user => user.discordID === currentUser?.discordID)) {
                        setGameState("waiting")
                        // @ts-ignore
                    } else if (games.find(game => game?.player1?.user.discordID === currentUser?.discordID || game?.player2?.user.discordID === currentUser?.discordID)) {
                        setGameState("playing")
                        // @ts-ignore
                        setCurrentGame(games.find(game => game?.player1?.user.discordID === currentUser?.discordID || game?.player2?.user.discordID === currentUser?.discordID))
                        // @ts-ignore
                        setBoard(games.find(game => game?.player1?.user.discordID === currentUser?.discordID || game?.player2?.user.discordID === currentUser?.discordID)["board"])
                    } else {
                        setGameState("none")
                    }
                }
            })
        }, [currentUser]
    )

    const placeSymbol = (row: number, cell: number) => {
        // @ts-ignore
        const currentPlayerObject = currentGame?.player1?.user.discordID === currentUser?.discordID ? currentGame?.player1 : currentGame?.player2

        // @ts-ignore
        if (!board[row][cell] && currentGame["turn"] === currentPlayerObject["symbol"] ) {
            // Update the data object when a cell is clicked
            const newData = {...board};
            // @ts-ignore
            newData[row][cell] = currentPlayerObject["symbol"];
            // make the other player play
            // @ts-ignore
            const newTurn = currentGame["turn"] === currentGame?.player1?.symbol ? currentGame?.player2?.symbol : currentGame?.player1?.symbol
            console.log({
                type: "move",
                row: row,
                cell: cell,
                symbol: currentPlayerObject["symbol"],
                turn: newTurn,
                time: new Date(),
                player: currentPlayerObject["user"]
            })
            // @ts-ignore
            currentGame["turn"] = newTurn
            setBoard(newData);
            // @ts-ignore
            let updatedGame = {...currentGame}
            updatedGame["board"] = newData
            updatedGame.activity.push(
                {
                    type: "move",
                    row: row,
                    cell: cell,
                    symbol: currentPlayerObject["symbol"],
                    turn: newTurn,
                    time: new Date(),
                    player: currentPlayerObject["user"]
                }
            )
            // replace the current game with and update one in the piskvorky
            // @ts-ignore
            const games = piskvorky["games"]
            // @ts-ignore
            games.splice(games.findIndex(game => game?.player1?.user.discordID === currentUser?.discordID || game?.player2?.user.discordID === currentUser?.discordID), 1, updatedGame)
            // @ts-ignore
            setDoc(doc(db, "ssbot", "piskvorky"), {queue: piskvorky["queue"], games: games}).then(() => {
                console.log("Document successfully written!");
            })
        }
    }

    const endGame = () => {
        // @ts-ignore
        const games = piskvorky["games"]
        // @ts-ignore
        games.splice(games.findIndex(game => game?.player1?.user.discordID === currentUser?.discordID || game?.player2?.user.discordID === currentUser?.discordID), 1)
        // @ts-ignore
        setDoc(doc(db, "ssbot", "piskvorky"), {queue: piskvorky["queue"], games: games}).then(() => {
            console.log("Document successfully written!");
        }) }

    const reactionRef = React.useRef<HTMLDivElement>(null)

    return (
        <>
            <div className="flex-row flex w-full">
                {(gameState === "waiting" || gameState === "none") && <SideBar />}

                <div className="space-y-4 p-8 pt-[50px] w-full">
                    {/*<PageTitle status={verified} title={"Piškvorky"} description={"Piškvorky hra"} buttons={[]} />*/}
                    <PageContentWrap status={verified} server={discordServers.find(server => server.name === "Survival Server")}>



                        {
                            gameState !== "playing" ? <div>
                                <h1 className={"w-[60vw] text-[35px] font-medium specialfonttest"}>
                                    Porovnejte vaše schopnosti v <span className={"specialfont2 text-[50px]"}>
                            Piškvorkách
                        </span> s ostatními hráči!
                                    {
                                        gameState === "none" ? <Button className={"h-full ml-8 rounded-full my-0"} onClick={() => {
                                            getSS(["piskvorky"]).then((res: any) => {
                                                const queue = res["piskvorky"]["queue"]
                                                const games = res["piskvorky"]["games"]

                                                console.log(queue, games)
                                                // @ts-ignore
                                                if (!queue.find(user => user.discordID === session?.id) && !games.find(game => game?.player1?.user.discordID === session?.id || game?.player2?.user.discordID === session?.id)) {
                                                    if (queue.length > 0) {
                                                        // remove the first element from the queue
                                                        const opponent = queue.shift()
                                                        console.log(opponent)

                                                        const symbols = ["X", "O"]
                                                        // randomise the position of the symbols
                                                        const randomisedSymbols = symbols.sort(() => Math.random() - 0.5);
                                                        const startingSymbol = Math.random() > 0.5 ? randomisedSymbols[0] : randomisedSymbols[1]
                                                            // random number between 0 and 1

                                                        // create new game
                                                        games.push({
                                                            player1: {
                                                                user: opponent,
                                                                symbol: symbols[0],

                                                            },
                                                            player2: {
                                                                user: currentUser,
                                                                symbol: symbols[1],
                                                            },
                                                            board: board,
                                                            turn: startingSymbol,
                                                            activity: [],
                                                            startDate: new Date(),
                                                            endDate: null
                                                        })
                                                        setGameState("playing")
                                                    } else {
                                                        queue.push(currentUser)
                                                        setGameState("waiting")
                                                    }
                                                    console.log(queue, games)
                                                    setDoc(doc(db, "ssbot", "piskvorky"), {queue: queue, games: games}).then(() => {
                                                        console.log("Document successfully written!");
                                                    })

                                                }


                                            })
                                        }} >
                                            <PlusCircle className="w-4 h-4 mr-2"  />
                                            Join the queue
                                        </Button> :
                                            <Button className={"h-full ml-8 rounded-full my-0"} onClick={() => {
                                            getSS(["piskvorky"]).then((res: any) => {
                                                const queue = res["piskvorky"]["queue"]
                                                const games = res["piskvorky"]["games"]

                                                console.log(queue, games)

                                                setGameState("none")

                                                // remove the user from the queue if he is in it and the setDoc if yes
                                                // @ts-ignore
                                                if (queue.find(user => user.discordID === session?.id)) {
                                                    // @ts-ignore
                                                    queue.splice(queue.findIndex(user => user.discordID === session?.id), 1)
                                                    setDoc(doc(db, "ssbot", "piskvorky"), {queue: queue, games: games}).then(() => {
                                                        console.log("Document successfully written!");
                                                    })
                                                }


                                            })
                                        }} >
                                            <MinusCircle className="w-4 h-4 mr-2"  />
                                            Leave the queue
                                        </Button>
                                    }
                                </h1>
                                {
                                    piskvorky && // you are not the one searching for the game
                                    // @ts-ignore
                                    piskvorky["queue"].length > 0 && // there is someone in the queue
                                    // @ts-ignore
                                    piskvorky["queue"][0]["discordID"] !== currentUser?.discordID


                                    && <Card className={"w-full rounded-full flex flex-row items-center mt-16"}  style={
                                        {
                                            backgroundImage: `linear-gradient(310deg, #fff 20%, rgba(50, 140,200,0.3) 100%)`,
                                            backdropFilter: "blur(100px)",
                                        }
                                    }>
                                        <Image src={searchingForPlayerImg} className={"w-[200px] select-none h-[200px]"}  alt={"something"}/>
                                        <div>
                                            <div className={"flex flex-col text-[16px] font-medium"}>
                                            <span className={"text-[26px]"}>
                                                {
                                                    // if there is some player waiting in the queue show him here
                                                    // @ts-ignore
                                                    piskvorky["queue"].length > 0 ? <UserMention user={piskvorky["queue"][0]} /> : null
                                                }
                                            </span>
                                                hledá hráče, se kterým by mohl hrát
                                            </div>
                                        </div>

                                    </Card>
                                }

                            </div> : <div>
                                <Card className={"flex w-full p-8 flex-col"}>
                                    {
                                        currentGame && <div className={"flex flex-row items-center justify-center mb-4"}>
                                            <div className={"grid grid-cols-3 text-center place-items-center items-center"}>
                                                <div className={"flex flex-row items-center"}>
                                                    {
                                                        // @ts-ignore
                                                        currentGame?.player1?.symbol === "X" ?
                                                            <Image src={piskvorkyX} alt="X" className={"w-[80%] h-[80%] mr-8"} />
                                                            :
                                                            <Image src={piskvorkyO} alt="O" className={"w-[80%] h-[80%]  mr-8"} />
                                                    }
                                                    {/*@ts-ignore*/}
                                                    <UserMention user={currentGame?.player1?.user} />

                                                </div>
                                                <div className={"specialfont2 text-[24px]"}>
                                                    VS
                                                </div>
                                                  <div className={"flex flex-row items-center"}>
                                                      {/*@ts-ignore*/}
                                                      <UserMention user={currentGame?.player2?.user} />

                                                      {
                                                          // @ts-ignore
                                                          currentGame?.player2?.symbol === "X" ?
                                                            <Image src={piskvorkyX} alt="X" className={"w-[80%] h-[80%] ml-8"} />
                                                            :
                                                            <Image src={piskvorkyO} alt="O" className={"w-[80%] h-[80%] ml-8"} />
                                                    }
                                                  </div>
                                            </div>
                                        </div>
                                    }
                                    <div className={"flex flex-row"}>
                                        <div>
                                            <table className={"select-none"}>
                                                <tbody>
                                                {
                                                    Object.keys(board).map((rowKey, i) => (
                                                        <tr key={i}>
                                                            {/*@ts-ignore*/}
                                                            {Object.keys(board[rowKey]).map((cellKey, j) => (
                                                                <td key={j} onClick={() => placeSymbol(
                                                                    // @ts-ignore
                                                                    parseInt(rowKey),
                                                                    // @ts-ignore
                                                                    parseInt(cellKey)
                                                                )} className={"w-fit h-fit p-0 m-0"} >
                                                                    <div className="w-8 max-w-8 min-w-8 max-h-8 min-h-8 overflow-hidden flex flex-row items-center justify-center rounded-sm h-8 border border-black bg-white m-0">
                                                                        {
                                                                            // @ts-ignore
                                                                            board[rowKey][cellKey] ? board[rowKey][cellKey] === "X" ?
                                                                                    <Image src={piskvorkyX} alt="X" className={"w-[80%] h-[80%]"} />
                                                                                    :
                                                                                    <Image src={piskvorkyO} alt="O" className={"w-[80%] h-[80%]"} />
                                                                                :
                                                                                null
                                                                        }
                                                                    </div>
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className={"w-full pl-8"}>
                                            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex rounded-sm">
                                                <div className="absolute inset-0 bg-zinc-900 rounded-sm" />
                                                {/*@ts-ignore*/}
                                                <Image ref={reactionRef} src={reaction__omg} alt="Omg" className={"w-[150px] h-[150px] z-30 fixed transition-all duration-500 select-none opacity-0 pointer-events-none"} />
                                                <div className="relative z-20 flex items-center text-lg font-medium">
                                                    <Radio className="animate-pulse w-6 h-6 mr-2" />
                                                    Živý průběh hry
                                                </div>
                                                <div className={"relative z-20 text-md mt-4 font-medium"}>
                                                    {
                                                    // Jste na tahu / Čekáte na tah
                                                        // @ts-ignore
                                                        currentGame?.turn === currentGame?.player1?.symbol ? currentGame?.player1?.user.discordID === currentUser?.discordID ?
                                                            "Jste na tahu"
                                                            :
                                                            "Čekáte na tah soupeře"
                                                        :
                                                            // @ts-ignore
                                                            currentGame?.player2?.user.discordID === currentUser?.discordID ?
                                                            "Jste na tahu"
                                                            :
                                                            "Čekáte na tah soupeře"
                                                }
                                                </div>
                                                <Separator className={"relative z-20 mt-4"} />
                                                <ScrollArea className={"scrollbar-hidden relative text-md mt-4 z-20 scroll-hidden"}>
                                                    hello
                                                </ScrollArea>
                                                <div className="relative z-20 mt-auto">
                                                    <blockquote className="space-y-2">
                                                        <p className="text-lg">
                                                            &ldquo;Love is a game
                                                            of tic-tac-toe,
                                                            constantly waiting
                                                            for the next x or o&rdquo;
                                                        </p>
                                                        <footer className="text-sm">Lang Leav</footer>
                                                    </blockquote>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={"flex flex-row items-center py-8"}>
                                        <Button onClick={endGame} className={"rounded-full flex flex-row items-center mr-4"}>
                                            <MinusCircle className="w-4 h-4 mr-2"  />
                                            Odejít z hry
                                        </Button>
                                        <Button variant={"outline"} className={"rounded-full flex flex-row items-center mr-4"}>
                                            <Hourglass className="w-4 h-4 mr-2"  />
                                            Nastavit časovač
                                        </Button>
                                        <Button variant={"outline"} className={"rounded-full flex flex-row items-center mr-4"} onClick={() => {
                                            // @ts-ignore
                                            timeout && clearTimeout(timeout)
                                            // scale it, rotate it randomly, margin left randomly, margin top randomly, size randomly for 2s
                                            // @ts-ignore
                                            const reaction = reactionRef.current
                                            // @ts-ignore
                                            reaction.style.transform = `scale(${Math.random()  + 1}) rotate(${Math.random() * 360}deg)`
                                            // @ts-ignore
                                            reaction.style.marginLeft = `${Math.random() * 300}px`
                                            // @ts-ignore
                                            reaction.style.marginTop = `${Math.random() * 300}px`
                                            // @ts-ignore
                                            reaction.style.width = `${Math.random() * 100 + 200}px`
                                            // @ts-ignore
                                            reaction.style.height = `${Math.random() * 100 + 200}px`
                                            // @ts-ignore
                                            reaction.style.opacity = 1
                                            timeout = setTimeout(() => {
                                                // @ts-ignore
                                                reaction.style.opacity = 0
                                            }, 2000)
                                        }}>
                                            <Sticker className="w-4 h-4 mr-2"  />
                                            Reakce
                                        </Button>
                                    </div>
                                    <div className={"grid grid-cols-2 w-full"}>
                                        <div>
                                            <div className={"specialfont2 text-[28px]"}>
                                                Statistiky
                                            </div>
                                        </div>
                                        <div>
                                            <div className={"specialfont2 text-[28px]"}>
                                                Chat
                                            </div>
                                        </div>
                                        {/*<Card className={"flex bg-[#222] w-full h-[500px] flex-col"}>*/}
                                        {/*    <div>*/}
                                        {/*        {*/}
                                        {/*            currentGame?.player1?.user.discordUsername*/}
                                        {/*        }*/}
                                        {/*        {*/}
                                        {/*            currentGame?.player1?.symbol === "X" ?*/}
                                        {/*                <Image src={piskvorkyX} alt="X" className={"w-16 h-16"} />*/}
                                        {/*                :*/}
                                        {/*                <Image src={piskvorkyO} alt="O" className={"w-16 h-16"} />*/}
                                        {/*        }*/}
                                        {/*    </div>*/}
                                        {/*    <div>*/}
                                        {/*        {*/}
                                        {/*            currentGame?.player2?.user.discordUsername*/}
                                        {/*        }*/}
                                        {/*        {*/}
                                        {/*            currentGame?.player2?.symbol === "X" ?*/}
                                        {/*                <Image src={piskvorkyX} alt="X" className={"w-16 h-16"} />*/}
                                        {/*                :*/}
                                        {/*                <Image src={piskvorkyO} alt="O" className={"w-16 h-16"} />*/}
                                        {/*        }*/}
                                        {/*    </div>*/}
                                        {/*</Card>*/}
                                    </div>

                                </Card>

                            </div>
                        }



                        {/*<Image src={piskvorkyX} alt="X"  className={"w-[80%] h-[80%]"} />*/}
                        {/*<Image src={piskvorkyO} alt="O"  className={"w-[80%] h-[80%]"} />*/}
                    </PageContentWrap>

                </div>
            </div>
        </>
    )
}
export default Page

