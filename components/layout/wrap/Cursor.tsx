"use client"

import React, {useEffect} from 'react'
import {motion, useMotionValue, useSpring} from "framer-motion"


const Cursor = () => {
    
    const [isHovered, setIsHovered] = React.useState(false)

    const cursorSize = isHovered ? 60 : 20;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }
    
    const smoothOptions = {damping:20, swiftness: 300, mass: 0.5}
    const smoothMouse = {
        x: useSpring(mouse.x,smoothOptions),
        y: useSpring(mouse.y,smoothOptions)
    }

    const manageMouseMove = (e: MouseEvent) => {
        const {clientX, clientY} = e;
        mouse.x.set(clientX-cursorSize/2);
        mouse.y.set(clientY-cursorSize/2);
    }

    const manageMouseOver = () => {
        setIsHovered(true)
    }
    
    const manageMouseLeave = () => {
        setIsHovered(false)
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        // add listener to every a tag
        const aTags = document.querySelectorAll("a");
        // all tags that arre buttons
        const buttonTags = document.querySelectorAll("button");

        // combine them
        // @ts-ignore
        const allTags = [...aTags, ...buttonTags]
        allTags.forEach(a => {
            if (a.closest("form") === null) {
                a.addEventListener("mouseover", manageMouseOver)
                a.addEventListener("mouseleave", manageMouseLeave)
            }


        })
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
            allTags.forEach(a => {
                a.removeEventListener("mouseover", manageMouseOver)
                a.removeEventListener("mouseleave", manageMouseLeave)

            })
        }
    });

    return (
        <motion.div className={"cursor"} style={{
            left: smoothMouse.x,
            top: smoothMouse.y
        }} animate={{
            width: cursorSize,
            height: cursorSize,
        }}>

        </motion.div>
    )
}
export default Cursor
