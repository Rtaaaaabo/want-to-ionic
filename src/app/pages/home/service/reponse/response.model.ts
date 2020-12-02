export interface ResponseListRoomGroupsQueryItems {
    // items: {
    __typename: string,
    id: string,
    roomID: string,
    userID: string,
    room?: {
        __typename: string,
        id: string,
        name: string,
        companyID: string,
        description: string,
        createdAt: string,
        updatedAt: string,
    } | null,
    user?: {
        __typename: string,
        id: string,
        username: string,
        email: string,
        companyID: string,
        tel: string,
        positionName: string,
        iconImage: string,
        registered: boolean,
        authority: string,
        createdAt: string,
        updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    // }
}