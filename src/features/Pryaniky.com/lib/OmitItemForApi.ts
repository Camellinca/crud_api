import { Item, ItemForApi } from '../model/types';

export const omitItemForApi = (item: Item) => {
    const result: ItemForApi = {
        companySigDate: item.companySigDate,
        companySignatureName: item.companySignatureName,
        documentName: item.documentName,
        documentStatus: item.documentStatus,
        documentType: item.documentType,
        employeeNumber: item.employeeNumber,
        employeeSigDate: item.employeeSigDate,
        employeeSignatureName: item.employeeSignatureName,
    };
    return result;
};
