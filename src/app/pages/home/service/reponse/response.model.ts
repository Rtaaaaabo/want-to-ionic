export interface ResponseListRoomGroupsQueryItems {
    // items: {
    __typename: string,
    id: string,
    roomID: string,
    userID: string,
    room: {
        __typename: string,
        id: string,
        name: string,
        companyID: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    },
    user: {
        __typename: string,
        id: string,
        username: string,
        email: string,
        companyID: string,
        tel: string,
        positionName: string,
        iconImage: string,
        registered: null,
        authority: null,
        createdAt: string,
        updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    // }
}