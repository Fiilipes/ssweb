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
    servers?: Server[];
}

export interface Competition {
    name: string;
    type: string;
    registration: {
        enabled: boolean | undefined;
        date: Date | undefined;
    };
    competition: {
        dateType: string | undefined;
        date: Date | { from: Date | undefined; to: Date | undefined } | undefined;
    }
    place: string | undefined;
    description: string | undefined;
    links: {label:string, link:string}[] | undefined;
    users: User[] | undefined;
    createChannel: boolean | undefined;
    postId: string | undefined;
}
export interface CompetitionFirebase {
    name: string;
    type: string;
    registration: {
        enabled: boolean | null;
        date: Date | null;
    };
    competition: {
        dateType: string | null;
        date: Date | { from: Date | null; to: Date | null } | null;
    }
    place: string | null;
    description: string | null;
    links: {label:string, link:string}[] | null;
    users: User[] | null;
    createChannel: boolean | null;
    postId: string | null;
}

export interface CompetitionValues {
    name: string,
    type: string,
    registration?: boolean | undefined,
    registrationDate?: Date | undefined,
    moredays?: boolean | undefined,
    competitionDate?: Date | undefined,
    competitionDateRange?: {     from: Date;     to: Date; } | undefined,
    place?: string | undefined,
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