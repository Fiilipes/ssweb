import db, {getSS} from "./firebase";
import {doc, setDoc} from "@firebase/firestore";
import {Competition, CompetitionValues,CompetitionFirebase, User} from "./interfaces";
import {ReactNodeViewRenderer, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {Mathematics} from "@tiptap-pro/extension-mathematics";
import CharacterCount from "@tiptap/extension-character-count";
import Code from "@tiptap/extension-code";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import CodeBlockComponent from "@/components/notes/editor/editorextensions/codeblock/CodeBlockComponent";
import {lowlight} from "lowlight";
import {ColorHighlighter} from "@/components/notes/editor/editorextensions/clevereditor/colorhighlighter";
import Document from "@tiptap/extension-document";
import Emoji, {gitHubEmojis} from "@tiptap-pro/extension-emoji";
import emojiSuggestion from "@/components/notes/editor/editorextensions/emojis/suggestion";
import {Mention} from "@tiptap/extension-mention";
import mentionSuggestion from "@/components/notes/editor/editorextensions/mentions/suggestion";
import {SmilieReplacer} from "@/components/notes/editor/editorextensions/clevereditor/smilereplacer";
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";
// @ts-ignore
import TurndownService from "turndown";



class Functions {
    createCompetition (values: CompetitionValues, competitionUsers: User[] | null, competitionLinks: {label:string,link:string}[] | null, createChannel: boolean, redirect: boolean) {
        getSS(["soutěže"]).then((competitions:{"soutěže":{list: {added:CompetitionFirebase[], removed:CompetitionFirebase[]}}, id:string}) => {
            const newCompetition = {
                name: values.name,
                type: values.type,
                registration: {
                    enabled: values.registration ? values.registration : null ,
                    date: values.registrationDate ? values.registrationDate : null,
                },
                competition: {
                    dateType: values.moredays ? "range" : "single",
                    date: values.moredays ? values.competitionDateRange ? values.competitionDateRange : null : values.competitionDate ? values.competitionDate : null,
                },
                place: values.place ? values.place : null,
                description: values.description ? values.description : null,
                links: competitionLinks ? competitionLinks : null,
                users: competitionUsers ? competitionUsers : null,
                createChannel: createChannel,
                postId: null,
            }


            if (competitions) {
                if (competitions["soutěže"].list.added.find((c) => c.name === newCompetition.name)) {
                    alert("Soutěž s tímto názvem již existuje.")

                    return
                } else {
                    competitions["soutěže"].list.added.push(newCompetition)

                    setDoc(doc(db, "ssbot", "soutěže"), {
                        list: competitions["soutěže"].list,
                    }).then(
                        () => {
                            if (redirect) {
                                window.location.href = "/soutezetryhard/udalosti"
                            }
                        }
                    )
                }
            }
        })
    }

    getDateArrayFromTimestamp(timestamp: string | number | Date) {
        const date = new Date(Number(timestamp) * 1000);
        console.log(date)
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Adding 1 since getMonth() returns 0-indexed months
        const day = date.getDate();

        return [year, month, day];
    }

    getDayOfWeekFromDateArray(dateArray: any[]) {
        const daysOfWeek = ['Ned', 'Pon', 'Úte', 'Stř', 'Čtv', 'Pát', 'Sob'];
        const year = dateArray[0];
        const month = dateArray[1] - 1; // Subtracting 1 to make it 0-indexed
        const day = dateArray[2];

        const date = new Date(year, month, day);
        const dayIndex = date.getDay();
        console.log(dayIndex);

        return daysOfWeek[dayIndex];
    }

    organizeCompetitionsByDate(competitions: any) {
        const transformedArray: any[] = [];

        competitions.forEach((competition: { competition: { dateType: string; date: { from: { seconds: number; }; seconds: number; }; }; }) => {
            const competitionDate = new Date(competition.competition.dateType === "range" ? competition.competition.date.from.seconds * 1000    :competition.competition.date.seconds * 1000); // Convert timestamp to Date object
            const year = competitionDate.getFullYear();
            const month = competitionDate.getMonth() + 1; // Months are 0-indexed, so add 1

            // Check if the year entry already exists in the transformed array
            let yearEntry = transformedArray.find(entry => entry.year === year);
            if (!yearEntry) {
                yearEntry = { year: year, competitions: [] };
                transformedArray.push(yearEntry);
            }

            // Check if the month entry already exists for the year
            let monthEntry = yearEntry.competitions.find((entry: { month: number; }) => entry.month === month);
            if (!monthEntry) {
                monthEntry = { month: month, competitions: [] };
                yearEntry.competitions.push(monthEntry);
            }

            // Add the competition to the appropriate month's competitions array
            monthEntry.competitions.push(competition);
        });

        return transformedArray;
    }

    getTimeAgo(timestamp:number) {
        const now = new Date().getTime();
        const diffInMillis = (now - timestamp) / 100;

        console.log(now)
        console.log(timestamp)
        console.log(diffInMillis)

        const minuteInMillis = 60 * 1000;
        const hourInMillis = 60 * minuteInMillis;
        const dayInMillis = 24 * hourInMillis;
        const monthInMillis = 30 * dayInMillis;
        const yearInMillis = 12 * monthInMillis;

        if (diffInMillis < minuteInMillis) {
            const minutesAgo = Math.round(diffInMillis / (1000));
            return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
        } else if (diffInMillis < hourInMillis) {
            const hoursAgo = Math.round(diffInMillis / (60 * 1000));
            return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
        } else if (diffInMillis < dayInMillis) {
            const daysAgo = Math.round(diffInMillis / dayInMillis);
            return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
        } else if (diffInMillis < monthInMillis) {
            const monthsAgo = Math.round(diffInMillis / monthInMillis);
            return `${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ago`;
        } else {
            const yearsAgo = Math.round(diffInMillis / yearInMillis);
            return `${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`;
        }
    }

    createEditor({originContent = "", placeholder = {placeholder: 'Write something …'}, document = {}, menubar = [] }: {originContent: string, placeholder: any, document: any, menubar:any[]}) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const editor = useEditor({
            content: originContent,
            editorProps: {
                attributes: {
                    spellCheck: "false",
                    class: "outline-none focus:outline-none"
                },
            },
            extensions: [
                StarterKit,
                Mathematics,
                CharacterCount,
                Code,
                CodeBlockLowlight
                    .extend({
                        addNodeView() {
                            return ReactNodeViewRenderer(CodeBlockComponent)
                        },
                    })
                    .configure({lowlight}),
                ColorHighlighter,
                Document.extend(document),
                Emoji.configure({
                    emojis: gitHubEmojis,
                    enableEmoticons: true,
                    suggestion: emojiSuggestion,
                }),
                Mention.configure({
                    HTMLAttributes: {
                        class: 'mention',
                    },
                    suggestion: mentionSuggestion,
                }),
                SmilieReplacer,
                Placeholder.configure(placeholder),
                Typography,
                Underline

            ],
        })

        return {
            editor: editor,
            menubar: menubar
        }
    }

    convertHtmlToMarkdown(html: string) {
        const mytext = html.replace(/<p>/g, "").replace(/<\/p>/g, "").replace(
            /<mark[^>]*>/g, ""
        ).replace(/<\/mark>/g, "")

        const turndownService = new TurndownService(
            {
                headingStyle: "atx",
            }
        )
        const markdown = turndownService.turndown(mytext).replace(/######/g, "###").replace(/#####/g, "###").replace(/####/g, "###")

        return markdown
    }





}

const functions = new Functions();

export default functions;