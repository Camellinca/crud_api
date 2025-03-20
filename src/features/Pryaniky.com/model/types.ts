export interface Item {
    companySigDate: string;
    companySignatureName: string;
    documentName: string;
    documentStatus: string;
    documentType: string;
    employeeNumber: string;
    employeeSigDate: string;
    employeeSignatureName: string;
    id: string;
}
export type ItemForApi = Omit<Item, 'id'>;

export type List = Item[];
