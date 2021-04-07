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