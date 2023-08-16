"use client"

import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from 'react'
import './emojilist.scss'

// eslint-disable-next-line react/display-name
export const EmojiList = forwardRef((props: {items:any, command: any}, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selectItem = (index:number) => {
        const item = props.items[index]

        if (item) {
            props.command({ name: item.name })
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

    useImperativeHandle(ref, () => {
        return {
            onKeyDown: (x:any) => {
                if (x.event.key === 'ArrowUp') {
                    upHandler()
                    return true
                }

                if (x.event.key === 'ArrowDown') {
                    downHandler()
                    return true
                }

                if (x.event.key === 'Enter') {
                    enterHandler()
                    return true
                }

                return false
            },
        }
    }, [upHandler, downHandler, enterHandler])

    return (
        <div className="items">
            {props.items.map((item: any, index: number) => (
                <button
                    className={`item ${index === selectedIndex ? 'is-selected' : ''}`}
                    key={index}
                    onClick={() => selectItem(index)}
                >
                    { item.fallbackImage
                        ? <img src={item.fallbackImage} />
                        : item.emoji
                    }
                    :{item.name}:
                </button>
            ))}
        </div>
    )
})
