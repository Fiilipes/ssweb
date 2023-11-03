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
// @ts-ignore
import diacritics from "diacritics";
import {Paragraph} from "@tiptap/extension-paragraph";



class Functions {
    createCompetition (values: CompetitionValues, competitionUsers: User[] | null, competitionLinks: {label:string,link:string}[] | null, createChannel: boolean, description: any, miles: any, redirect: boolean) {
        console.log("yooooo")
        getSS(["soutěže"]).then((competitions:{"soutěže":{list: {added:CompetitionFirebase[], removed:CompetitionFirebase[]}}, id:string}) => {
            let newCompetition = {} as CompetitionFirebase
            // generate random id 30 characters long
            let competitionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            switch (values.type) {
                case "soutěž":
                    newCompetition = {
                        name: values.name,
                        type: values.type,
                        competitionType: values.competitionType,
                        id: competitionId,
                        // @ts-ignore
                        miles: miles ? miles.map(({name,label,date,description,important}) => ({name,label,date,description,important}) ) : null,
                        place: values.place ? values.place : null,
                        description: description ? description : null,
                        links: competitionLinks ? competitionLinks : null,
                        users: competitionUsers ? competitionUsers : null,
                        createChannel: createChannel,
                        postId: null,
                    }
                    break;
                case "přednáška":

                    break;
                case "zájezd":

                    break;
            }


            if (competitions) {
                if (competitions["soutěže"].list.added.find((c) => c.name === newCompetition.name)) {
                    alert("Soutěž s tímto názvem již existuje.")

                    return
                } else {
                    competitions["soutěže"].list.added.push(newCompetition)

                    console.log(newCompetition)

                    setDoc(doc(db, "ssbot", "soutěže"), {
                        list: competitions["soutěže"].list,
                    }).then(
                        () => {
                            if (redirect) {
                                window.location.href = "/soutezetryhard/udalosti/" + values.name
                            }
                        }
                    )
                }
            }
        })
    }

    removeCompetition (competitionId: string) {
        getSS(["soutěže"]).then((competitions:any) => {
            if (competitions) {

                
                const myCompetition = competitions["soutěže"].list.added.find((c:any) => c.id === competitionId)

                console.log(myCompetition)

                if (myCompetition) {
                    // remove from added
                    competitions["soutěže"].list.added = competitions["soutěže"].list.added.filter((c:any) => c.id !== competitionId)
                    competitions["soutěže"].list.removed.push(myCompetition)
                }

                setDoc(doc(db, "ssbot", "soutěže"), {
                    list: competitions["soutěže"].list,
                }).then(
                    () => {
                        window.location.href = "/soutezetryhard"
                    }
                )
            }
        })
    }

    editCompetition (values: CompetitionValues, competitionUsers: User[] | null, competitionLinks: {label:string,link:string}[] | null, createChannel: boolean, redirect: boolean) {
        console.log(values)
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

        competitions.forEach((competition: any) => {
            console.log(competition)
            if (competition.competitionType === "jednokolová soutěž") {
                const competitionDate = new Date(competition.miles.find((mile:any) => mile.important).date.type === "range" ? competition.miles.find((mile:any) => mile.important).date.value.from.seconds * 1000    :competition.miles.find((mile:any) => mile.important).date.value.seconds * 1000); // Convert timestamp to Date object
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
                monthEntry.competitions.push({
                    competition: competition,
                    type: "jednokolová soutěž",
                });
                // sort monthEntry by date
                monthEntry.competitions.sort((a:any,b:any) => {
                    let aDate = new Date();
                    let bDate = new Date();
                    if (a.type === "jednokolová soutěž") {
                        aDate = new Date(a.competition.miles.find((mile:any) => mile.important).date.type === "range" ? a.competition.miles.find((mile:any) => mile.important).date.value.from.seconds * 1000    :a.competition.miles.find((mile:any) => mile.important).date.value.seconds * 1000); // Convert timestamp to Date object
                    } else {
                        aDate = new Date(a.mile.date.type === "range" ? a.mile.date.value.from.seconds * 1000    :a.mile.date.value.seconds * 1000); // Convert timestamp to Date object
                    }
                    if (b.type === "jednokolová soutěž") {
                        bDate = new Date(b.competition.miles.find((mile:any) => mile.important).date.type === "range" ? b.competition.miles.find((mile:any) => mile.important).date.value.from.seconds * 1000    :b.competition.miles.find((mile:any) => mile.important).date.value.seconds * 1000); // Convert timestamp to Date object
                    } else {
                        bDate = new Date(b.mile.date.type === "range" ? b.mile.date.value.from.seconds * 1000    :b.mile.date.value.seconds * 1000); // Convert timestamp to Date object
                    }

                    return aDate - bDate
                })
            } else {
                const competitionMiles = competition.miles.filter(mile => mile.important);
                competitionMiles.forEach((mile: any) => {
                    const competitionDate = new Date(mile.date.type === "range" ? mile.date.value.from.seconds * 1000    :mile.date.value.seconds * 1000); // Convert timestamp to Date object
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
                    monthEntry.competitions.push({
                        competition: competition,
                        type: "vícekolová soutěž",
                        mile: mile,

                    });
                    // sort monthEntry by date
                    monthEntry.competitions.sort((a:any,b:any) => {
                        let aDate = new Date();
                        let bDate = new Date();
                        if (a.type === "jednokolová soutěž") {
                            aDate = new Date(a.competition.miles.find((mile:any) => mile.important).date.type === "range" ? a.competition.miles.find((mile:any) => mile.important).date.value.from.seconds * 1000    :a.competition.miles.find((mile:any) => mile.important).date.value.seconds * 1000); // Convert timestamp to Date object
                        } else {
                            aDate = new Date(a.mile.date.type === "range" ? a.mile.date.value.from.seconds * 1000    :a.mile.date.value.seconds * 1000); // Convert timestamp to Date object
                        }
                        if (b.type === "jednokolová soutěž") {
                            bDate = new Date(b.competition.miles.find((mile:any) => mile.important).date.type === "range" ? b.competition.miles.find((mile:any) => mile.important).date.value.from.seconds * 1000    :b.competition.miles.find((mile:any) => mile.important).date.value.seconds * 1000); // Convert timestamp to Date object
                        } else {
                            bDate = new Date(b.mile.date.type === "range" ? b.mile.date.value.from.seconds * 1000    :b.mile.date.value.seconds * 1000); // Convert timestamp to Date object
                        }

                        return aDate - bDate
                    })
                });

            }

        });

        console.log(transformedArray)

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

    createEditor({originContent = "", placeholder = {placeholder: 'Write something …'}, document = {}, menubar = [], editable = true }: {originContent: string, placeholder: any, document: any, menubar:any[], editable: boolean}) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const editor = useEditor({
            content: originContent,
            editorProps: {
                attributes: {
                    spellCheck: "false",
                    class: "outline-none focus:outline-none"
                },
            },
            editable: editable,
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
                Paragraph.configure({
                    HTMLAttributes: {
                        class: 'biggerText',
                    },
                }),
                Underline

            ],
        })

