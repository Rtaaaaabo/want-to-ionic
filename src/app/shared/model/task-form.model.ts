export interface TaskFormModel {
    nameItem: string;
    descriptionItem: string;
    chargePersonId: string;
    scheduleDateItem: string;
}

export interface IArgsEntrySignup {
    username: string;
    password: string;
    attributes: {
        name: string;
        email: string;
    }
}
