import React from 'react'

const BasicWrap = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={"w-[90%] mx-auto flex flex-col pt-8"}>
            {children}
        </div>
    )
}
export default BasicWrap
