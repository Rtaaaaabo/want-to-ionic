export interface InterfaceRoomMembers {
    createdAt: string;
    id: string;
    roomID: string;
    updatedAt: string;
    user: InterfaceUser;
    userID: string;
    __typename: string;
}

export interface InterfaceUser {
    authority: string;
    companyID: string;
    createdAt: string;
    email: string;
    iconImage: string;
    id: string;
    positionName: string;
    registered: string;
    tel: string;
    updatedAt: string;
    username: string;
    __typename: string;
}