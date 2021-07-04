export type ListRoomMembersInfo = {
    __typename: string;
    id: string;
    userID: string;
    roomID: string;
    createdAt: string,
    updatedAt: string;
    user: {
        __typename: string;
        id: string;
        companyID: string;
        username: string
        positionName: string;
        authority: string | null;
        createdAt: string;
        email: string;
        iconImage: string;
        registered: boolean | null;
        tel: string;
        updatedAt: string;
    }
}

export type ListUserInfo = {
    __typename: string;
    id: string;
    companyID: string;
    username: string
    positionName: string;
    authority: string | null;
    createdAt: string;
    email: string;
    iconImage: string;
    registered: boolean | null;
    tel: string;
    updatedAt: string;
}

export interface CurrentUser {
    __typename: "User";
    id: string;
    username: string;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    iconImage?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
    } | null;
    registered?: boolean | null;
    authority?: string | null;
    company: {
        __typename: "Company";
        id: string;
        name: string;
        domain: string;
        createdAt: string;
        updatedAt: string;
    };
    messages?: {
        __typename: "ModelMessageConnection";
        nextToken?: string | null;
    } | null;
    room?: {
        __typename: "ModelRoomGroupConnection";
        nextToken?: string | null;
    } | null;
    task?: {
        __typename: "ModelTaskGroupConnection";
        nextToken?: string | null;
    } | null;
    chargeTask?: {
        __typename: "ModelTaskConnection";
        nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
};

export interface Attribute {
    name: string,
    email: string,
    email_verified: boolean,
    sub: string,
};