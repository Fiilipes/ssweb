// INTERFACES

export interface Server {
    name: string;
    joined: boolean;
    verified: boolean;
    atextMessageId: string;
}
export interface User {
    discordID: string;
    discordDiscriminator: string;
    discordUsername: string;
    discordAvatar: string;
    ssCoins?: number;
    inventory?: any
    servers?: Server[];
}

export interface Competition {
    name: string;
    type: "soutěž" | "přednáška" | "zájezd";
    id: string;
    miles:  {type: "single" | "range", date: Date | undefined | { from?: Date | undefined;     to?: Date | undefined; }}[];
    place: string | undefined;
    description: string | undefined;
    links: {label:string, link:string}[] | undefined;
    users: User[] | undefined;
    createChannel: boolean | undefined;
    postId: string | undefined;
}
export interface CompetitionFirebase {
    name?: string;
    type: string;
    competitionType: string;
    id: string;
    miles: {type: string, date: Date}[];
    place: string | null;
    description: string | null;
    links: {label:string, link:string}[] | null;
    users: User[] | null;
    createChannel: boolean | null;
    postId: string | null;
}

export interface CompetitionValues {
    theme?: string,
    name?: string,
    type: string,
    competitionType: string,
    registration?: boolean | undefined,
    registrationDate?: Date | undefined,
    moredays?: boolean | undefined,
    competitionDate?: Date | undefined,
    competitionDateRange?: {     from?: Date | undefined;     to?: Date | undefined; } | undefined,
    place: string | undefined,
    description?: string | undefined,
}

export interface SortedCompetition {
    year: number;
    competitions: {
        month: number;
        competitions: Competition[];
    }[];
}

export interface DiscordServer {
    name: string;
    link: string;
}