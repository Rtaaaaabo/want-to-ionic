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

export interface IMessageWithAttahUrl extends Message {
    attachmentWithUrl?: Array<string>;
}