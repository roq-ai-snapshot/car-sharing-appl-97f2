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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read car information', 'Create bookings', 'Read bookings', 'Create reviews'],
  ownerAbilities: [
    'Manage company information',
    'Manage cars within the company',
    'View and manage bookings',
    'View and respond to reviews',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/86d5256c-e584-494f-9963-4831fa750d38',
};
