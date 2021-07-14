import { Form, FormControl } from "@angular/forms";

export interface InterfaceArgsCreateRoom {
    id: string;
    companyID: string;
    name: string;
    description: string;
};

export interface InterfaceLogicArgsCreateRoom {
    nameItem: string;
    descriptionItem: string;
};

export interface InterfaceLogicArgsCreateUser {
    id: string;
    targetEmail: string;
    userName: string;
    positionName: string;
    tel: string;
    iconImage: string;
}

export interface ISArgsCreateRoomGroup {
    id: string;
    roomID: string;
    userID: string;
}

export interface ILResponseFetchRoomMembers {
    __typename: "RoomGroup";
    id: string;
    roomID: string;
    userID: string;
    room: {
        __typename: "Room";
        id: string;
        name: string;
        companyID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
    } | null;
    user: {
        __typename: "User";
        id: string;
        username: string;
        email: string;
        companyID: string;
        tel: string | null;
        positionName: string | null;
        iconImage: string | null;
        registered: boolean | null;
        authority: string | null;
        createdAt: string;
        updatedAt: string;
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

export interface RoomGroupItems {
    __typename: "RoomGroup";
    id: string;
    roomID: string;
    userID: string;
    room?: {
        __typename: "Room";
        id: string;
        name: string;
        companyID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
    } | null;
    user?: {
        __typename: "User";
        id: string;
        username: string;
        email: string;
        companyID: string;
        tel?: string | null;
        positionName?: string | null;
        registered?: boolean | null;
        authority?: boolean | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
}
