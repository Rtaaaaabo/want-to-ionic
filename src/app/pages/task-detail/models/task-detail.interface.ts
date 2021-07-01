import { Message } from 'src/app/shared/service/amplify.service';

export interface IMessageAttachment {
    bucket: string;
    key: string;
    region: string;
}

export interface IsMessageContent {
    data: {
        hasTaskKind: {
            chargePerson: boolean;
            description: boolean;
            name: boolean;
            scheduleDate: boolean;
        },
        taskValue: {
            chargePersonId: string;
            descriptionItem: string;
            nameItem: string;
            scheduleDateItem: string;
        }
    },
    role: undefined;
}

export interface MessageContent {
    id: string,
    taskID: string,
    authorID: string,
    content: string,
}

export interface IImageFile {
    key: string,
}

export interface IS3Object {
    key: string,
    bucket: string,
    region: string,
}

export interface IMessageWithAttachUrl extends Message {
    authorIconWithUrl?: string;
    attachmentWithUrl?: Array<string>;
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