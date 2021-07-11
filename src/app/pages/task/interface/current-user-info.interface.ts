export interface CurrentUserInfo {
    name: string,
    email: string,
    email_verified: boolean,
    sub: string,
}

export interface CompanyMembersInfo {
    __typename: "User";
    id: string;
    username?: string | null;
    email: string;
    companyID: string;
    tel?: string | null;
    positionName?: string | null;
    registered?: boolean | null;
    authority?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
}
