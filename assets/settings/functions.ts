import db, {getSS} from "./firebase";
import {doc, setDoc} from "@firebase/firestore";
import {Competition, CompetitionValues,CompetitionFirebase, User} from "./interfaces";



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





}

const functions = new Functions();

export default functions;