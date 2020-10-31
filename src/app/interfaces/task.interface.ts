export interface InterfaceTask {
    __typename: "Task";
    id: string;
    authorID: string;
    roomID: string;
    chargePersonID: string;
    title: string;
    description: string | null;
    scheduleDate: string | null;
    priority: number | null;
    status: number | null;
    createdAt: string | null;
    updatedAt: string;
}
