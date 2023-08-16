import { ReactRenderer } from '@tiptap/react'
import tippy from 'tippy.js'

import { MentionList } from './MentionList'
import {getSS} from "@/assets/settings/firebase";

const myUsers = {
    "users": [],
    "timestamp": 0
}

const timeStampFifteenMinutes = 900000;

export default  {
    items: async ({query}: { query: any }) => {
        if (myUsers.timestamp + timeStampFifteenMinutes < new Date().getTime()) {
            const res = await getSS(["users"]);
            const users = res["users"].users.list.map(item => {
                return {
                    discordUsername: item.discordUsername
                };
            });
            console.log("loading from database")
            myUsers.users = users;
            // currentTimestamp
            myUsers.timestamp = new Date().getTime();
        }

        // @ts-ignore
        return myUsers.users.filter(item_1 => item_1.discordUsername.toLowerCase().startsWith(query.toLowerCase())).slice(0, 5);


    },

    render: () => {
        let reactRenderer: any
        let popup: any

        return {
            onStart: (props:any) => {
                reactRenderer = new ReactRenderer(MentionList, {
                    props,
                    editor: props.editor,
                })

                if (!props.clientRect) {
                    return
                }

                popup = tippy('body', {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: reactRenderer.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: 'manual',
                    placement: 'bottom-start',
                })
            },

            onUpdate(props:any) {
                reactRenderer.updateProps(props)

                if (!props.clientRect) {
                    return
                }

                popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                })
            },

            onKeyDown(props:any) {
                if (props.event.key === 'Escape') {
                    popup[0].hide()

                    return true
                }

                return reactRenderer.ref?.onKeyDown(props)
            },

            onExit() {
                    popup[0].destroy()
                    reactRenderer.destroy()

            },
        }
    },
}
