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
    createdAt: string,
    id: string,
    room: {
        id: string,
        companyID: string,
        name: string,
        description: string,
        createdAt: string
        updatedAt: string,
        __typename: string,
    }
    roomID: string
    updatedAt: string,
    user: {
        authority: string,
        companyID: string,
        createdAt: string,
        email: string,
        iconImage: string,
        id: string,
        positionName: string,
        registered: boolean,
        tel: string,
        updatedAt: string,
        username: string
        __typename: string,
    }
    userID: string,
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