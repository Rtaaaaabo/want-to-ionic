export interface CurrentUser {
    __typename: "User";
    id: string;
    username?: string | null;
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
    authority?: boolean | null;
    company: {
        __typename: "Company";
        id: string;
        name: string;
        isRegistered: boolean;
        otp?: string | null;
        tel?: string | null;
        officialEmail?: string | null;
        billing?: boolean | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
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