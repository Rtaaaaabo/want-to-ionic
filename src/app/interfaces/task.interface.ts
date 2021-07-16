export interface InterfaceTask {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    room: {
        __typename: "Room";
        id: string;
        name: string;
        companyID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
    };
    description?: string | null;
    iconTask?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
    } | null;
    scheduleDate?: string | null;
    priority?: number | null;
    status?: number | null;
    createdAt?: string | null;
    chargePerson: {
        __typename: "User";
        id: string;
        username?: string | null;
        email: string;
        companyID: string;
        tel?: string | null;
        positionName?: string | null;
        registered?: boolean | null;
        authority?: boolean | null;
        createdAt: string;
        updatedAt: string;
    };
    messages?: {
        __typename: "ModelMessageConnection";
        nextToken?: string | null;
    } | null;
    users?: {
        __typename: "ModelTaskGroupConnection";
        nextToken?: string | null;
    } | null;
    updatedAt: string;
}