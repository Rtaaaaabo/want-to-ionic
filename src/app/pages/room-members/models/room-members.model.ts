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