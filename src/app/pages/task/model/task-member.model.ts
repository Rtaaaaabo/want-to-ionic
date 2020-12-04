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