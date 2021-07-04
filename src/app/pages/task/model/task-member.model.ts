import { StatusBarInfoResult } from '@capacitor/core';

export interface MemberTask {
    __typename: string,
    id: string,
    companyID: string,
    username: string,
    email: string,
    iconImage: string,
    positionName: string,
    tel: string,
    registered: null,
    authority: null,
    createdAt: string,
    updatedAt: string,
    checked: boolean
}

export interface CompanyMembers {
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