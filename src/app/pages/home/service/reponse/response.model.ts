export interface ResponseListRoomGroupsQueryItems {
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
        authority?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
}