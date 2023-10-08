interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Administrator', 'Applicant'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'View company information',
    'View job positions',
    'View department information',
  ],
  ownerAbilities: [
    'Manage recruitment process',
    'Manage leave records',
    'Manage benefits',
    'Manage performance reviews',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1b33ac3c-ac6f-4f92-9677-a66d826cf100',
};
