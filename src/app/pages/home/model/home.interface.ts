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
