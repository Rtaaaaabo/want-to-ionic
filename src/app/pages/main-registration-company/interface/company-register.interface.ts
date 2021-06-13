export interface CompanyRegister {
    companyEmail: string;
    companyIcon: string;
    companyName: string;
    companyOfficer: Array<OfficerRegister>;
    companyTel: string;
}

interface OfficerRegister {
    officerEmail: string;
    officerName: string;
}