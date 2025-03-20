import { Item } from '../model/types';

export const initialForForm = (initial?: Item) => {
    if (!initial) {
        const initialValues: Item = {
            companySigDate: '',
            companySignatureName: '',
            documentName: '',
            documentStatus: '',
            documentType: '',
            employeeNumber: '',
            employeeSigDate: '',
            employeeSignatureName: '',
            id: '',
        };
        return initialValues;
    } else {
        const initialValues: Item = {
            companySigDate: initial.companySigDate.slice(0, -1),
            companySignatureName: initial.companySignatureName,
            documentName: initial.documentName,
            documentStatus: initial.documentStatus,
            documentType: initial.documentType,
            employeeNumber: initial.employeeNumber,
            employeeSigDate: initial.employeeSigDate.slice(0, -1),
            employeeSignatureName: initial.employeeSignatureName,
            id: initial.id,
        };
        return initialValues;
    }
};
