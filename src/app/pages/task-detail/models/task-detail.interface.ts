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