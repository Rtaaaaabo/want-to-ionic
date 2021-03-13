export interface InterfaceTask {
    __typename: string;
    id: string;
    authorID: string;
    roomID: string;
    // chargePerson: InterfaceChargePerson;
    title: string;
    description: string | null;
    scheduleDate: string | null;
    priority: number | null;
    status: number | null;
    createdAt: string | null;
    updatedAt: string;
}


interface InterfaceChargePerson {
    __typename: string;
    id: string;
    username: string;
    email: string;
    iconImage: string;
    positionName: string;
    authority: null;
    createdAt: string;
    registered: null;
    updatedAt: string;
}