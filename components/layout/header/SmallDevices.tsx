"use client"

import React from 'react'

const SmallDevices = () => {

    const [open, setOpen] = React.useState(false)
    const hamburger = React.useRef(null)

    return (
        <div className={"flex lg:hidden"}>
            <div className={"z-50 flex lg:hidden"} onClick={() => {
                setOpen(!open)
                // @ts-ignore
                hamburger.current.classList.toggle("open")
            }}>
                <div id="nav-icon1" ref={hamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={"z-10"}>
                {open && (
                    <div className={"z-10 fixed top-0 left-0 w-[100vw] h-[100vh] bg-white"}>
                        <div>link 1</div>
                        <div>link 2</div>
                        <div>link 3</div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default SmallDevices
