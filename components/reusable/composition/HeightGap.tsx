import React from 'react'

const HeightGap = ({height,reference}: {height:string,reference:any}) => {
    return (
        <div ref={reference} className={height}></div>
    )
}
export default HeightGap
