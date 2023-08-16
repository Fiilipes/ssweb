"use client"

import './mentionlist.scss'

import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react'

// eslint-disable-next-line react/display-name
export const MentionList = forwardRef((props:any, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selectItem = (index:number) => {
        const item = props.items[index]?.discordUsername ? props.items[index].discordUsername : null

        if (item) {
            props.command({ id: item })
        }
    }

    const upHandler = () => {
        setSelectedIndex(((selectedIndex + props.items.length) - 1) % props.items.length)
    }

    const downHandler = () => {
        setSelectedIndex((selectedIndex + 1) % props.items.length)
    }

    const enterHandler = () => {
        selectItem(selectedIndex)
    }

    useEffect(() => setSelectedIndex(0), [props.items])

    useImperativeHandle(ref, () => ({
        onKeyDown: ({ event }:{event:any}) => {
            if (event.key === 'ArrowUp') {
                upHandler()
                return true
            }

            if (event.key === 'ArrowDown') {
                downHandler()
                return true
            }

            if (event.key === 'Enter') {
                enterHandler()
                return true
            }

            return false
        },
    }))

    return (
        <div className="items">
            {props.items.length
                ? props.items.map((item:any, index:number) => (
                    <button
                        className={`item ${index === selectedIndex ? 'is-selected' : ''}`}
                        key={index}
                        onClick={() => selectItem(index)}
                    >
                        {item.discordUsername ? item.discordUsername : "nothing"}
                    </button>
                ))
                : <div className="item">No result</div>
            }
        </div>
    )
})
