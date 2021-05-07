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