import { GetUserQuery } from "src/app/shared/service/amplify.service";
import { IS3Object } from "../../task-detail/models/task-detail.interface";

export interface IOwnUser {
    __typename: string;
    id: string;
    username: string;
    email: string;
    companyID: string;
    authority: string;
    positionName: string;
    tel?: string;
    iconImage: IS3Object;
    registered?: boolean
    createdAt: string;
    updatedAt: string;
}

export interface IUser extends GetUserQuery {
    avatarUrl?: String | Object;
};

export interface Attribute {
    name: string,
    email: string,
    email_verified: boolean,
    sub: string,
};

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

export interface RoomGroupItems {
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

export interface IconImage {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
}
