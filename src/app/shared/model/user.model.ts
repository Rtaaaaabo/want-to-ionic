export interface Attribute {
    name: string,
    email: string,
    email_verified: boolean,
    sub: string,
}

export type ChargeTask = {
    __typename: "ModelTaskConnection";
    items?: Array<{
        __typename: "Task";
        id: string;
        authorID: string;
        roomID: string;
        chargePersonID: string;
        title: string;
        description?: string | null;
        scheduleDate?: string | null;
        priority?: number | null;
        status?: number | null;
        createdAt?: string | null;
        updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
}

export type ChargeTaskItems = {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    description?: string | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    updatedAt: string;
}