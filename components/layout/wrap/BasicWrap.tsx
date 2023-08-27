import React from 'react'

const BasicWrap = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={"w-[100%] sm:w-[95%] md:w-[90%] mx-auto flex flex-col "}>
            {children}
        </div>
    )
}
export default BasicWrap
