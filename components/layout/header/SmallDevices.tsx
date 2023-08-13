"use client"

import React from 'react'

const SmallDevices = () => {

    const [open, setOpen] = React.useState(false)

    return (
        <div className={"flex lg:hidden"}>
            <div className={"z-50 flex lg:hidden"} onClick={() => setOpen(!open)}>
                {
                    open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="#000"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="#000"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    )

                }
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