        return {
            editor: editor,
            menubar: menubar,
            props: {
                editable: editable,
            }
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

    removeDiacritics(inputString:string) {
        return diacritics.remove(inputString);
    }

    async verifyUserById(users:any,id: string, server: string | null) {
        const userInDatabase = await users.list.some((u:any) => u.discordID === id)
        if (userInDatabase) {
            if (server) {
                return users.list.find((u:any) => u.discordID === id).servers.find((s:any) => s.name === server)?.verified
            } else {
                return users.list.find((u:any) => u.discordID === id)?.servers?.some((s: { verified: any; })=>s.verified)
            }
        } else {
            return userInDatabase
        }
    }

    avatarToAvatarUrl(discordAvatar: string,discordID:string|number) {
        return `https://cdn.discordapp.com/avatars/${discordID}/${discordAvatar}.png?size=128`
    }

    getTimeDifferenceDescription(inputDate:any) {
        const currentDate = new Date();
        // @ts-ignore
        const timeDifference = inputDate - currentDate;

        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const daysDifference = Math.floor(timeDifference / millisecondsPerDay) + 1;


        console.log(daysDifference)
        if (daysDifference === 0) {
            return 'Dnes';
        } else if (daysDifference === 1) {
            return 'Zítra';
        } else if (daysDifference <= 6) {
            return `Za ${daysDifference} ${daysDifference >= 5 ? 'dní' : 'dny'}`;
        } else if (daysDifference <= 20 ) {
            const weeks = Math.floor(daysDifference / 7);
            return `Za ${weeks} ${weeks <= 1 ? 'týden' : 'týdny'}`;
        } else if (daysDifference <= 334) {
            const months = Math.floor(daysDifference / 30);
            return `Za ${months} ${months <= 1 ? 'měsíc' : months <= 4 ? 'měsíce' : 'měsíců'}`;
        } else {
            const months = Math.floor(daysDifference / 30);
            const years = Math.floor(months / 12);
            return `Příští rok`;
        }
    }

    getRandomQuestion(questions: any[]) {
        // Get a random key from the 'questions' object
        const randomKey = Object.keys(questions)[Math.floor(Math.random() * Object.keys(questions).length)];

// Get a random series from the selected key
        // @ts-ignore
        const series = questions[randomKey].series;

// Get a random series from the selected series
        const randomSeriesIndex = Math.floor(Math.random() * series.length);
        const selectedSeries = series[randomSeriesIndex];

// Get a random question from the selected series
        const randomQuestionIndex = Math.floor(Math.random() * selectedSeries.questions.length);
        const randomQuestion = selectedSeries.questions[randomQuestionIndex];

// Now, you have a completely random question in the randomQuestion variable
        return randomQuestion;
    }

}

const functions = new Functions();

export default functions;